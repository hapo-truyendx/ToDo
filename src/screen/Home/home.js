//import liraries
import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  useWindowDimensions,
  Dimensions,
} from 'react-native';
import Search from '../../components/search/search';
import {COLORS} from '../../utils/Colors';
import Header from './com/header';
import {TabView, SceneMap, TabBar} from 'react-native-tab-view';
import DailyTab from './tab/daily';
import MonthlyTab from './tab/monthly';
import WeeklyTab from './tab/weekly';

const renderScene = SceneMap({
  first: DailyTab,
  second: WeeklyTab,
  third: MonthlyTab,
});

// create a component
const HomeScreen = () => {
  const layout = useWindowDimensions();

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    {key: 'first', title: 'Daily'},
    {key: 'second', title: 'Weekly'},
    {key: 'third', title: 'Monthly'},
  ]);

  const renderTabBar = props => (
    <TabBar
      {...props}
      indicatorStyle={styles.indicator}
      style={styles.tabbar}
      tabStyle={styles.tab}
      labelStyle={styles.label}
    />
  );
  return (
    <View style={styles.container}>
      <View style={{backgroundColor: '#7646FF'}}>
        <Header />
        <Search />
      </View>
      {/* <View style={{flex: 1}}> */}
      <TabView
        style={{width: layout.width}}
        navigationState={{index, routes}}
        renderScene={renderScene}
        onIndexChange={setIndex}
        renderTabBar={renderTabBar}
        initialLayout={{width: layout.width}}
        indicatorStyle={{backgroundColor: 'white'}}
      />
      {/* </View> */}
    </View>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.white,
  },
  tabbar: {
    backgroundColor: '#7646FF',
    width: Dimensions.get('window').width,
  },
  tab: {
    flex: 1,
    alignItems: 'center',
    borderTopWidth: StyleSheet.hairlineWidth,
    borderTopColor: 'rgba(0, 0, 0, .2)',
  },
  indicator: {
    backgroundColor: COLORS.white,
  },
  label: {
    fontWeight: '400',
  },
});

//make this component available to the app
export default HomeScreen;
