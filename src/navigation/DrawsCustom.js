//import liraries
import {
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';
import React, {Component} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import image from '../assets/image';
import {BoldText} from '../components/customFontText/BoldText';
import {CustomFontText} from '../components/customFontText/CustomFontText';
import {COLORS} from '../utils/Colors';

// create a component
const DrawCustom = props => {
  return (
    <View style={styles.container}>
      <View
        style={{
          backgroundColor: '#7646ff',
          alignItems: 'center',
          justifyContent: 'center',
          padding: 20,
        }}>
        <Image source={image.profile} style={{width: 100, height: 100}} />
        <BoldText
          children="John Smith"
          style={{color: COLORS.white, fontSize: 20, padding: 10}}
        />
      </View>
      {/* <DrawerContentScrollView {...props}>
        <DrawerItemList {...props} />
      </DrawerContentScrollView> */}
      <View>
        <TouchableOpacity onPress={() => {}} style={styles.draw}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Ionicons name="add" size={22} />
            <CustomFontText
              style={{
                fontSize: 15,
                paddingHorizontal: 5,
                marginLeft: 5,
              }}>
              New Task
            </CustomFontText>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => {}} style={styles.draw}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <AntDesign name="staro" size={22} />
            <CustomFontText
              style={{
                fontSize: 15,
                paddingHorizontal: 5,
                marginLeft: 5,
              }}>
              Important
            </CustomFontText>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => {}} style={styles.draw}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Ionicons name="checkbox-outline" size={22} />
            <CustomFontText
              style={{
                fontSize: 15,
                paddingHorizontal: 5,
                marginLeft: 5,
              }}>
              Done
            </CustomFontText>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => {}} style={styles.draw}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <AntDesign name="clockcircleo" size={22} />
            <CustomFontText
              style={{
                fontSize: 15,
                paddingHorizontal: 5,
                marginLeft: 5,
              }}>
              Lated
            </CustomFontText>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => {}} style={styles.draw}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <AntDesign name="tago" size={22} />
            <CustomFontText
              style={{
                fontSize: 15,
                paddingHorizontal: 5,
                marginLeft: 5,
              }}>
              Category
            </CustomFontText>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => {}} style={styles.draw}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <AntDesign name="setting" size={22} />
            <CustomFontText
              style={{
                fontSize: 15,
                paddingHorizontal: 5,
                marginLeft: 5,
              }}>
              Setting
            </CustomFontText>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => {}} style={styles.draw}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Ionicons name="exit-outline" size={22} />
            <CustomFontText
              style={{
                fontSize: 15,
                paddingHorizontal: 5,
                marginLeft: 5,
              }}>
              Sign Out
            </CustomFontText>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  draw: {
    borderWidth: 0.5,
    borderColor: '#F6F6F8',
    padding: 20,
  },
});

//make this component available to the app
export default DrawCustom;
