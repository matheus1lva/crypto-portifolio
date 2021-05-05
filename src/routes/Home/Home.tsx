import React from 'react';
import {Text, StyleSheet, View} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {SafeAreaView} from 'react-native-safe-area-context';
import {AccountBox, AddNewBox} from './components';
import {Box} from '../../common/components';

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: 'white',
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
    color: 'green',
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
    marginBottom: 10,
  },
  accountsList: {
    padding: 5,
  },
});

export function Home() {
  return (
    <>
      <SafeAreaView
        style={{
          flex: 0,
          backgroundColor: 'white',
        }}
      />
      <View style={styles.wrapper}>
        <Box>
          <Text style={styles.mainAccountTitle}>Main Account</Text>
          <Text style={styles.accountName}>Secret Offshore bank</Text>
          <View style={styles.balance}>
            <Text>$100,000,000.00</Text>
            <Text style={styles.percentage}>+1,523%</Text>
          </View>
          <Text style={styles.lastUpdated}>last updated 5 seconds ago</Text>
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
              amount={'$500,000.00'}
              previousAmount={'$500,000.00'}
            />
            <AddNewBox />
          </ScrollView>
        </View>
      </View>
    </>
  );
}
