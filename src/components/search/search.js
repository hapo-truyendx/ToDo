//import liraries
import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  useWindowDimensions,
  Image,
} from 'react-native';
import image from '../../assets/image';
import {COLORS} from '../../utils/Colors';

// create a component
const Search = () => {
  const layout = useWindowDimensions();
  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Search task"
        style={{
          padding: 10,
          width: layout.width - 40,
          height: 60,
          paddingRight: 60,
        }}
      />
      <Image
        source={image.search}
        style={{position: 'absolute', width: 40, height: 40, right: 10}}
        resizeMode="contain"
      />
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 0.5,
    backgroundColor: COLORS.white,
    marginHorizontal: 20,
    marginVertical: 20,
  },
});

//make this component available to the app
export default Search;
