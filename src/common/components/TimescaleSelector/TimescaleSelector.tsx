import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Box} from '../Box';

const styles = StyleSheet.create({
  selectorWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  timespan: {
    fontWeight: 'bold',
    color: '#878689',
    padding: 5,
  },
  selectedTime: {
    backgroundColor: '#424960',
    borderRadius: 5,
  },
});

export function TimescaleSelector() {
  const [selectedTime, setSelectedTime] = React.useState('24h');
  const timescale = ['24h', '7d', '30d', '60d', '90d', 'All'];

  const setTime = (time: string) => {
    setSelectedTime(time);
  };
  return (
    <View style={styles.selectorWrapper}>
      {timescale.map(time => {
        return (
          <Box
            style={selectedTime === time ? styles.selectedTime : {}}
            key={time}
            onClick={() => setTime(time)}>
            <Text style={[styles.timespan]}>{time}</Text>
          </Box>
        );
      })}
    </View>
  );
}
