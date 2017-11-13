import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import CustomCheckbox from '../common/CustomCheckbox';

const styles = StyleSheet.create({
  card: {
    padding: 10,
    marginVertical: 5,
    borderLeftWidth: 5,
    borderLeftColor: 'blue',
    height:100,
  },
  topSec: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderWidth:1,
    borderColor:'red'
  },
});

const DayItem = (props) => (
    <View style={styles.card}>
      <View style={styles.topSec}>
        <Text> {props.day} </Text>
        <CustomCheckbox title='Rest Day' />
      </View>
    </View>
);

export default DayItem;
