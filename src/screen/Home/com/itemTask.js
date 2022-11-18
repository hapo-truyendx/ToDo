//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet, Dimensions, TouchableOpacity} from 'react-native';
import { BoldText } from '../../../components/customFontText/BoldText';
import { CustomFontText } from '../../../components/customFontText/CustomFontText';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {COLORS} from '../../../utils/Colors';
import ColorComponent from '../../../components/color';
import Octicons from 'react-native-vector-icons/Octicons';
import Entypo from 'react-native-vector-icons/Entypo';

// create a component
const ItemTask = () => {
  return (
    <View style={{borderTopWidth: 0.2, borderBottomWidth: 0.2, borderColor: '#CCCCCC'}}>
      <View
        style={{
          flexDirection: 'row',
          backgroundColor: COLORS.white,
          justifyContent: 'space-between',
          alignItems: 'center',
          width: Dimensions.get('window').width,
          padding: 20,
        }}>
        <View
          style={{
            backgroundColor: COLORS.white,
            justifyContent: 'flex-start',
            alignItems: 'flex-start',
            flexDirection: 'row',
          }}>
          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              paddingRight: 10,
            }}>
            <CustomFontText>10:00</CustomFontText>
            <CustomFontText>AM</CustomFontText>
          </View>
          <View>
            <BoldText style={{fontSize: 16}}>Meeting with client</BoldText>
            <CustomFontText>Official</CustomFontText>
          </View>
        </View>
        <View style={{flexDirection: 'row'}}>
          <AntDesign name="star" color="#FFEB3D" size={25} />
          <ColorComponent style={{marginHorizontal: 10}} />
          <TouchableOpacity>
            <Entypo name="dots-three-vertical" size={25} />
          </TouchableOpacity>
        </View>
      </View>
      <View></View>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2c3e50',
  },
});

//make this component available to the app
export default ItemTask;
