import React from 'react';
import styled from 'styled-components/native';

const InputText = styled.TextInput.attrs(() => ({
  placeholderTextColor: '#cccccc',
}))`
  border: 1px solid #ccc;
  height: 40px;
  padding: 8px;
  border-radius: 5px;
`;

export function Input(props: any) {
  return <InputText {...props} />;
}
