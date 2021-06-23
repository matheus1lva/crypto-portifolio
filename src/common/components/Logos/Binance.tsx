import * as React from 'react';
import {Image, View} from 'react-native';
// @ts-ignore
import Logo from './binance-logo.png';

export interface BinanceLogoProps {
  height?: number;
  width?: number;
}

export function BinanceLogo(props: BinanceLogoProps) {
  return (
    <View style={props}>
      <Image
        source={Logo}
        resizeMode="cover"
        style={{
          width: '100%',
          height: '100%',
        }}
      />
    </View>
  );
}
