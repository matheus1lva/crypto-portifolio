import {Binance} from 'universal-binance-api';
import {IWalletDailyAccountSnapshotDetailsDataBalance} from 'universal-binance-api/dist/lib/Wallet';

export class BinanceService {
  binance: Binance;
  balance: IWalletDailyAccountSnapshotDetailsDataBalance[] = [];

  constructor(apiKey: string, secretKey: string) {
    this.binance = new Binance(apiKey, secretKey, false);
  }

  async getAllCoins() {
    const result = await this.binance.wallet.walletDailyAccountSnapshot({
      type: 'SPOT',
    });

    this.balance =
      result?.snapshotVos[result.snapshotVos.length - 1]?.data?.balances || [];
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
      const result = await this.getAssetFiatPrice(asset);
      total += parseFloat(free) * parseFloat(result.price);
    }
    return total;
  }

  // async accountInfo() {
  //   const balance = await this.binance.wallet.walletAccountInfo();
  //   return balance;
  // }
}
