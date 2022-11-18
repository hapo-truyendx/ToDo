//import liraries
import React, {Component, useState, useMemo, useCallback} from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';
import NodataComponent from '../../../components/noData';
import {COLORS} from '../../../utils/Colors';
import {Calendar, CalendarList, Agenda} from 'react-native-calendars';
import ItemTask from '../com/itemTask';
import {CustomFontText} from '../../../components/customFontText/CustomFontText';
import {ScrollView} from 'react-native-gesture-handler';

const RANGE = 24;
const initialDate = '2022-07-05';
const nextWeekDate = '2022-07-14';
const nextMonthDate = '2022-08-05';
const horizontalView = true;

// create a component
const MonthlyTab = () => {
  const [selected, setSelected] = useState(initialDate);
  const marked = useMemo(() => {
    return {
      [nextWeekDate]: {
        selected: selected === nextWeekDate,
        selectedTextColor: '#5E60CE',
        marked: true,
      },
      [nextMonthDate]: {
        selected: selected === nextMonthDate,
        selectedTextColor: '#5E60CE',
        marked: true,
      },
      [selected]: {
        selected: true,
        disableTouchEvent: true,
        selectedColor: '#5E60CE',
        selectedTextColor: 'white',
      },
    };
  }, [selected]);

  const onDayPress = useCallback(day => {
    setSelected(day.dateString);
  }, []);
  return (
    <View style={styles.container}>
      {/* <NodataComponent /> */}
      <CalendarList
        // testID={testIDs.calendarList.CONTAINER}
        current={initialDate}
        pastScrollRange={RANGE}
        futureScrollRange={RANGE}
        onDayPress={onDayPress}
        markedDates={marked}
        calendarHeight={!horizontalView ? 390 : undefined}
        // theme={!horizontalView ? theme : undefined}
        horizontal={horizontalView}
        pagingEnabled={horizontalView}
        staticHeader={horizontalView}
        enableSwipeMonths={false}
        scrollEnabled={false}
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
export default MonthlyTab;
