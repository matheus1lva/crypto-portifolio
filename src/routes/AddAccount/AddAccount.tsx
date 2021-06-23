import {useRoute} from '@react-navigation/native';
import React from 'react';
import {Body} from '../../common/components';
import {BINANCE} from '../../common/constants';
import BinanceAccount from './BinanceAccount';

export function AddAccount() {
  const router = useRoute();

  // @ts-ignore it exists!
  const sourceName = router.params?.sourceName;

  const sourcesMap: Record<string, React.ReactNode> = {
    [BINANCE]: <BinanceAccount />,
  };

  console.log({
    binance: sourcesMap.binance,
  });

  if (!sourceName) {
    return null;
  }

  return <Body>{sourcesMap[sourceName]}</Body>;
}
