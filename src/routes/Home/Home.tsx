import React from 'react';
import {Text, StyleSheet, View} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {SafeAreaView} from 'react-native-safe-area-context';
import {AccountBox, AddNewBox} from './components';
import {Box} from '../../common/components';
import {BinanceLogo} from '../../common/components/Logos';

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: '#202020',
    padding: 20,
  },
  mainAccountTitle: {
    color: '#B7B7B7',
  },
  accountName: {
    fontSize: 18,
    marginTop: 5,
  },
  balance: {
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  percentage: {
    color: '#7cb293',
  },
  lastUpdated: {
    color: '#b7b7b7',
    fontSize: 10,
    marginTop: 5,
  },
  accounts: {
    marginTop: 20,
  },
  accountsTitle: {
    color: 'white',
    marginBottom: 10,
  },
  accountsList: {
    padding: 5,
    height: 85,
  },
  totalBalance: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 20,
    marginBottom: 3,
    marginTop: 3,
  },
});

export function Home() {
  return (
    <>
      <SafeAreaView
        style={{
          flex: 0,
          backgroundColor: '#202020',
        }}
      />
      <View style={styles.wrapper}>
        <Box>
          <Text style={styles.mainAccountTitle}>Current Balance</Text>
          <Text style={styles.totalBalance}>$100,000,000.00</Text>
          <Text style={styles.percentage}>+1,523%</Text>
        </Box>

        <View style={styles.accounts}>
          <Text style={styles.accountsTitle}>Accounts</Text>
          <ScrollView
            horizontal={true}
            style={styles.accountsList}
            showsVerticalScrollIndicator={false}
            showsHorizontalScrollIndicator={false}>
            <AccountBox
              name="Binance Account"
              icon={<BinanceLogo />}
              amount={'$500,000.00'}
              onClick={() => {
                console.log('test 123');
              }}
            />
            <AddNewBox />
          </ScrollView>
        </View>
      </View>
    </>
  );
}
