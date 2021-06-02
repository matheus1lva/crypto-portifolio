import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {AccountBox} from '../AccountBox';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faPlus, faEye} from '@fortawesome/free-solid-svg-icons';
import {BinanceLogo} from '../../../../common/components/Logos';
import {useRecoilState} from 'recoil';
import {currentAccountState} from '../../../../atoms';

const styles = StyleSheet.create({
  section: {
    marginTop: 20,
  },
  sectionTitle: {
    color: 'white',
    marginBottom: 10,
    fontWeight: 'bold',
  },
  sectionHeader: {
    justifyContent: 'space-between',
    flexDirection: 'row',
  },

  headerActions: {
    flexDirection: 'row-reverse',
  },
  accountsList: {
    padding: 5,
    paddingLeft: 0,
    height: 85,
  },
});

export interface AccountsCarroselProps {
  navigation: any;
  data: object;
}

export function AccountsCarrosel(props: AccountsCarroselProps) {
  const {navigation, data} = props;
  const [, setCurrentAccount] = useRecoilState(currentAccountState);

  return (
    <View style={styles.section}>
      <View style={styles.sectionHeader}>
        <Text style={styles.sectionTitle}>Accounts</Text>
        <View style={styles.headerActions}>
          <FontAwesomeIcon
            icon={faPlus}
            size={12}
            color={'white'}
            style={{marginLeft: 5}}
          />
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
            navigation.navigate('Report');
            setCurrentAccount(data);
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
  );
}
