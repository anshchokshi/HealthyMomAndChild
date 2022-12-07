import { 
    StyleSheet, 
    Text, 
    View,
    ScrollView,
    ImageBackground,
    Image,
    Switch, 
    TextInput, 
    TouchableOpacity,
    Button } from 'react-native'
import React, { useEffect, useState, useContext} from 'react';
import { useNavigation } from '@react-navigation/core'
import { useRoute } from '@react-navigation/core';
import surStyle from '../helpers/SurveyStyle'
import color from '../helpers/Color'
import { UserContext } from "../context/UserContext";
import {
    percentageWidth, 
    percentageHeight, 
    convertHeight, 
    convertWidth} from '../helpers/ScreenSizeHelper'



const ExplorePage = () => {
  function range(size, startAt = 0) {
    return [...Array(size).keys()].map(i => i + startAt);
  }

  const navigation = useNavigation();
  const handlenext = (weekNumber) => {
    navigation.navigate("Fetal Screen", { weekNumber: weekNumber }); 
    console.log(weekNumber)      
  }

  return (<>
  <ScrollView style={styles.scrollView}>
  {range(42-4, 5).map(weekNumber =>
      <Button
      onPress={() => handlenext(weekNumber)}
      title={`week${weekNumber}`}
      color="#841584"
      />
    )}
  </ScrollView>
  </>
  )
}

export default ExplorePage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingTop: 15,
    paddingHorizontal:15
  },
  pinkContainer:{
    flex:0.3,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: color.lightPink,
    width: percentageWidth(0.9),
    margin: 10,
    padding: 15,
    borderRadius: 15,
  },
  scrollView: {
    backgroundColor: 'pink',
    marginHorizontal: 18,
  },
  smallerContainer:{
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: color.nearlyWhite,
    width: percentageWidth(0.85),
    margin: 5,
    padding: 15,
    borderRadius: 10,
  }
})