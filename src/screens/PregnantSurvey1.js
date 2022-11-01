import { StyleSheet, Text, View,Switch, TextInput, TouchableOpacity } from 'react-native'
import React, { useEffect, useState, useContext} from 'react';
import { useNavigation } from '@react-navigation/core'
import PregnantSurvey2 from './PregnantSurvey2';
import { useRoute } from '@react-navigation/core';
import { WaveHeader } from '../component/WaveHeader'
import { NormalHeader } from '../component/Header'
import surStyle from '../helpers/SurveyStyle'
import color from '../helpers/Color'
import {SelectButtonSwitch} from '../component/Switch'
import Icon from 'react-native-vector-icons/AntDesign';
import DateTimePickerModal from "react-native-modal-datetime-picker";
import { convertHeight } from '../helpers/ScreenSizeHelper';



const PregnantSurvey1 = () => {
    const today = new Date();
    const [LMP, setLMP] = useState(today.toDateString())
    const [firstPreg, setfirstPreg] = useState(true)
    const navigation = useNavigation();
    const route = useRoute();
    const changeP = () => { 
      setfirstPreg(!firstPreg)
    }
    const handleNext = () => {
      navigation.navigate("Pregnant Survey2", {LMP: LMP, firstPreg: firstPreg})
    }
    const handlePre = () => {
      navigation.navigate("Pregnant Survey2", {LMP: LMP, firstPreg: firstPreg})
    }

    const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

    const showDatePicker = () => {
      setDatePickerVisibility(true);
    };

    const hideDatePicker = () => {
      setDatePickerVisibility(false);
    };

    const handleConfirm = (date) => {
      setLMP(date.toDateString());
      hideDatePicker();
  };
    
  return (
    <View style = {styles.container}>
      <View style = {surStyle.headerContainer}>
      <Text style ={surStyle.headerText}> I'm Pregant</Text>
      </View>
      <View style = {surStyle.inputContainer}>
        <View
        style = {surStyle.textContainer}>
          <Text style = {surStyle.text}> What was the first day of your last menstruial period?</Text>
        </View>
        <View style = {surStyle.rowContainer}>
          <Text>{LMP}</Text>
          <TouchableOpacity 
            onPress={showDatePicker}
          >
            <Icon name= 'calendar' size={28} color={color.lightPink}></Icon>
          </TouchableOpacity>
        </View>
        
        
        <DateTimePickerModal
        isVisible={isDatePickerVisible}
        mode="date"
        onConfirm={handleConfirm}
        onCancel={hideDatePicker}
      />


        <View style = {surStyle.textContainer}>
          <Text style = {surStyle.text}>Is this your first pregancy?</Text>
        </View>
        {/* <SelectButtonSwitch values={[true, false]}
              selectedValue={firstPreg}
              setSelectedValue={setfirstPreg}>
        </SelectButtonSwitch> */}
        <View style={surStyle.rowContainer}>
          <Text style = {surStyle.text}>No</Text>
        <Switch
        trackColor={{ false: color.lightPink, true: color.mainPink }}
        thumbColor={firstPreg ? color.white : color.white}
        ios_backgroundColor= "#3e3e3e"
        onValueChange={changeP}
        value={firstPreg}></Switch>
        <Text style = {surStyle.text}>Yes</Text>
        </View>
        <View style={[surStyle.rowContainer,surStyle.bottom]}>
        <TouchableOpacity
          //onPress={handlePre}
          style={[surStyle.buttonLight]}
        >
          <Icon name= 'arrowleft' size={28} color={color.mainPink}></Icon>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={handleNext}
          style={[surStyle.buttonDark]}
        >
          <Icon name= 'arrowright' size={28} color={color.white}></Icon>
        </TouchableOpacity>
      </View>
      </View>
      
    </View>
  )
}

export default PregnantSurvey1

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: color.mainPink,
  },
  
  
})