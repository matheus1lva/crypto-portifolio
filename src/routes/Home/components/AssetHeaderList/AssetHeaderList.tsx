import React from 'react';
import {Text} from 'react-native';
import styled from 'styled-components/native';
import {Cell} from '../Cell/Cell';
import {Row} from '../Row';

const HeaderText = styled(Text)`
  color: #878689;
  font-weight: bold;
`;

export function AssetHeaderList() {
  return (
    <Row>
      <Cell>
        <HeaderText>Asset</HeaderText>
      </Cell>
      <Cell>
        <HeaderText>Price</HeaderText>
      </Cell>
      <Cell>
        <HeaderText>Holdings</HeaderText>
      </Cell>
      <Cell>
        <HeaderText>PNL</HeaderText>
      </Cell>
    </Row>
  );
}
