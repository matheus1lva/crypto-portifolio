import {Binance} from 'universal-binance-api';
import {IWalletDailyAccountSnapshotDetailsDataBalance} from 'universal-binance-api/dist/lib/Wallet';
import {Service} from './Service';

interface AssetBought {
  price: string;
  qty: string;
}

function getMedian(assets: Array<AssetBought> | null) {
  if (!assets) {
    return 0;
  }

  let qtd = 0;
  let price = 0;
  assets?.forEach(asset => {
    qtd += parseFloat(asset.qty);
    price += parseFloat(asset.price);
  });

  const mean = price / qtd;

  return isNaN(mean) ? 0 : mean;
}

export class BinanceService implements Service {
  binance: Binance;
  balance: IWalletDailyAccountSnapshotDetailsDataBalance[] = [];

  provider = 'binance';

  constructor(apiKey: string, secretKey: string) {
    this.binance = new Binance(apiKey, secretKey, false);
  }

  async getAllCoins() {
    const result = await this.binance.wallet.walletDailyAccountSnapshot({
      type: 'SPOT',
    });
    this.balance =
      result?.snapshotVos[result.snapshotVos.length - 1]?.data?.balances.filter(
        coin => {
          return coin.free !== '0';
        },
      ) || [];
  }

  async getAssetFiatPrice(asset: string) {
    return await this.binance.market.marketCurrentAveragePrice({
      symbol: `${asset}USDT`,
    });
  }

  async getFiatBalance() {
    let total = 0;
    for (const coin of this.balance) {
      const {asset, free} = coin;
      // TOdo: add base currency as configurable
      const result = await this.getAssetFiatPrice(asset);
      total += parseFloat(free) * parseFloat(result.price);
    }
    return total;
  }

  async getDCAPrices() {
    await this.getAllCoins();
    const requests = this.balance.map(async coin => {
      const {asset} = coin;
      let usdt = null;
      let bnb = null;
      let eth = null;
      let btc = null;

      // TODO: Iterate or abstract a way to get the price of the asset on all pairs
      try {
        usdt = await this.binance.spot.spotAccountTradeList({
          symbol: `${asset}USDT`,
        });

        bnb = await this.binance.spot.spotAccountTradeList({
          symbol: `${asset}BNB`,
        });

        eth = await this.binance.spot.spotAccountTradeList({
          symbol: `${asset}ETH`,
        });

        btc = await this.binance.spot.spotAccountTradeList({
          symbol: `${asset}BTC`,
        });
      } catch (err) {
        // err does not matter
      }
      const dca =
        getMedian(usdt) + getMedian(eth) + getMedian(btc) + getMedian(bnb) / 4;
      return {
        ...coin,
        dca: dca === 0 ? parseFloat(coin.free) : dca,
      };
    });

    const results = await Promise.all(requests);
    return results;
  }

  async getTotalBalances() {
    await this.getAllCoins();
    const requests = this.balance.map(async coin => {
      const {asset, free} = coin;
      const result = await this.getAssetFiatPrice(asset);
      const price = parseFloat(result.price);
      const qty = parseFloat(free);
      return qty * price;
    });
    const results = await Promise.all(requests);

    return results.reduce((acc, cur) => acc + cur, 0);
  }
}
