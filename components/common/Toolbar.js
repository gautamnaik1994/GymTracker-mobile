import React from 'react';
import { ToolbarAndroid, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  toolbar: {
    backgroundColor: '#2f2f2f',
    height: 56,
    alignSelf: 'stretch',
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
  },
});

const Toolbar = () => (
  <ToolbarAndroid
    title="Gym Tracker"
    titleColor="white"
    style={styles.toolbar}
  />
);


export default Toolbar;
