//import liraries
import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import images from '../../assets/image';
import {COLORS} from '../../utils/Colors';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import Entypo from 'react-native-vector-icons/Entypo';
import {CustomFontText} from '../../components/customFontText/CustomFontText';

// create a component
const LoginScreen = () => {
  return (
    <View style={styles.container}>
      <View style={{marginBottom: 100}}>
        <Image
          source={images.logo}
          style={{width: 200, height: 141}}
          resizeMode="contain"
        />
      </View>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          borderWidth: 1,
          borderColor: '#707070',
          padding: 8,
          borderRadius: 8,
        }}>
        <FontAwesome name="user-o" size={25} />
        <TextInput placeholder="Username" style={{padding: 10, width: 250}} />
      </View>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          borderWidth: 1,
          borderColor: '#707070',
          padding: 8,
          marginTop: 16,
          borderRadius: 8,
        }}>
        <SimpleLineIcons name="lock" size={25} />
        <TextInput placeholder="Password" style={{padding: 10, width: 250}} />
      </View>
      <View>
        <TouchableOpacity
          style={{
            backgroundColor: '#6035d0',
            width: 290,
            paddingVertical: 15,
            marginTop: 16,
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 8,
            opacity: 0.9,
          }}>
          <CustomFontText
            children="Login"
            style={{color: COLORS.white, fontSize: 25}}
          />
        </TouchableOpacity>
      </View>
      <View>
        <CustomFontText children="login using social media" style={{marginVertical: 30}}/>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <View
            style={{
              backgroundColor: '#3b5998',
              width: 70,
              height: 70,
              borderRadius: 50,
              justifyContent: 'center',
              alignItems: 'center',
              margin: 10,
            }}>
            <FontAwesome
              name="facebook"
              size={35}
              color={COLORS.white}
              style={{
                backgroundColor: '#3b5998',
                borderRadius: 50,
              }}
            />
          </View>
          <View
            style={{
              backgroundColor: '#dd4b39',
              width: 70,
              height: 70,
              borderRadius: 50,
              justifyContent: 'center',
              alignItems: 'center',
              margin: 10,
            }}>
            <Entypo
              name="google-"
              size={35}
              color={COLORS.white}
              style={{backgroundColor: '#dd4b39'}}
            />
          </View>
        </View>
      </View>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.red,
  },
});

//make this component available to the app
export default LoginScreen;
