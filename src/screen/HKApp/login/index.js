//import liraries
import React, {Component, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {COLORS} from '../../../utils/Colors';
import CheckBox from '@react-native-community/checkbox';
import {useNavigation} from '@react-navigation/native';

// create a component
const LoginScreen = () => {
  const navigation = useNavigation();
  const [hiddenPassword, setHiddenPassword] = useState(false);
  const [checked, setChecked] = useState(false);
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={{marginBottom: 30}}
        onPress={() => {
          navigation.goBack();
        }}>
        <Ionicons name="arrow-back-sharp" size={30} color="#1E2329" />
      </TouchableOpacity>

      <View>
        <Text
          style={{
            fontSize: 40,
            color: '#1E2329',
            fontWeight: '600',
            textAlign: 'center',
          }}>
          Đăng nhập
        </Text>
        <Text
          style={{
            fontSize: 14,
            fontWeight: '400',
            textAlign: 'center',
            paddingVertical: 10,
          }}>
          Vui lòng điền thông tin đăng nhập để sử dụng dịch vụ của Viện Thẩm Mỹ
          Quốc Tế Hoa Kỳ
        </Text>
      </View>
      <View>
        <View style={{marginVertical: 8}}>
          <Text style={{fontSize: 14, fontWeight: '500', paddingVertical: 4}}>
            Tên đăng nhập
          </Text>
          <View>
            <TextInput
              placeholder="Nhập tên đăng nhập"
              style={{
                borderColor: '#A1ADC8',
                borderWidth: 1,
                borderRadius: 8,
                padding: 10,
                paddingLeft: 45,
              }}
            />
            <View style={{position: 'absolute', padding: 10}}>
              <Ionicons name="person" size={25} color="#1E2329" />
            </View>
          </View>
        </View>
        <View style={{marginVertical: 8}}>
          <Text style={{fontSize: 14, fontWeight: '500', paddingVertical: 4}}>
            Tên đăng nhập
          </Text>
          <View>
            <TextInput
              placeholder="Nhập tên đăng nhập"
              style={{
                borderColor: '#A1ADC8',
                borderWidth: 1,
                borderRadius: 8,
                padding: 10,
                paddingHorizontal: 45,
              }}
              secureTextEntry={hiddenPassword}
            />
            <View style={{position: 'absolute', padding: 10}}>
              <Ionicons name="lock-closed" size={25} color="#1E2329" />
            </View>
            <TouchableOpacity
              style={{position: 'absolute', padding: 10, right: 0}}
              onPress={() => setHiddenPassword(!hiddenPassword)}>
              <Ionicons
                name={!hiddenPassword ? 'eye' : 'eye-off'}
                size={25}
                color="#1E2329"
              />
            </TouchableOpacity>
          </View>
        </View>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <View style={styles.checkWrap}>
            <CheckBox
              value={checked}
              onValueChange={newValue => setChecked(newValue)}
              offAnimationType="fill"
              onFillColor={COLORS.primary}
              tintColors={{true: '#143376', false: '#A1ADC8'}}
              style={{
                transform: [{scaleX: 1}, {scaleY: 1}],
              }}
              // style={{ height: 18, width: 18 }}
              boxType="square"
              onCheckColor={COLORS.white}
              onTintColor={COLORS.white}
            />
            <Text style={[]}>Nhớ mật khẩu</Text>
          </View>
          <TouchableOpacity style={styles.checkWrap}>
            <Text style={{color: '#143376'}}>Quên mật khẩu?</Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity
          style={{
            backgroundColor: '#143376',
            padding: 14,
            borderRadius: 6,
            alignItems: 'center',
            marginVertical: 8,
            marginTop: 60,
          }}
          onPress={() => {
            navigation.navigate('Login');
          }}>
          <Text style={{fontSize: 16, fontWeight: '500', color: COLORS.white}}>
            Đăng nhập
          </Text>
        </TouchableOpacity>
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'center',
          flex: 1,
          alignItems: 'flex-end',
          marginBottom: 30,
        }}>
        <Text>Chưa có tài khoản?</Text>
        <TouchableOpacity style={{color: '#143376'}}>
          <Text style={{color: '#143376'}}>Đăng ký ngay!</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 16,
    justifyContent: 'flex-start',
    backgroundColor: '#F5F5F5',
  },
  checkWrap: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 15,
  },
});

//make this component available to the app
export default LoginScreen;
