import {Binance} from 'universal-binance-api';

export class BinanceService {
  binance: Binance.Api;
  constructor(apiKey: string, secretKey: string) {
    this.binance = new Binance.Api(apiKey, secretKey, false);
  }

  async getAllCoins() {
    const result = await this.binance.walletDailyAccountSnapshot({
      type: 'SPOT',
    });

    return (
      result?.snapshotVos[result.snapshotVos.length - 1]?.data?.balances || []
    );
  }
}
