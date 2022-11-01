import React, { Component,useState, useEffect } from 'react';
import { StyleSheet, View, Text, Dimensions,TouchableOpacity } from 'react-native';
import { withSafeAreaInsets } from 'react-native-safe-area-context';
import color from '../helpers/Color'
import { convertWidth } from '../helpers/ScreenSizeHelper';
import surStyle from '../helpers/SurveyStyle'

const SelectButtonSwitch  = ({
    values,
    selectedValue,
    setSelectedValue,
  }) => (
    <View style={{ padding: 10, flex: 1 }}>
      <View style={surStyle.rowContainer}>
        {values.map((value) => (
          <TouchableOpacity
            key={value}
            onPress={() => setSelectedValue(value)}
            style={[
              surStyle.buttonLight,
              selectedValue === value && surStyle.buttonDark,
            ]}
          >
            <Text
              style={[
                surStyle.buttonLightText,
                selectedValue === value && surStyle.buttonDarkText,
              ]}
            >
              {value}
            </Text>
            <View>
              {children}
            </View>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
    



export default SelectButtonSwitch;