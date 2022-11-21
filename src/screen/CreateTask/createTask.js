//import liraries
import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import BackHeader from '../../components/back-header';
import ColorComponent from '../../components/color';
import {CustomFontText} from '../../components/customFontText/CustomFontText';
import Search from '../../components/search/search';
import {COLORS} from '../../utils/Colors';

// create a component
const CreateScreen = () => {
  return (
    <View style={styles.container}>
      <View style={{backgroundColor: '#7646FF'}}>
        <BackHeader />
        {/* <Search /> */}
      </View>
      <View style={{}}>
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
        <FlatList
          keyExtractor={index => Math.random() + index}
          data={[1, 2, 3, 4]}
          renderItem={(item, index) => {
            return <ColorComponent key={index} style={{marginRight: 10}} />;
          }}
          horizontal
          style={{backgroundColor: COLORS.white, padding: 20}}
          contentContainerStyle={{alignItems: 'center'}}
        />
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
      <View style={{flex: 1, justifyContent: 'flex-end'}}>
        <TouchableOpacity
          style={{
            alignItems: 'center',
            justifyContent: 'flex-end',
            backgroundColor: 'red',
            padding: 20,
          }}>
          <CustomFontText style={{color: COLORS.white, fontSize: 18}}>
            ADD
          </CustomFontText>
        </TouchableOpacity>
      </View>
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
