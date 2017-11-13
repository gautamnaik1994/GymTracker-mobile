import React from 'react';
import { Link } from 'react-router-native';
import { View, Text, Button,ScrollView } from 'react-native';
import { DaysOfWeek } from '../../utils/constants';
import DayItem from './dayItem';

const MapExcersizeToDays = () => {
  const renderList = DaysOfWeek.map((dayObject) => (
    <DayItem key={dayObject.id} day={dayObject.dayName} />
  ));

  return (
    <ScrollView>
      <Text>Link Excersix </Text>
      <Link to="/" component={Button} title="Back to Logi" />
      <View>{renderList}</View>
    </ScrollView>
  );
};

export default MapExcersizeToDays;
