import React from 'react';
import {Col, Row, Grid} from 'react-native-easy-grid';
import {ScrollView, Text} from 'react-native';
import styled from 'styled-components/native';
import {CryptoIcon} from '../../../../common/components/CryptoIcons';

const HeaderText = styled(Text)`
  color: #878689;
  font-weight: bold;
`;

const CellText = styled(Text)`
  color: #f1f1f1;
`;

const Column = styled(Col)`
  justify-content: center;
`;

export interface AssetsTableProps {
  data: Array<any>;
}

export function AssetsTable(props: AssetsTableProps) {
  const {data} = props;

  return (
    <ScrollView>
      <Grid>
        <Row>
          <Col style={{width: 30}}>
            <Text>&nbsp;</Text>
          </Col>
          <Col>
            <HeaderText>Asset</HeaderText>
          </Col>
          <Col>
            <HeaderText>Price</HeaderText>
          </Col>
          <Col>
            <HeaderText>Holdings</HeaderText>
          </Col>
          <Col>
            <HeaderText>PNL</HeaderText>
          </Col>
        </Row>

        {data.map(datum => {
          return (
            <Row style={{height: 30}} key={datum.asset}>
              <Column style={{width: 30}}>
                <CryptoIcon currency={datum.asset} />
              </Column>
              <Column>
                <CellText>{datum.asset}</CellText>
              </Column>
              <Column>
                <CellText>{datum.price}</CellText>
              </Column>
              <Column>
                <CellText>{datum.holdings}</CellText>
              </Column>
              <Column>
                <CellText>{datum.pnl}</CellText>
              </Column>
            </Row>
          );
        })}
      </Grid>
    </ScrollView>
  );
}
