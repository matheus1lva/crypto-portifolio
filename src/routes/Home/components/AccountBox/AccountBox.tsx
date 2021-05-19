import React from 'react';
import styled from 'styled-components/native';
import {StyleSheet, Text, View} from 'react-native';
import {Box} from '../../../../common/components';

const styles = StyleSheet.create({
  percentage: {
    color: '#7cb293',
  },
  individualBalance: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    color: 'white',
  },
  amountIndividual: {
    color: '#7cb293',
    marginRight: 10,
  },
  icons: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconsWrapper: {
    marginRight: 5,
  },
});

export const AccountBoxWrapper = styled.View`
  border-radius: 5px;
  margin-right: 10px;
  border: 1px solid #b8b8b8;
  padding: 15px;
  height: 100%;
`;

interface AccountBoxProps {
  name: string;
  amount: string;
  onClick?: () => void;
  icon?: any;
}

export function AccountBox(props: AccountBoxProps) {
  const {name, amount, onClick = () => {}, icon} = props;
  return (
    <Box onClick={onClick}>
      <AccountBoxWrapper>
        <View style={styles.icons}>
          <View style={styles.iconsWrapper}>{icon}</View>
          <Text style={{color: 'white'}}>{name}</Text>
        </View>
        <View style={styles.individualBalance}>
          <Text style={styles.amountIndividual}>{amount}</Text>
        </View>
      </AccountBoxWrapper>
    </Box>
  );
}
