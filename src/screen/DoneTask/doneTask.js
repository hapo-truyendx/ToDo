//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';
import Search from '../../components/search/search';
import Header from '../Home/com/header';
import ItemTaskDone from './com/itemTaskDone';

// create a component
const DoneTaskScreen = () => {
  return (
    <View style={styles.container}>
      <View style={{backgroundColor: '#7646FF'}}>
        <Header />
        <Search />
      </View>
      <View>
        <FlatList
          style={{}}
          data={[1, 2, 3, 4]}
          keyExtractor={index => index + Math.random()}
          renderItem={() => <ItemTaskDone />}
        />
      </View>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

//make this component available to the app
export default DoneTaskScreen;
