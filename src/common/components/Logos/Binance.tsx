import * as React from 'react';
import {Image} from 'react-native';
// @ts-ignore
import Logo from './binance-logo.png';

export function BinanceLogo() {
  return <Image source={Logo} />;
}
