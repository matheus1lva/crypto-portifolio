import React from 'react';
import styled from 'styled-components/native';
import {Box} from '../../../../common/components';
import {StyleSheet, Text, View} from 'react-native';

const styles = StyleSheet.create({
  percentage: {
    color: 'green',
  },
  individualBalance: {
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  amountIndividual: {
    marginRight: 10,
  },
});

export const AccountBoxWrapper = styled(Box)`
  margin-right: 10px;
`;

interface AccountBoxProps {
  name: string;
  amount: string;
  previousAmount?: string;
}

export function AccountBox(props: AccountBoxProps) {
  const {name, amount, previousAmount = 0} = props;
  return (
    <AccountBoxWrapper>
      <Text>{name}</Text>
      <View style={styles.individualBalance}>
        <Text style={styles.amountIndividual}>{amount}</Text>
        <Text style={styles.percentage}>{previousAmount}</Text>
      </View>
    </AccountBoxWrapper>
  );
}
