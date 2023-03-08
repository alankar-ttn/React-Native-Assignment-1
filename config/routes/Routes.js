import React, {useState} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import AuthRoute from './Auth/AuthRoute';
import DashboardRoute from './Dashboard/DashboardRoute';

const Stack = createNativeStackNavigator();

const Routes = () => {
  const [user, setUser] = useState(null);

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="AuthRoute">
        {() => <AuthRoute setUser={setUser} />}
      </Stack.Screen>
      <Stack.Screen name="DashboardRoute" component={DashboardRoute} />
    </Stack.Navigator>
  );
};

export default Routes;
