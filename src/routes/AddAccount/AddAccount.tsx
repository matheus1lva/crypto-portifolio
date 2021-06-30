import {useRoute} from '@react-navigation/native';
import React from 'react';
import {Body} from '../../common/components';
import {BINANCE} from '../../common/constants';
import {AccountService} from '../../services/AccountsService';
import BinanceAccount from './BinanceAccount';

export function AddAccount() {
  const router = useRoute();

  // @ts-ignore it exists!
  const sourceName = router.params?.sourceName;

  const accountService = new AccountService();

  const sourcesMap: Record<string, React.ReactNode> = {
    [BINANCE]: (
      <BinanceAccount handleAccountLink={accountService.createAccount} />
    ),
  };

  if (!sourceName) {
    return null;
  }

  return <Body>{sourcesMap[sourceName]}</Body>;
}
