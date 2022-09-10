import Login from '../screens/Login'
import Home from '../screens/Home'

import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';

const Drawer = createDrawerNavigator();

export default function Menu() {
    return (
      <NavigationContainer
        independent = {true}
      >
        <Drawer.Navigator
            initialRouteName='Minhas vacinas'>
          <Drawer.Screen
            name='Minhas Vacinas'
            component={Home}
            />
          <Drawer.Screen 
            name='Login' 
            component={Login}/>
        </Drawer.Navigator>
      </NavigationContainer>
    );
  }