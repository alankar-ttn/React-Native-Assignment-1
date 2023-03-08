import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';

const HomeScreen = ({route}) => {
  const navigation = useNavigation();

  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Text>Welcome {route.params.email}</Text>
      <TouchableOpacity
        style={{
          paddingHorizontal: 16,
          paddingVertical: 8,
          backgroundColor: '#aaa',
        }}
        onPress={() => {
          navigation.navigate('AuthRoute', {
            screen: 'Login',
          });
        }}>
        <Text>Logout</Text>
      </TouchableOpacity>
    </View>
  );
};

export default HomeScreen;
