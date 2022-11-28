//import liraries
import { useNavigation } from '@react-navigation/native';
import React, {Component} from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import image from '../../../assets/image';
import {COLORS} from '../../../utils/Colors';

// create a component
const IntroductionScreen = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={{alignItems: 'center', marginVertical: 80,}}>
        <Image source={image.logo}  />
      </View>

      <View style={{marginVertical: 24}}>
        <TouchableOpacity
          style={{
            backgroundColor: '#143376',
            padding: 14,
            borderRadius: 6,
            alignItems: 'center',
            marginVertical: 8,
          }} onPress = {() => {
            navigation.navigate('Login')
          }}>
          <Text style={{fontSize: 16, fontWeight: '500', color: COLORS.white}}>
            Đăng nhập
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={{
            padding: 14,
            borderRadius: 6,
            alignItems: 'center',
            borderWidth: 1,
            borderColor: '#A1ADC8',
            marginVertical: 8,
          }} onPress = {() => {
            navigation.navigate('Register')
          }}>
          <Text style={{fontSize: 16, fontWeight: '500', color: '#143376'}}>
            Đăng ký
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    marginHorizontal: 16,
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#F5F5F5',
    justifyContent: 'space-between',
  },
});

//make this component available to the app
export default IntroductionScreen;
