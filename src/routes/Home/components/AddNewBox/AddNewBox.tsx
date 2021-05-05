import React from 'react';
import styled from 'styled-components/native';
import {AccountBoxWrapper} from '../AccountBox';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faPlus} from '@fortawesome/free-solid-svg-icons';
import {StyleSheet, Text} from 'react-native';

const styles = StyleSheet.create({
  addNew: {
    marginRight: 10,
  },
});

const AddNewBoxWrapper = styled(AccountBoxWrapper)`
  justify-content: space-between;
  flex-direction: row;
  align-items: center;
  margin-right: 10px;
  width: 140px;
`;

export function AddNewBox() {
  return (
    <AddNewBoxWrapper>
      <Text style={styles.addNew}>Add Account</Text>
      <FontAwesomeIcon icon={faPlus} size={12} />
    </AddNewBoxWrapper>
  );
}
