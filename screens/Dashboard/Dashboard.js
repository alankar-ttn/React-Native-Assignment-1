import { View, Text } from 'react-native'
import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeScreen from './Home/HomeScreen';
import SettingsScreen from './SettingsScreen';

const Drawer = createDrawerNavigator();

const Dashboard = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Home" component={HomeScreen} />
      <Drawer.Screen name="Settings" component={SettingsScreen} />
    </Drawer.Navigator>
  )
}

export default Dashboard