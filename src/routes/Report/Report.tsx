// import {APIKEY, SECRET} from 'react-native-dotenv';
import React from 'react';
import {Dimensions, StyleSheet, Text, View} from 'react-native';
import {useRecoilState} from 'recoil';
import {
  VictoryChart,
  VictoryLine,
  VictoryPie,
  VictoryTheme,
} from 'victory-native';
import {currentAccountState} from '../../atoms';
import {Box} from '../../common/components';
import {Body} from '../../common/components/Body';
import {TimescaleSelector} from '../../common/components/TimescaleSelector';
import {BinanceService} from '../../services';
import {AssetsTable} from '../Home/components/AssetsTable';

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  text: {
    color: 'white',
  },
  mainAccountTitle: {
    color: '#B7B7B7',
  },
  totalBalance: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 20,
    marginBottom: 3,
    marginTop: 3,
  },
  percentage: {
    color: '#7cb293',
  },
  pnlPerTime: {
    marginTop: 10,
    marginBottom: 10,
  },
  section: {
    marginTop: 20,
  },
  sectionTitle: {
    color: 'white',
    marginBottom: 10,
    fontWeight: 'bold',
  },
});

export function Report() {
  const [account] = useRecoilState(currentAccountState);

  const binanceService = new BinanceService(
    'Kcs1L4KJuak56P0IrWCHGdrIR2RB6YYzDtV6BYkPu1qYIX0mKXeaIw8vbQJGwQQI',
    'pUfzXxjhoXqj58PPVvJIejIdi3yxjIMufF4IVjbcthy5kQQpF7n8jBUzVLGTM2HQ',
  );

  // binanceService.getAllCoins();

  React.useEffect(() => {
    binanceService.getTotalBalances();
  }, []);

  if (!account) {
    return null;
  }

  const data = [
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
  ];

  return (
    <Body>
      <View style={styles.header}>
        <View>
          <Box>
            <Text style={styles.mainAccountTitle}>Current Balance</Text>
            <Text style={styles.totalBalance}>$100,000,000.00</Text>
            <Text style={styles.percentage}>+1,523%</Text>
          </Box>
        </View>
        <VictoryPie
          colorScale={['tomato', 'orange', 'gold', 'cyan', 'navy']}
          style={{
            labels: {
              fill: 'white',
              fontWeight: 'bold',
            },
          }}
          labelRadius={({innerRadius}) => Number(innerRadius) + 20}
          animate={{
            duration: 2000,
          }}
          data={[
            {x: 'Cats', y: 35},
            {x: 'Dogs', y: 40},
            {x: 'Birds', y: 55},
          ]}
          height={120}
          width={150}
          padding={{top: 0, bottom: 0, left: 0, right: 0}}
        />
      </View>

      <View>
        <VictoryChart
          width={Dimensions.get('window').width}
          padding={{top: 20, left: 30, right: 40, bottom: 30}}
          height={200}
          theme={VictoryTheme.material}>
          <VictoryLine
            style={{
              data: {stroke: '#c43a31'},
              parent: {border: '1px solid #ccc'},
            }}
            data={[
              {x: 1, y: 2},
              {x: 2, y: 3},
              {x: 3, y: 5},
              {x: 4, y: 4},
              {x: 5, y: 7},
            ]}
          />
        </VictoryChart>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>All Assets</Text>
        <TimescaleSelector />
        <Box style={styles.pnlPerTime}>
          <Text style={styles.mainAccountTitle}>Current Balance</Text>
          <Text style={styles.totalBalance}>$100,000,000.00</Text>
          <Text style={styles.percentage}>+1,523%</Text>
        </Box>
      </View>

      <AssetsTable data={data} />
    </Body>
  );
}
