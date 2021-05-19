import React from 'react';
import {TouchableOpacity} from 'react-native';
interface BoxProps {
  children: React.ReactNode;
  onClick?: () => void;
  style?: any;
}

export function Box(props: BoxProps) {
  const {children, onClick, style = {}} = props;
  return (
    <TouchableOpacity onPress={onClick} style={style}>
      {children}
    </TouchableOpacity>
  );
}
