/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Text, StyleSheet, View} from 'react-native';
import {VictoryPie, VictoryBar} from 'victory-native';

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: '#5140BA',
  },
  header: {
    flex: 1,
    backgroundColor: '#5140BA',
    alignItems: 'center',
  },
  dates: {
    alignSelf: 'stretch',
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  text: {
    color: 'white',
  },
  content: {
    flex: 1,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    backgroundColor: 'white',
  },
});

export function Home() {
  return (
    <View style={styles.wrapper}>
      <View style={styles.header}>
        <Text
          style={{
            color: 'white',
          }}>
          Portifolio
        </Text>
        <View style={styles.dates}>
          <Text style={styles.text}>$1000.00</Text>
          <Text style={styles.text}>$1000.00</Text>
        </View>

        <View>
          <VictoryPie
            colorScale={['tomato', 'orange', 'gold', 'cyan', 'navy']}
            style={{
              labels: {
                fill: 'white',
              },
            }}
            animate={{
              duration: 2000,
            }}
            data={[
              {x: 'Cats', y: 35},
              {x: 'Dogs', y: 40},
              {x: 'Birds', y: 55},
            ]}
            height={300}
          />
        </View>
      </View>
      <View style={styles.content}>
        <VictoryBar
          data={[
            {x: 'Cats', y: 35},
            {x: 'Dogs', y: 40},
            {x: 'Birds', y: 55},
          ]}
          labels={({datum}) => `${datum.y}`}
        />
      </View>
    </View>
  );
}
