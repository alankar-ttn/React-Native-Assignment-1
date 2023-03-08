import React from 'react';
import SettingsScreen from '../../../screens/Dashboard/SettingsScreen';
import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeScreen from '../../../screens/Dashboard/Home/HomeScreen';
import HomeTabs from '../../../screens/Dashboard/Home/HomeTabs';

const Drawer = createDrawerNavigator();

const DashboardRoute = () => {
  return (
      <Drawer.Navigator
      screenOptions={{
        drawerStyle: {},
     }}
      >
        <Drawer.Screen name="HomeTabs" component={HomeTabs} />
        <Drawer.Screen name="Settings" component={SettingsScreen} />
      </Drawer.Navigator>
    )
};

export default DashboardRoute;
