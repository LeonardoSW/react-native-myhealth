import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Login from '../projeto.react/src/screens/Login';
import Recovery from '../projeto.react/src/screens/Recovery';
import SignIn from '../projeto.react/src/screens/SignIn';

import { NavigationContainer } from '@react-navigation/native';
//import { createDrawerNavigator } from '@react-navigation/drawer';


export default function App() {
  return (
      <Login/>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
