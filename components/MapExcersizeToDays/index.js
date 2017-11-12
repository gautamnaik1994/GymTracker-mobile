import React from 'react';
import { Link } from 'react-router-native';
import { View, Text, Button } from 'react-native';

const MapExcersizeToDays = () => (
  <View>
    <Text>Link Excersix </Text>
    <Link to="/" component={Button} title="Back to Login" />
  </View>
);

export default MapExcersizeToDays;
