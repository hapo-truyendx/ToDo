//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';

// create a component
const ColorComponent = ({
  style = {},
}) => {
  return <View style={[styles.container, style]}></View>;
};

// define your styles
const styles = StyleSheet.create({
  container: {
    backgroundColor: 'red',
    width: 25,
    height: 25,
    borderRadius: 20,
  },
});

//make this component available to the app
export default ColorComponent;
