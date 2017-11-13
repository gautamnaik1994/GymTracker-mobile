import React from 'react';
import { Switch, Route } from 'react-router-native';
import { StyleSheet, View } from 'react-native';
import Toolbar from './components/common/Toolbar';
import Login from './components/LoginComponent';
import MapExcersizeToDays from './components/MapExcersizeToDays';

const styles = StyleSheet.create({
  innerContainer: {
    padding: 15,
  },
});

const Main = () => (
  <View>
    <Toolbar />
    <View style={styles.innerContainer}>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route path="/mapexcersizetodays" component={MapExcersizeToDays} />
      </Switch>
    </View>
  </View>
);
export default Main;
