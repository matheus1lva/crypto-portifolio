import React from 'react';
import {Text, StyleSheet, View, FlatList} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {SafeAreaView} from 'react-native-safe-area-context';
import {AccountBox} from './components';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faPlus, faEye} from '@fortawesome/free-solid-svg-icons';
import {Box} from '../../common/components';
import {BinanceLogo} from '../../common/components/Logos';
import {TimescaleSelector} from '../../common/components/TimescaleSelector';
import {AssetHeaderList, AssetRender} from './components';

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
  section: {
    marginTop: 20,
  },
  sectionTitle: {
    color: 'white',
    marginBottom: 10,
    fontWeight: 'bold',
  },
  accountsList: {
    padding: 5,
    paddingLeft: 0,
    height: 85,
  },
  totalBalance: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 20,
    marginBottom: 3,
    marginTop: 3,
  },
  sectionHeader: {
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  headerActions: {
    flexDirection: 'row-reverse',
  },
  pnlPerTime: {
    marginTop: 10,
    marginBottom: 10,
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

        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Accounts</Text>
            <View style={styles.headerActions}>
              <FontAwesomeIcon icon={faPlus} size={12} color={'white'} />
              <FontAwesomeIcon icon={faEye} size={12} color={'white'} />
            </View>
          </View>
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
            <AccountBox
              name="Binance Account"
              icon={<BinanceLogo />}
              amount={'$500,000.00'}
              onClick={() => {
                console.log('test 123');
              }}
            />
            <AccountBox
              name="Binance Account"
              icon={<BinanceLogo />}
              amount={'$500,000.00'}
              onClick={() => {
                console.log('test 123');
              }}
            />
          </ScrollView>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>All Assets</Text>
          <TimescaleSelector />
          <Box style={styles.pnlPerTime}>
            <Text style={styles.mainAccountTitle}>Current Balance</Text>
            <Text style={styles.totalBalance}>$100,000,000.00</Text>
            <Text style={styles.percentage}>+1,523%</Text>
          </Box>
          <FlatList
            data={[
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
            ]}
            renderItem={AssetRender}
            ListHeaderComponent={AssetHeaderList}
            keyExtractor={item => item.asset}
          />
        </View>
      </View>
    </>
  );
}
