import React from 'react';
import { Text, StyleSheet } from 'react-native';
// import fontStyles from '../../config/font-styles';

export const CustomFontText = ({
  children,
  style = {},
  numberOfLines = 10,
  ...props
}) => {
  return (
    <Text numberOfLines={numberOfLines} style={[styles.defaultStyle, style]} {...props}>
      {children}
    </Text >
  );
};

const styles = StyleSheet.create({
  defaultStyle: {
    // fontFamily: fontStyles.regular
  }
});

