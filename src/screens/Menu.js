import Login from '../screens/Login'
import Home from '../screens/Home'
import NovaVacina from '../screens/NovaVacina'

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
            options={
              {
                headerTintColor:'#419ED7', 
                headerStyle: {backgroundColor:'#C1E7E3', height:50}
              }}
            />
          <Drawer.Screen 
            name='NovaVacina' 
            component={NovaVacina}
            options={
              {
                headerTintColor:'#419ED7', 
                headerStyle: {backgroundColor:'#C1E7E3', height:50}
              }}/>
        </Drawer.Navigator>
      </NavigationContainer>
    );
  }