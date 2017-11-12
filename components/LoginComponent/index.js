import React from 'react';
import { Link } from 'react-router-native';
import { View, Text, Button } from 'react-native';

const Login = () => (
  <View>
    <Text>Login </Text>
    <Link to="/mapexcersizetodays" component={Button} title="Login" />
  </View>
);

export default Login;
