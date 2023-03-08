import {View, Text, SafeAreaView, Image, Dimensions} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import Button from '../../components/Button';
import {useNavigation} from '@react-navigation/native';

const {width, height} = Dimensions.get('window');

const LandingScreen = () => {
  const navigation = useNavigation();

  return (
    <>
      <Image
        source={{
          uri: 'https://images.unsplash.com/photo-1583004231608-3ce0c58f5867?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8bmF0dXJlJTIwd2FsbHBhcGVyfGVufDB8fDB8fA%3D%3D&w=1000&q=80',
        }}
        style={{
          width: width,
          height: height,
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          zIndex: -1,
        }}
      />
      <SafeAreaView
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: 'rgba(255,65,65,0.8)',
        }}>
        <View
          style={{
            flex: 1,
            justifyContent: 'flex-end',
            alignItems: 'center',
          }}>
          <Icon name="ios-heart" size={100} color="white" />
          <Text
            style={{
              fontSize: 30,
              fontWeight: 'bold',
              color: 'white',
              marginBottom: 50,
            }}>
            Heartlink
          </Text>
        </View>
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Button
            bgColor="transparent"
            text="SIGN UP"
            color="white"
            widthMultiplier={0.75}
            heightMultiplier={0.06}
            fontSize={20}
            borderColor="white"
            borderWidth={1}
            marginVertical={8}
          />
          <Button
            bgColor="white"
            text="LOGIN"
            color="red"
            widthMultiplier={0.75}
            heightMultiplier={0.06}
            pressHandler={() => navigation.navigate("Login")}
            fontSize={20}
            marginVertical={8}
          />
        </View>
      </SafeAreaView>
    </>
  );
};

export default LandingScreen;
