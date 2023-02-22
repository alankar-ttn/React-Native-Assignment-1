import {View, Text, TextInput} from 'react-native';
import React from 'react';

const Input = ({
  label,
  placeholder,
  width,
  height,
  keyboard,
  secureTextEntry = false,
}) => {
  return (
    <View
      style={{
        width: width * 0.8,
        borderRadius: 20,
      }}>
      <Text
        style={{
          fontSize: 16,
          fontWeight: 'bold',
          color: 'rgba(255,105,105,1)',
          marginBottom: 4,
        }}>
        {label}
      </Text>
      <TextInput
        style={{
          width: width * 0.8,
          height: height * 0.05,
          backgroundColor: 'rgba(255,255,255,0)',
          borderBottomWidth: 1,
          borderBottomColor: 'rgba(255,105,105,1)',
          marginBottom: 16,
          fontSize: 16,
        }}
        placeholder={placeholder}
        keyboardType={keyboard}
        secureTextEntry={secureTextEntry}
      />
    </View>
  );
};

export default Input;
