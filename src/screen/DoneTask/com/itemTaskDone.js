//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';
import {CustomFontText} from '../../../components/customFontText/CustomFontText';
import {COLORS} from '../../../utils/Colors';
import ItemTask from '../../Home/com/itemTask';

// create a component
const ItemTaskDone = () => {
  return (
    <View style={styles.container}>
      <View
        style={{
          // justifyContent: 'flex-end',
          alignItems: 'flex-end',
        }}>
        <CustomFontText
          style={{
            backgroundColor: '#4CD964',
            paddingHorizontal: 20,
            paddingVertical: 5,
            color: COLORS.white,
          }}>
          Time
        </CustomFontText>
      </View>
      <FlatList
        data={[1, 2, 3, 4, 5]}
        keyExtractor={index => index + Math.random()}
        renderItem={() => <ItemTask />}
        style={{marginVertical: 10}}
      />
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
    marginVertical: 10,
  },
});

//make this component available to the app
export default ItemTaskDone;
