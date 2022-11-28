//import liraries
import React, {Component, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  ScrollView,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {COLORS} from '../../../utils/Colors';
import {useNavigation} from '@react-navigation/native';
import SelectDropdown from 'react-native-select-dropdown';
import DateTimePicker from '@react-native-community/datetimepicker';

// create a component
const RegisterScreen = () => {
  const navigation = useNavigation();

  const [hiddenPassword, setHiddenPassword] = useState(false);
  const [datePicker, setDatePicker] = useState(false);
  const [date, setDate] = useState(new Date());
  const countries = [
    'Egypt',
    'Canada',
    'Australia',
    'Ireland',
    'Brazil',
    'England',
    'Dubai',
    'France',
    'Germany',
    'Saudi Arabia',
    'Argentina',
    'India',
  ];

  const onDateSelected = (event, value) => {
    setDatePicker(false);
    setDate(value);
    
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={{marginBottom: 30}}
        onPress={() => {
          navigation.goBack();
        }}>
        <Ionicons name="arrow-back-sharp" size={30} color="#1E2329" />
      </TouchableOpacity>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View>
          <Text
            style={{
              fontSize: 40,
              color: '#1E2329',
              fontWeight: '600',
              textAlign: 'center',
            }}>
            Đăng ký
          </Text>
          <Text
            style={{
              fontSize: 14,
              fontWeight: '400',
              textAlign: 'center',
              paddingVertical: 10,
            }}>
            Chào mừng bạn đến trang đăng ký tài khoản Viện Thẩm Mỹ Quốc Tế Hoa
            Kỳ
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
                  paddingRight: 45,
                }}
              />
              <TouchableOpacity
                style={{position: 'absolute', padding: 10, right: 0}}
                onPress={() => setDatePicker(true)}>
                <Ionicons
                  name={'ios-calendar-sharp'}
                  size={25}
                  color="#1E2329"
                />
              </TouchableOpacity>
            </View>
          </View>

          <View style={{marginVertical: 8}}>
            <Text style={{fontSize: 14, fontWeight: '500', paddingVertical: 4}}>
              Họ và tên
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
            {datePicker && (
              <DateTimePicker
                value={date}
                mode={'date'}
                display={Platform.OS === 'ios' ? 'spinner' : 'default'}
                is24Hour={true}
                onChange={onDateSelected}
              />
            )}
          </View>
          <View style={{marginVertical: 8}}>
            <Text style={{fontSize: 14, fontWeight: '500', paddingVertical: 4}}>
              Giới tính
            </Text>
            <View style={{}}>
              <SelectDropdown
                data={countries}
                // defaultValueByIndex={1}
                // defaultValue={'Egypt'}
                onSelect={(selectedItem, index) => {
                  console.log(selectedItem, index);
                }}
                defaultButtonText={'Giới tính'}
                buttonTextAfterSelection={(selectedItem, index) => {
                  return selectedItem;
                }}
                rowTextForSelection={(item, index) => {
                  return item;
                }}
                buttonStyle={styles.dropdown1BtnStyle}
                buttonTextStyle={styles.dropdown1BtnTxtStyle}
                renderDropdownIcon={isOpened => {
                  return (
                    <FontAwesome
                      name={isOpened ? 'chevron-up' : 'chevron-down'}
                      color={'#444'}
                      size={18}
                    />
                  );
                }}
                dropdownIconPosition={'right'}
                dropdownStyle={styles.dropdown1DropdownStyle}
                rowStyle={styles.dropdown1RowStyle}
                rowTextStyle={styles.dropdown1RowTxtStyle}
              />
            </View>
          </View>
          <View style={{marginVertical: 8}}>
            <Text style={{fontSize: 14, fontWeight: '500', paddingVertical: 4}}>
              Email
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
              Tỉnh/Thành phố
            </Text>
            <View style={{}}>
              <SelectDropdown
                data={countries}
                // defaultValueByIndex={1}
                // defaultValue={'Egypt'}
                onSelect={(selectedItem, index) => {
                  console.log(selectedItem, index);
                }}
                defaultButtonText={'Chọn phường/xã'}
                buttonTextAfterSelection={(selectedItem, index) => {
                  return selectedItem;
                }}
                rowTextForSelection={(item, index) => {
                  return item;
                }}
                buttonStyle={styles.dropdown1BtnStyle}
                buttonTextStyle={styles.dropdown1BtnTxtStyle}
                renderDropdownIcon={isOpened => {
                  return (
                    <FontAwesome
                      name={isOpened ? 'chevron-up' : 'chevron-down'}
                      color={'#444'}
                      size={18}
                    />
                  );
                }}
                dropdownIconPosition={'right'}
                dropdownStyle={styles.dropdown1DropdownStyle}
                rowStyle={styles.dropdown1RowStyle}
                rowTextStyle={styles.dropdown1RowTxtStyle}
              />
            </View>
          </View>
          <View style={{marginVertical: 8}}>
            <Text style={{fontSize: 14, fontWeight: '500', paddingVertical: 4}}>
              Quận/huyện
            </Text>
            <View style={{}}>
              <SelectDropdown
                data={countries}
                // defaultValueByIndex={1}
                // defaultValue={'Egypt'}
                onSelect={(selectedItem, index) => {
                  console.log(selectedItem, index);
                }}
                defaultButtonText={'Chọn phường/xã'}
                buttonTextAfterSelection={(selectedItem, index) => {
                  return selectedItem;
                }}
                rowTextForSelection={(item, index) => {
                  return item;
                }}
                buttonStyle={styles.dropdown1BtnStyle}
                buttonTextStyle={styles.dropdown1BtnTxtStyle}
                renderDropdownIcon={isOpened => {
                  return (
                    <FontAwesome
                      name={isOpened ? 'chevron-up' : 'chevron-down'}
                      color={'#444'}
                      size={18}
                    />
                  );
                }}
                dropdownIconPosition={'right'}
                dropdownStyle={styles.dropdown1DropdownStyle}
                rowStyle={styles.dropdown1RowStyle}
                rowTextStyle={styles.dropdown1RowTxtStyle}
              />
            </View>
          </View>
          <View style={{marginVertical: 8}}>
            <Text style={{fontSize: 14, fontWeight: '500', paddingVertical: 4}}>
              Phường/Xã
            </Text>
            <View style={{}}>
              <SelectDropdown
                data={countries}
                // defaultValueByIndex={1}
                // defaultValue={'Egypt'}
                onSelect={(selectedItem, index) => {
                  console.log(selectedItem, index);
                }}
                defaultButtonText={'Chọn phường/xã'}
                buttonTextAfterSelection={(selectedItem, index) => {
                  return selectedItem;
                }}
                rowTextForSelection={(item, index) => {
                  return item;
                }}
                buttonStyle={styles.dropdown1BtnStyle}
                buttonTextStyle={styles.dropdown1BtnTxtStyle}
                renderDropdownIcon={isOpened => {
                  return (
                    <FontAwesome
                      name={isOpened ? 'chevron-up' : 'chevron-down'}
                      color={'#444'}
                      size={18}
                    />
                  );
                }}
                dropdownIconPosition={'right'}
                dropdownStyle={styles.dropdown1DropdownStyle}
                rowStyle={styles.dropdown1RowStyle}
                rowTextStyle={styles.dropdown1RowTxtStyle}
              />
            </View>
          </View>
          <View style={{marginVertical: 8}}>
            <Text style={{fontSize: 14, fontWeight: '500', paddingVertical: 4}}>
              Địa chỉ cụ thể
            </Text>
            <View>
              <TextInput
                placeholder="Nhập tên đăng nhập"
                style={{
                  borderColor: '#A1ADC8',
                  borderWidth: 1,
                  borderRadius: 8,
                  padding: 10,
                }}
                multiline={true}
              />
            </View>
          </View>
        </View>
      </ScrollView>
      <View
        style={{
          justifyContent: 'center',
          marginBottom: 15,
        }}>
        <TouchableOpacity
          style={{
            backgroundColor: '#143376',
            padding: 14,
            borderRadius: 6,
            alignItems: 'center',
            marginVertical: 8,
          }}
          onPress={() => {
            navigation.navigate('Login');
          }}>
          <Text style={{fontSize: 16, fontWeight: '500', color: COLORS.white}}>
            Đăng ký
          </Text>
        </TouchableOpacity>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'flex-end',
          }}>
          <Text>Đã có tài khoản?</Text>
          <TouchableOpacity style={{color: '#143376'}}>
            <Text style={{color: '#143376'}}>Đăng nhập!</Text>
          </TouchableOpacity>
        </View>
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
  dropdown1BtnStyle: {
    width: '100%',
    height: 50,
    backgroundColor: '#F5F5F5',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#A1ADC8',
  },
  dropdown1BtnTxtStyle: {color: '#444', textAlign: 'left'},
  dropdown1DropdownStyle: {backgroundColor: '#F5F5F5'},
  dropdown1RowStyle: {backgroundColor: '#EFEFEF', borderBottomColor: '#C5C5C5'},
  dropdown1RowTxtStyle: {color: '#444', textAlign: 'left'},
});

//make this component available to the app
export default RegisterScreen;
