import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LandingScreen from '../../../screens/Auth/LandingScreen';
import LoginScreen from '../../../screens/Auth/LoginScreen';

const Stack = createNativeStackNavigator();

const AuthRoute = ({setUser}) => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false
      }}
    >
      <Stack.Screen name="Landing" component={LandingScreen} />
      <Stack.Screen name="Login">
        {() => <LoginScreen setUser={setUser} />}  
      </Stack.Screen>
    </Stack.Navigator>
  );
};

export default AuthRoute;
