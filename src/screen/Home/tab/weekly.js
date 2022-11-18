//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView, FlatList } from 'react-native';
import NodataComponent from '../../../components/noData';
import CalendarStrip from 'react-native-calendar-strip';
import { COLORS } from '../../../utils/Colors';
import Entypo from 'react-native-vector-icons/Entypo';
import { CustomFontText } from '../../../components/customFontText/CustomFontText';
import ItemTask from '../com/itemTask';

// create a component
const WeeklyTab = () => {
  return (
    <View style={styles.container}>
      {/* <NodataComponent /> */}
      <View style={styles.container}>
    <CalendarStrip
      style={{height:150,}}
      calendarColor={'#7646ff'}
      calendarHeaderStyle = {{paddingVertical: 10, backgroundColor:COLORS.white, width: '100%', alignItems:'center', justifyContent:'center'}}
      dateNumberStyle={{color: 'white'}}
      dateNameStyle={{color: 'white'}}
      iconContainer={{flex: 0.1, color: COLORS.white}}
      scrollable= {false}
      leftSelector = {[<Entypo name = 'chevron-left' size = {30} color ={COLORS.white}/>]}
      rightSelector = {[<Entypo name = 'chevron-right' size = {30} color ={COLORS.white}/>]}
      daySelectionAnimation={{type: 'background', duration: 1, highlightColor: 'white'}}
    />
    <ScrollView>
        <View
          style={{
            paddingVertical: 5,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <CustomFontText
            children="Today"
            style={{color: '#7646ff', fontSize: 16}}
          />
        </View>
        <FlatList
          data={[1, 2, 3, 4, 5, 6]}
          renderItem={() => <ItemTask />}
          keyExtractor={index => index + Math.random()}
          scrollEnabled={false}
        />
      </ScrollView>
  </View>
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EFEFEF',
  },
});

//make this component available to the app
export default WeeklyTab;
