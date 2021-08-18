import React from 'react';
import {Text, StyleSheet, View} from 'react-native';

import {CurrentBalanceHeader} from '../../common/components';

import {TimescaleSelector} from '../../common/components/TimescaleSelector';
import {AssetsTable} from './components/AssetsTable';
import {Body} from '../../common/components/Body';
import {AccountsCarrosel} from './components/AccountsCarrosel';
import {AccountService} from '../../services/AccountsService';
import {BinanceService} from '../../services';
import {Account} from '../../database/Schemes';
import {Services} from 'realm';
import {accountsAtom} from '../../atoms';
import {useRecoilState, useSetRecoilState} from 'recoil';

const styles = StyleSheet.create({
  pnlPerTime: {
    marginTop: 10,
    marginBottom: 10,
  },

  section: {
    marginTop: 20,
  },
  sectionTitle: {
    color: 'white',
    marginBottom: 10,
    fontWeight: 'bold',
  },
});

export function Home() {
  const accountService = new AccountService();
  const [accounts, setAccounts] = useRecoilState(accountsAtom);

  const getAccountsAndSave = async () => {
    const services = {
      binance: BinanceService,
    };

    const accountsServices: Record<string, any> = {};

    (await accountService.getAllAccounts()).forEach((account: Account) => {
      const provider = account.provider as keyof typeof services;

      accountsServices[account._id] = new services[provider](
        account.apiKey,
        account.secretKey,
      );
    });

    // @ts-ignore
    setAccounts(accountsServices);
  };

  React.useEffect(() => {
    getAccountsAndSave();
  }, []);

  const data = {
    accountProvider: 'binance',
    balances: [
      {
        asset: 'BTC',
        price: '$7,232.21',
        holdings: '132,000.00',
        pnl: '30000%',
      },
      {
        asset: 'ETH',
        price: '$7,232.21',
        holdings: '132,000.00',
        pnl: '30000%',
      },
      {
        asset: 'LTC',
        price: '$7,232.21',
        holdings: '132,000.00',
        pnl: '30000%',
      },
    ],
  };

  return (
    <Body>
      <CurrentBalanceHeader />
      <AccountsCarrosel accounts={accounts} />

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>All Assets</Text>
        <TimescaleSelector />
        <CurrentBalanceHeader styles={styles.pnlPerTime} />
      </View>
      <AssetsTable data={data.balances} />
    </Body>
  );
}
