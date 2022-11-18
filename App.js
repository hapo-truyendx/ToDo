/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Button,
} from 'react-native';

import LoginScreen from './src/screen/Login/login';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';
import HomeScreen from './src/screen/Home/home';
import DrawCustom from './src/navigation/DrawsCustom';
import NavigationStack from './src/navigation/NavigationStack';

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const [isLogin, setIsLogin] = useState(false);

  const Drawer = createDrawerNavigator();

  return isLogin ? (
    <LoginScreen />
  ) : (
    <NavigationContainer>
      <Drawer.Navigator
        initialRouteName="Home"
        screenOptions={{headerShow: false}}
        drawerContent={props => <DrawCustom {...props} />}>
        <Drawer.Screen name="Home" component={NavigationStack} options={{headerShown: false}}/>
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
