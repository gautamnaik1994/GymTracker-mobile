import React from 'react';
import { NativeRouter as Router, Switch, Route } from 'react-router-native';
import { StyleSheet, View } from 'react-native';
import Toolbar from './components/common/Toolbar';
import Login from './components/LoginComponent';
import MapExcersizeToDays from './components/MapExcersizeToDays';

const styles = StyleSheet.create({
  innerContainer: {
    padding: 15,
  },
});

const App = () => (
  <Router>
    <View>
      <Toolbar />
      <View style={styles.innerContainer}>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route path="/mapexcersizetodays" component={MapExcersizeToDays} />
        </Switch>
      </View>
    </View>
  </Router>
);
export default App;
