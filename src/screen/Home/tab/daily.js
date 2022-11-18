//import liraries
import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  Dimensions,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import image from '../../../assets/image';
import {BoldText} from '../../../components/customFontText/BoldText';
import {CustomFontText} from '../../../components/customFontText/CustomFontText';
import NodataComponent from '../../../components/noData';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {COLORS} from '../../../utils/Colors';
import ColorComponent from '../../../components/color';
import Octicons from 'react-native-vector-icons/Octicons';
import Entypo from 'react-native-vector-icons/Entypo';
import ItemTask from '../com/itemTask';

// create a component
const DailyTab = () => {
  return (
    <View style={styles.container}>
      {/* <NodataComponent /> */}
      <View
        style={{
          flexDirection: 'row',
          backgroundColor: COLORS.white,
          padding: 20,
          margin: 20,
          justifyContent: 'space-between',
          alignItems: 'flex-start',
          width: Dimensions.get('window').width - 40,
        }}>
        <View style={{}}>
          <CustomFontText style={{fontSize: 18}}>
            Good Morning John
          </CustomFontText>
          <CustomFontText style={{fontSize: 20, color: '#7646FF'}}>
            TODAY
          </CustomFontText>
          <BoldText style={{fontSize: 20}}> 28 Feb, 2018</BoldText>
        </View>
        <View
          style={{
            alignItems: 'center',
            justifyContent: 'flex-end',
            flex: 1,
            marginTop: 30,
          }}>
          <CustomFontText style={{fontSize: 16, color: '#4CD964'}}>
            Completed
          </CustomFontText>
          <CustomFontText style={{fontSize: 16, color: '#4CD964'}}>
            4/<CustomFontText style={{color: '#F54439'}}>10</CustomFontText>
          </CustomFontText>
        </View>
      </View>
      <FlatList
        data={[1, 2, 3, 4, 5, 6]}
        renderItem={() => <ItemTask />}
        keyExtractor={index => index + Math.random()}
      />
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#EFEFEF',
  },
});

//make this component available to the app
export default DailyTab;
