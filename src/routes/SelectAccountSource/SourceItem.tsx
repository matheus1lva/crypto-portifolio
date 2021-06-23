import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {BinanceLogo} from '../../common/components';
import {faChevronRight} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {useNavigation} from '@react-navigation/native';

const styles = StyleSheet.create({
  wrapper: {
    paddingLeft: 20,
    paddingRight: 20,
    height: 50,
    borderColor: 'red',
    borderWidth: 1,
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconWrapper: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
  },
  exchangeName: {
    marginLeft: 5,
    color: 'white',
  },
});

export default function SourceItem() {
  const navigator = useNavigation();
  return (
    <TouchableOpacity
      onPress={() => {
        navigator.navigate('AddAccount', {
          sourceName: 'binance',
        });
      }}>
      <View style={styles.wrapper}>
        <View style={styles.iconWrapper}>
          <BinanceLogo height={25} width={25} />
          <Text style={styles.exchangeName}>Binance</Text>
        </View>
        <FontAwesomeIcon icon={faChevronRight} size={12} color={'white'} />
      </View>
    </TouchableOpacity>
  );
}
