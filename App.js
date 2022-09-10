import 'react-native-gesture-handler';
import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Login from '../projeto.react/src/screens/Login';
import Recovery from '../projeto.react/src/screens/Recovery';
import SignIn from '../projeto.react/src/screens/SignIn';

import Menu from '../projeto.react/src/screens/Menu'
import Home from '../projeto.react/src/screens/Home'

import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator 
        initialRouteName="Login"
        screenOptions={{headerShown: false}}
      >
        <Drawer.Screen 
          name='Login' 
          component={Login}
          options={{
            drawerItemStyle: {display:'none'}
        }}/>
        <Drawer.Screen 
          name='Sigin' 
          component={SignIn}
          options={{
            drawerItemStyle: {display:'none'}
        }}/>
        <Drawer.Screen 
          name='Recovery' 
          component={Recovery}
          options={{
            drawerItemStyle: {display:'none'}
        }}/>
        <Drawer.Screen
          name='Menu'
          component={Menu}
          />
      </Drawer.Navigator>
    </NavigationContainer>
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
