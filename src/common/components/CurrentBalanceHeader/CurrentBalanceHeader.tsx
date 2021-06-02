import React from 'react';
import {Text} from 'react-native';
import {Box} from '../Box';
import styled from 'styled-components/native';

const MainAccountTitle = styled(Text)`
  color: #b7b7b7;
`;

const Balance = styled(Text)`
  color: white;
  font-weight: bold;
  font-size: 20px;
  margin-bottom: 3px;
  margin-top: 3px;
`;

const Percentage = styled(Text)`
  color: #7cb293;
`;

export interface CurrentBalanceHeaderProps {
  styles?: object;
}

export function CurrentBalanceHeader(props: CurrentBalanceHeaderProps) {
  const {styles} = props;

  return (
    <Box style={styles}>
      <MainAccountTitle>Current Balance</MainAccountTitle>
      <Balance>$100,000,000.00</Balance>
      <Percentage>+1,523%</Percentage>
    </Box>
  );
}
