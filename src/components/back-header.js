//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import Search from './search/search';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {CustomFontText} from './customFontText/CustomFontText';
import {COLORS} from '../utils/Colors';
import {useNavigation} from '@react-navigation/native';

// create a component
const BackHeader = ({title, isAdd}) => {
  const navigate = useNavigation();
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
          <TouchableOpacity onPress={() => navigate.goBack()}>
            <AntDesign name="arrowleft" size={35} color={COLORS.white} />
          </TouchableOpacity>

          <CustomFontText
            style={{color: COLORS.white, fontSize: 25, paddingLeft: 15}}>
            New Task
          </CustomFontText>
        </View>
        <View style={{flexDirection: 'row'}}>
          <TouchableOpacity>
            <Ionicons
              name="notifications-outline"
              size={35}
              color={COLORS.white}
            />
          </TouchableOpacity>
          { isAdd && <TouchableOpacity
            style={{paddingLeft: 8}}
            onPress={() => navigate.navigate('Create')}>
            <Ionicons name="add" size={35} color={COLORS.white} />
          </TouchableOpacity>}
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
