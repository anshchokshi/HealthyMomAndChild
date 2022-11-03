import React, { Component,useState, useEffect } from 'react';
import { StyleSheet, View, Text, Dimensions,TouchableOpacity } from 'react-native';
import color from '../helpers/Color'
import { convertWidth } from '../helpers/ScreenSizeHelper';
import surStyle from '../helpers/SurveyStyle'

const SelectButton1  = (props) => {
  return (
    <View >
      <View style={surStyle.rowContainer}>
        {props.values.map((value) => (
          <TouchableOpacity
            key={value}
            onPress={() => props.setSelectedValue(value)}
            style={[
              surStyle.buttonLight,
              props.selectedValue === value && surStyle.buttonDark,{width:100}
            ]}
          >
            <Text
              style={[
                surStyle.buttonLightText,
                props.selectedValue === value && surStyle.buttonDarkText,
              ]}
            >
              {value?'Yes':'No'}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>);
};
    



export default SelectButton1;