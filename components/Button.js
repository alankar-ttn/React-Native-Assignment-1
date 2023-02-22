import {Text, TouchableOpacity, Dimensions} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';

const {width, height} = Dimensions.get('window');

const Button = ({
  bgColor,
  text,
  icon,
  isSocial,
  color,
  widthMultiplier,
  heightMultiplier = 0.05,
  pressHandler,
  fontSize = 16,
  borderWidth = 0,
  borderColor = 'transparent',
  marginVertical = 8,
}) => {
  return (
    <TouchableOpacity
      style={{
        height: height * heightMultiplier,
        backgroundColor: bgColor,
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        width: width * widthMultiplier,
        paddingHorizontal: 20,
        borderWidth: borderWidth,
        borderColor: borderColor,
        marginVertical: marginVertical,
      }}
      onPress={pressHandler}>
      {isSocial && <Icon name={icon} size={20} color={color} />}
      <Text
        style={{
          fontSize: fontSize,
          color: color,
          marginLeft: 10,
          textAlign: 'center',
        }}>
        {text}
      </Text>
    </TouchableOpacity>
  );
};

export default Button;
