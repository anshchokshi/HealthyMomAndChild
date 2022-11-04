import { StyleSheet, Text, View,Switch, TextInput, TouchableOpacity, Button } from 'react-native'
import React, { useEffect, useState, useContext} from 'react';
import { useNavigation } from '@react-navigation/core'
import PregnantSurvey2 from './PregnantSurvey2';
import { useRoute } from '@react-navigation/core';
import WaveHeader  from '../component/WaveHeader'
import surStyle from '../helpers/SurveyStyle'
import color from '../helpers/Color'
import SelectButton1 from '../component/Switch'
import Icon from 'react-native-vector-icons/AntDesign';
import DateTimePickerModal from "react-native-modal-datetime-picker";
import  {convertHeight, percentageHeight}  from '../helpers/ScreenSizeHelper';
import Svg, { Path } from 'react-native-svg';



const PregnantSurvey1 = () => {
    const today = new Date();
    const [LMP, setLMP] = useState(today.toDateString())
    const [firstPreg, setfirstPreg] = useState(true)
    const navigation = useNavigation();
    const route = useRoute();
    const [firstStringP, setFirstStringP]= useState('Yes')
    const handleClick= (butt) => {
      if (butt.equal('Yes')){
        setFirstStringP('Yes');
        setfirstPreg(true);
      }else{
        setFirstStringP('No');
        setfirstPreg(false);
      }
    }
    const handleNext = () => {
      navigation.navigate("Pregnant Survey2", {LMP: LMP, firstPreg: firstPreg})
    }
    const handlePre = () => {
      navigation.goBack()
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
      <View style = {[surStyle.headerContainer]}>
        <WaveHeader text="I'm Pregnant"></WaveHeader>
      </View>
      <View style = {surStyle.inputContainer}>
        <View
        style = {surStyle.textContainer}>
          <Text style = {[surStyle.text,{numberOfLines:2}]}> What was the first day of your last menstruial period?</Text>
        </View>
        <View style = {[surStyle.rowContainer, surStyle.input]} onPress={showDatePicker}>
          {/* <TextInput style = {[surStyle.text,{fontWeight:'light'}]}> {LMP}</TextInput> */}
          <TouchableOpacity
          style = {[surStyle.text]}
          onPress={showDatePicker}>
            <Text style = {[surStyle.text,{fontWeight:'light'}]}>{LMP}</Text>
          </TouchableOpacity>
          <TouchableOpacity 
            onPress={showDatePicker}
          >
            <Icon name= 'calendar' size={28} color={color.mainPink}></Icon>
          </TouchableOpacity>
        </View>
        
        
        <DateTimePickerModal
        isVisible={isDatePickerVisible}
        mode="date"
        onConfirm={handleConfirm}
        onCancel={hideDatePicker}
        buttonTextColorIOS ={color.mainPink}
      />


        <View style = {surStyle.textContainer}>
          <Text style = {[surStyle.text,{numberOfLines:2}]}>Is this your first pregancy?</Text>
        </View>
        <SelectButton1 
        values={[true,false]}
              selectedValue={firstPreg}
              setSelectedValue={setfirstPreg}>
        </SelectButton1>
        
      </View>
      <View style={[surStyle.rowContainer,surStyle.bottom]}>
        <TouchableOpacity
          onPress={handlePre}
          style={[surStyle.buttonLight, surStyle.roundButton]}
        >
          <Icon name= 'arrowleft' size={28} color={color.mainPink}></Icon>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={handleNext}
          style={[surStyle.buttonDark, surStyle.roundButton]}
        >
          <Icon name= 'arrowright' size={28} color={color.white}></Icon>
        </TouchableOpacity>
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
    backgroundColor: color.white,
  },
  
  
})