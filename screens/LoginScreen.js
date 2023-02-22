import {View, Text, Image, Dimensions, SafeAreaView} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import Input from '../components/Input';
import Button from '../components/Button';

const {width, height} = Dimensions.get('window');

const LoginScreen = ({setShowLogin}) => {
  return (
    <>
      <Image
        source={require('../assets/bg.jpeg')}
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
          backgroundColor: 'rgba(255,255,255,0.8)',
        }}>
        <View
          style={{
            flex: 2,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Icon name="ios-heart" size={100} color="rgba(255,65,65,1)" />
        </View>
        <View
          style={{
            flex: 3,
          }}>
          <Input
            label="USERNAME"
            placeholder="Email"
            width={width}
            height={height}
            keyboard="email-address"
          />
          <Input
            label="PASSWORD"
            placeholder="Password"
            width={width}
            height={height}
            keyboard="email-address"
            secureTextEntry={true}
          />
          <Text
            style={{
              fontSize: 16,
              fontWeight: 'bold',
              color: 'rgba(255,65,65,1)',
              marginBottom: 20,
              textAlign: 'right',
            }}>
            Forgot Password?
          </Text>
          <Button
            text="LOGIN"
            bgColor="#fff"
            color="rgba(255,65,65,1)"
            isSocial={false}
            widthMultiplier={0.8}
            pressHandler={() => setShowLogin(false)}
          />
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-evenly',
              alignItems: 'center',
              marginTop: 20,
            }}>
            <Text
              style={{
                fontSize: 12,
                color: '#555',
                marginBottom: 20,
              }}>
              ----------------------
            </Text>
            <Text
              style={{
                fontSize: 12,
                color: '#555',
                marginBottom: 20,
              }}>
              OR CONNECT WITH
            </Text>
            <Text
              style={{
                fontSize: 12,
                color: '#555',
                marginBottom: 20,
              }}>
              ----------------------
            </Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-evenly',
              alignItems: 'center',
            }}>
            <Button
              icon="logo-facebook"
              bgColor="#3b5998"
              text={'Facebook'}
              isSocial={true}
              color="#fff"
              widthMultiplier={0.35}
            />
            <Button
              icon="logo-google"
              bgColor="#db3236"
              text={'Google'}
              isSocial={true}
              color="#fff"
              widthMultiplier={0.35}
            />
          </View>
        </View>
      </SafeAreaView>
    </>
  );
};

export default LoginScreen;
