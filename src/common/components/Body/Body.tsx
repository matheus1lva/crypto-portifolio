import React from 'react';
import {View} from 'react-native';
import styled from 'styled-components/native';

const Wrapper = styled(View)`
  flex: 1;
  background-color: #202020;
  padding: 20px;
`;

export function Body(props: React.PropsWithChildren<{}>) {
  const {children} = props;
  return <Wrapper>{children}</Wrapper>;
}
