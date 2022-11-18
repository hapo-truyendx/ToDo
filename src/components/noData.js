//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import image from '../assets/image';
import { COLORS } from '../utils/Colors';
import { BoldText } from './customFontText/BoldText';
import { CustomFontText } from './customFontText/CustomFontText';


// create a component
const NodataComponent = () => {
  return (
    <View style={styles.container}>
      <Image source={image.noData} resizeMode="contain" style={{height: 300}} />
      <BoldText
        children="All Done For Now"
        style={{fontSize: 20, color: '#5030A6'}}
      />
      <CustomFontText children="Next Task" />
      <CustomFontText children="Tomorrow 3:55 PM" />
      <BoldText
        children="Time for a Break"
        style={{fontSize: 18, color: COLORS.black}}
      />
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.white,
  },
});

//make this component available to the app
export default NodataComponent;
