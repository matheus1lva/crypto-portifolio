import React from 'react';
import {TouchableOpacity} from 'react-native';
interface BoxProps {
  children: React.ReactNode;
  onClick?: () => void;
}

export function Box(props: BoxProps) {
  const {children, onClick} = props;
  return <TouchableOpacity onPress={onClick}>{children}</TouchableOpacity>;
}
