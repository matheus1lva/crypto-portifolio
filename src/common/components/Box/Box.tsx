/* eslint-disable prettier/prettier */
import React from 'react';
import styled from 'styled-components/native';

const BoxWrapper = styled.View`
  background: #fafafc;
  padding: 20px;
  border-radius: 5px;
  shadowColor: #000;
  shadowOffset: 0;
  shadowOpacity: 0.25;
  shadowRadius: 1.2;
`;

interface BoxProps {
  children: React.ReactNode;
  style?: any;
}

export function Box(props: BoxProps) {
  const {children, style} = props;
  return <BoxWrapper style={style}>{children}</BoxWrapper>;
}
