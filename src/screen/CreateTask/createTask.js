//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet, TextInput, TouchableOpacity} from 'react-native';
import BackHeader from '../../components/back-header';
import { CustomFontText } from '../../components/customFontText/CustomFontText';
import Search from '../../components/search/search';
import { COLORS } from '../../utils/Colors';

// create a component
const CreateScreen = () => {
  return (
    <View style={styles.container}>
      <View style={{backgroundColor: '#7646FF'}}>
        <BackHeader />
        <Search />
      </View>
      <View>
        <TextInput
          placeholder="Task Name"
          style={{
            padding: 20,
            borderBottomWidth: 0.5,
            borderTopWidth: 0.5,
            backgroundColor: COLORS.white,
          }}
        />
        <TextInput
          placeholder="Description"
          style={{
            padding: 20,
            borderBottomWidth: 0.5,
            borderTopWidth: 0.5,
            backgroundColor: COLORS.white,
          }}
        />
        <TextInput
          placeholder="Category"
          style={{
            padding: 20,
            borderBottomWidth: 0.5,
            borderTopWidth: 0.5,
            backgroundColor: COLORS.white,
          }}
        />
        <TextInput
          placeholder="Date & Time"
          style={{
            padding: 20,
            borderBottomWidth: 0.5,
            borderTopWidth: 0.5,
            backgroundColor: COLORS.white,
          }}
        />
        <View style={{padding: 20}}>
          <CustomFontText>Priority</CustomFontText>
        </View>
        <TextInput
          placeholder="Notification"
          style={{
            padding: 20,
            borderBottomWidth: 0.5,
            borderTopWidth: 0.5,
            backgroundColor: COLORS.white,
          }}
        />
      </View>
      <TouchableOpacity style={{alignItems: 'center', justifyContent:'flex-end', flex: 1}}>
          <CustomFontText>ADD</CustomFontText>
      </TouchableOpacity>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F6F6F8',
  },
});

//make this component available to the app
export default CreateScreen;
