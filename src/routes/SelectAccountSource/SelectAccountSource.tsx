import React from 'react';
import {ScrollView, StyleSheet} from 'react-native';
import {Body} from '../../common/components';
import SourceItem from './SourceItem';

const styles = StyleSheet.create({
  list: {
    flexGrow: 1,
  },
});

export default function SelectAccountSource() {
  return (
    <Body>
      <ScrollView style={styles.list}>
        <SourceItem />
        <SourceItem />
        <SourceItem />
        <SourceItem />
      </ScrollView>
    </Body>
  );
}
