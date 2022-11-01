import { 
  StyleSheet, 
  Text, 
  Switch,
  View, 
  TextInput, 
  TouchableOpacity, 
  DatePickerAndroidDateSetAction } from 'react-native'
import React, { useEffect, useState, useContext} from 'react';
import { useNavigation } from '@react-navigation/core'
import { useRoute } from '@react-navigation/core';
import { WaveHeader } from '../component/WaveHeader'
import surStyle from '../helpers/SurveyStyle'
import color from '../helpers/Color'
import {SelectButtonSwitch} from '../component/Switch'
import PregnantSurvey1 from './PregnantSurvey1';
import PregnantSurvey3 from './PregnantSurvey3';
import Icon from 'react-native-vector-icons/AntDesign';





const PregnantSurvey2 = () => {
    const route = useRoute();
    console.log("here:", route.params.LMP)
    const [HBS, setHBS] = useState(false)
    const [EBS, setEBS] = useState(false)
    const navigation = useNavigation();
    const handlenext = () => {
      navigation.navigate("Pregnant Survey3", {LMP: route.params.LMP, firstPreg:route.params.firstPreg, HBS: HBS, EBS: EBS})
          
    }
    const handlepre = () => {
      navigation.navigate("Pregnant Survey1")
          
    }
    const changeHBS = () => { 
      setHBS(!HBS)
    }
    const changeEBS = () => { 
      setEBS(!EBS)
    }
  return (
    <View style = {styles.container}>
      <View style = {surStyle.headerContainer}>
      <Text style ={surStyle.headerText}> I'm Pregant</Text>
      </View>
      <View style = {surStyle.inputContainer}>
        <View
        style = {surStyle.textContainer}>
          <Text style = {surStyle.text}>Do you have high Blood Pressure?</Text>
      </View> 
      <View style={surStyle.rowContainer}>
      <Text style = {surStyle.text}>NO</Text>
      <Switch
      trackColor={{ false: color.lightPink, true: color.mainPink }}
        thumbColor={HBS ? color.white : color.white}
        ios_backgroundColor= "#3e3e3e"
        onValueChange={changeHBS}
        value={HBS}></Switch>
        <Text style = {surStyle.text}>Yes</Text></View>

      {/* <SelectButtonSwitch values={[true, false]}
              selectedValue={HBS}
              setSelectedValue={setHBS}>
        </SelectButtonSwitch> */}
        <View
        style = {surStyle.textContainer}>
        <Text style = {surStyle.text}>Do you have elevated blood sugar?</Text>
        </View>
        <View style={surStyle.rowContainer}>
        <Text style = {surStyle.text}>No</Text>        
        <Switch
        trackColor={{ false: color.lightPink, true: color.mainPink }}
        thumbColor={EBS ? color.white : color.white}
        ios_backgroundColor= "#3e3e3e"
        onValueChange={changeEBS}
        value={EBS}></Switch>
        <Text style = {surStyle.text}>Yes</Text>
        </View>

        {/* <SelectButtonSwitch values={[true, false]}
              selectedValue={EBS}
              setSelectedValue={setEBS}>
        </SelectButtonSwitch> */}

<View style={[surStyle.rowContainer,surStyle.bottom]}>
        <TouchableOpacity
          //onPress={handlePre}
          style={[surStyle.buttonLight]}
        >
          <Icon name= 'arrowleft' size={28} color={color.mainPink}></Icon>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={handlenext}
          style={[surStyle.buttonDark]}
        >
          <Icon name= 'arrowright' size={28} color={color.white}></Icon>
        </TouchableOpacity>
      </View>
      </View>
    </View>

  )
}

export default PregnantSurvey2

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: color.mainPink,
    }
  })