import React from 'react';
import {StyleSheet} from 'react-native';
import {
  Button as RNUiButton,
  ButtonProps as RNUiButtonProps,
} from 'react-native-ui-lib';

type ButtonProps = Pick<
  RNUiButtonProps,
  'label' | 'disabled' | 'onPress' | 'size' | 'fullWidth'
> & {
  style: Record<string, string | number>;
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: 'purple',
  },
});

export function Button(props: ButtonProps) {
  const {
    label,
    disabled = false,
    onPress = () => {},
    size,
    fullWidth = true,
    style,
  } = props;

  return (
    <RNUiButton
      label={label}
      disabled={disabled}
      onPress={onPress}
      size={size}
      fullWidth={fullWidth}
      style={[styles.button, style]}
    />
  );
}
