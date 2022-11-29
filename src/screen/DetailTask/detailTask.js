//import liraries
import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import BackHeader from '../../components/back-header';
import {CustomFontText} from '../../components/customFontText/CustomFontText';
import {COLORS} from '../../utils/Colors';
import Header from '../Home/com/header';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';

// create a component
const DetailTaskScreen = () => {
  return (
    <View style={styles.container}>
      <View>
        <BackHeader isAdd={true} />
        <View>
          <View
            style={{padding: 20, backgroundColor: COLORS.white, margin: 20}}>
            <View
              style={{
                backgroundColor: '#58BBF7',
                position: 'absolute',
                right: 0,
                padding: 5,
              }}>
              <CustomFontText style={{color: COLORS.white}}>
                Nice to Have
              </CustomFontText>
            </View>
            <View>
              <CustomFontText style={{fontWeight: '500', paddingVertical: 8}}>
                Meet Joshoep
              </CustomFontText>
              <CustomFontText style={{fontWeight: '200', paddingVertical: 8}}>
                date
              </CustomFontText>
              <CustomFontText style={{paddingVertical: 8}}>
                Have to meet him because i want to show hom mu latest app design
                in person
              </CustomFontText>
              <CustomFontText style={{paddingVertical: 8}}>
                Also need to ask for advice on these:
              </CustomFontText>
              <CustomFontText style={{fontWeight: '500', paddingVertical: 8}}>
                Category: Friend
              </CustomFontText>
            </View>
          </View>
          <View
            style={{
              backgroundColor: '#7646FF',
              height: 70,
              position: 'absolute',
              width: '100%',
              zIndex: -1,
            }}></View>
        </View>
      </View>
      <View style={{flex: 1, justifyContent: 'flex-end'}}>
        <View
          style={{
            flexDirection: 'row',
            backgroundColor: COLORS.white,
            justifyContent: 'space-between',
            padding: 20,
            alignItems: 'flex-end',
          }}>
          <AntDesign name="delete" size={30} />
          <SimpleLineIcons name="pencil" size={30} />
          <AntDesign name="clockcircleo" size={30} />
          <Ionicons name="checkbox-outline" size={30} />
        </View>
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
export default DetailTaskScreen;
