//import liraries
import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import image from '../../../assets/image';
import {COLORS} from '../../../utils/Colors';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native';

// create a component
const Header = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <TouchableOpacity
          style={{paddingHorizontal: 8}}
          onPress={() => navigation.openDrawer()}>
          <Feather name="menu" size={35} color={COLORS.white} />
        </TouchableOpacity>
        <Image
          source={image.logo_mini}
          style={{width: 150}}
          resizeMode="contain"
        />
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <TouchableOpacity>
          <Ionicons
            name="notifications-outline"
            size={35}
            color={COLORS.white}
          />
        </TouchableOpacity>
        <TouchableOpacity style={{paddingHorizontal: 8}} onPress = {() => navigation.navigate('Create')}>
          <Ionicons name="add" size={35} color={COLORS.white} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    width: Dimensions.get('window').width,
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#7646ff',
    flexDirection: 'row',
    paddingVertical: 12,
  },
});

//make this component available to the app
export default Header;
