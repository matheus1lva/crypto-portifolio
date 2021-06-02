import React from 'react';
import {Text, StyleSheet, View} from 'react-native';

import {CurrentBalanceHeader} from '../../common/components';

import {TimescaleSelector} from '../../common/components/TimescaleSelector';
import {AssetsTable} from './components/AssetsTable';
import {Body} from '../../common/components/Body';
import {AccountsCarrosel} from './components/AccountsCarrosel';

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

export interface HomeProps {
  navigation: any;
}

export function Home(props: HomeProps) {
  const {navigation} = props;

  const data = [
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
  ];

  return (
    <Body>
      <CurrentBalanceHeader />
      <AccountsCarrosel navigation={navigation} data={data} />

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>All Assets</Text>
        <TimescaleSelector />
        <CurrentBalanceHeader styles={styles.pnlPerTime} />
      </View>
      <AssetsTable data={data} />
    </Body>
  );
}
