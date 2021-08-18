import React from 'react';
import {BinanceLogo} from './Binance';

export * from './Binance';

export const logos: Record<string, React.FunctionComponent<any>> = {
  binance: BinanceLogo,
};
