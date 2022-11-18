//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import Search from './search/search';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {CustomFontText} from './customFontText/CustomFontText';
import {COLORS} from '../utils/Colors';

// create a component
const BackHeader = ({title}) => {
  return (
    <View style={styles.container}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: 20,
        }}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <AntDesign name="arrowleft" size={35} color={COLORS.white} />
          <CustomFontText style={{color: COLORS.white, fontSize: 25, paddingLeft: 15,}}>
            New Task
          </CustomFontText>
        </View>
        <View>
          <TouchableOpacity>
            <Ionicons
              name="notifications-outline"
              size={35}
              color={COLORS.white}
            />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#7646FF',
  },
});

//make this component available to the app
export default BackHeader;
