import { 
  StyleSheet, 
  Text, 
  View, 
  TextInput, 
  TouchableOpacity,
  Switch,
  Keyboard,
  TouchableWithoutFeedback } from 'react-native'
import React, { useEffect, useState, useContext} from 'react';
import { useNavigation } from '@react-navigation/core'
import { useRoute } from '@react-navigation/core';
import  WaveHeader  from '../component/WaveHeader'
import surStyle from '../helpers/SurveyStyle'
import color from '../helpers/Color'
import SelectButton1 from '../component/Switch'
import Icon from 'react-native-vector-icons/AntDesign';
import  {convertHeight, percentageHeight}  from '../helpers/ScreenSizeHelper';
import { KeyboardAccessoryNavigation } from 'react-native-keyboard-accessory'
import { UserContext } from '../context/UserContext';
import { submitPregnantProfile } from '../db/pregnantSurvey';




const PregnantSurvey3 = () => {
    const route = useRoute();
    const [weight, setWeight] = useState(null)
    const [height, setHeight] = useState(null)
    const navigation = useNavigation();
    const [unit, setUnit] = useState(false)
    const { refetchUserProfile } = useContext(UserContext)

    const changeunit = () => { 
      setUnit(!unit)
    }
    const handleback = () => {
      navigation.goBack()
    }
    const handleAnswers = () => { 
      submitPregnantProfile(
        route.params.LMP, 
        route.params.firstPreg,
        route.params.HBS,
        route.params.EBS,
        weight,
        height
      )
        .then(() => {
          console.log('Details added!');
          (async () => {
            refetchUserProfile()
            navigation.navigate("Dashboard")
          })()
        })
        .catch(error => console.error(error));
        
      }
  return (
    <View style = {styles.container}>
      <View style = {[surStyle.headerContainer]}>
        <WaveHeader text="I'm Pregnant"></WaveHeader>
      </View>
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>

    <View style={surStyle.inputContainer} onPress={Keyboard.dismiss}>
      {/* <SelectButtonSwitch
      values={['Imperial'
        , 'Metric']}
      selectedValue={unit}
      setSelectedValue={setUnit}
      ></SelectButtonSwitch> */}
      <View style={surStyle.rowContainer}>
      <Text style = {surStyle.text}>Metric</Text>
      <Switch
      trackColor={{ false: color.lightPink, true: color.mainPink }}
      thumbColor={unit ? color.white : color.white}
      ios_backgroundColor= "#3e3e3e"
      onValueChange={changeunit}
      value={unit}
      maxLength={5}
      ></Switch>
      <Text style = {surStyle.text}>Imperial</Text>
        </View>
      <View
        style = {surStyle.textContainer}>
          <Text style = {surStyle.text}>What was your initial weight before 
          pregnancy?</Text>
      </View> 
      <View style={surStyle.rowContainer} 
      keyboardShouldPersistTaps='handled'>
        <TextInput
          placeholder="your initial weight"
          value={weight}
          keyboardType='numeric'
          onChangeText={text => setWeight(text)}
          style={[surStyle.input, surStyle.text]}
          maxLength={5}
        />
        <Text style= {surStyle.text}>{unit? 'Lb':'Kg'}</Text>
        </View>
        <View
        style = {surStyle.textContainer}>
          <Text style = {surStyle.text}>What is your height?</Text>
      </View> 
      <View style={surStyle.rowContainer}>
        <TextInput
          placeholder="your height"
          value={height}
          keyboardType='numeric'
          onChangeText={text => setHeight(text)}
          style={[surStyle.input, surStyle.text]}
          returnKeyType='done'
          maxLength={5}
        />
        <Text style= {[surStyle.text]}
        >{unit? 'Ft/In':'Cm'}</Text></View>
      </View>
      </TouchableWithoutFeedback>

      {/* <KeyboardAccessoryNavigation
          nextHidden={true}
          previousHidden={true}
          avoidKeyboard
          androidAdjustResize
        /> */}
      <View style={[surStyle.rowContainer,surStyle.bottom]}>
        <TouchableOpacity
          onPress={handleback}
          style={[surStyle.buttonLight, surStyle.roundButton]}
        >
          <Icon name= 'arrowleft' size={convertHeight(28)} color={color.mainPink}></Icon>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={handleAnswers}
          style={[surStyle.buttonDark, surStyle.roundButton]}
        >
          <Icon name= 'arrowright' size={convertHeight(28)} color={color.white}></Icon>
        </TouchableOpacity>
      </View>
      </View>

  )
}

export default PregnantSurvey3

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      backgroundColor: color.white,

    }
  })
