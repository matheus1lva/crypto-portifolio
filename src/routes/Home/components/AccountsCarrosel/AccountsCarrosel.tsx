import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {AccountBox} from '../AccountBox';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faPlus, faEye} from '@fortawesome/free-solid-svg-icons';
import {BinanceLogo, logos} from '../../../../common/components/Logos';
import {useRecoilState} from 'recoil';
import {currentAccountState} from '../../../../atoms';
import {useNavigation} from '@react-navigation/core';

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
  accounts: Record<string, any>;
}

export function AccountsCarrosel(props: AccountsCarroselProps) {
  const navigation = useNavigation();
  const {accounts} = props;
  console.log(accounts);
  const [, setCurrentAccount] = useRecoilState(currentAccountState);

  return (
    <View style={styles.section}>
      <View style={styles.sectionHeader}>
        <Text style={styles.sectionTitle}>Accounts</Text>
        <View style={styles.headerActions}>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('SelectSource');
            }}>
            <FontAwesomeIcon
              icon={faPlus}
              size={12}
              color={'white'}
              style={{marginLeft: 5}}
            />
          </TouchableOpacity>

          <FontAwesomeIcon icon={faEye} size={12} color={'white'} />
        </View>
      </View>
      <ScrollView
        horizontal={true}
        style={styles.accountsList}
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}>
        {Object.entries(accounts).map(([, accountService]) => {
          const Logo = logos[accountService.provider];
          return (
            <AccountBox
              name={accountService.provider}
              icon={<Logo height={10} width={10} />}
              amount={'$500,000.00'}
              onClick={() => {
                navigation.navigate('Report');
                setCurrentAccount(accountService);
              }}
            />
          );
        })}

        <AccountBox
          name="Binance Account"
          icon={<BinanceLogo height={10} width={10} />}
          amount={'$500,000.00'}
          onClick={() => {
            navigation.navigate('Report');
          }}
        />
        <AccountBox
          name="Binance Account"
          icon={<BinanceLogo height={10} width={10} />}
          amount={'$500,000.00'}
          onClick={() => {
            console.log('test-123');
          }}
        />
      </ScrollView>
    </View>
  );
}
