import React from 'react';
import {Text} from 'react-native';
import {Row} from '../Row';
import styled from 'styled-components/native';
import {Cell} from '../Cell/Cell';

interface AssetRender {
  item: any;
  index: number;
}

const CellText = styled(Text)`
  color: #f1f1f1;
`;

export function AssetRender(props: AssetRender) {
  const {item, index} = props;
  return (
    <Row key={index}>
      <Cell>
        <CellText>{item.asset}</CellText>
      </Cell>
      <Cell>
        <CellText>{item.price}</CellText>
      </Cell>
      <Cell>
        <CellText>{item.holdings}</CellText>
      </Cell>
      <Cell>
        <CellText>{item.pnl}</CellText>
      </Cell>
    </Row>
  );
}
