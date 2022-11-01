import { 
  StyleSheet, 
  Text, 
  View, 
  TextInput, 
  TouchableOpacity,
  Switch } from 'react-native'
import React, { useEffect, useState, useContext} from 'react';
import { useNavigation } from '@react-navigation/core'
import { firebase } from '../firebase'
import { useRoute } from '@react-navigation/core';
import { WaveHeader } from '../component/WaveHeader'
import { NormalHeader } from '../component/Header'
import surStyle from '../helpers/SurveyStyle'
import color from '../helpers/Color'
import PregnantSurvey2 from './PregnantSurvey2';
import {SelectButtonSwitch} from '../component/Switch'
import Icon from 'react-native-vector-icons/AntDesign';




const PregnantSurvey3 = () => {
    const route = useRoute();
    const [weight, setWeight] = useState(null)
    const [height, setHeight] = useState(null)
    const navigation = useNavigation();
    const auth = firebase.auth();
    const [unit, setUnit] = useState(false)
    const changeunit = () => { 
      setUnit(!unit)
    }
    // const handlepre = () => {
    //     navigation.navigate("Pregnant Survey2")
    // }
    const handleAnswers = () => { 
        firebase.firestore()
        .collection('users')
        .doc(auth.currentUser?.email)
        .collection('pregnant')
        .doc()
        .set({
            LastMentrualPeriod: route.params.LMP,
            FirstPregnancy: route.params.firstPreg,
            HBS: route.params.HBS,
            EBS: route.params.EBS,
            InitialWeight: weight,
            Height: height
            
          })

        .then(() => {
          console.log('Details added!');
          navigation.navigate("Dashboard")
        });
      }
  return (
    <View style = {styles.container}>
      <View style = {surStyle.headerContainer}>
      <Text style ={surStyle.headerText}> I'm Pregant</Text>
      </View>
    <View style={surStyle.inputContainer}>
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
      ></Switch>
      <Text style = {surStyle.text}>Imperial</Text>
        </View>
      <View
        style = {surStyle.textContainer}>
          <Text style = {surStyle.text}>What was your initial weight before 
          pregnancy?</Text>
      </View> 
      <View style={surStyle.rowContainer}>
        <TextInput
          placeholder="your initial weight"
          value={weight}
          onChangeText={text => setWeight(text)}
          style={surStyle.input}
        />
        <Text style= {surStyle.text}>{unit? 'Lb':'Kg'}</Text></View>
        <View
        style = {surStyle.textContainer}>
          <Text style = {surStyle.text}>What is your height?</Text>
      </View> 
      <View style={surStyle.rowContainer}>
        <TextInput
          placeholder="your height"
          value={height}
          onChangeText={text => setHeight(text)}
          style={surStyle.input}
        />
        <Text style= {surStyle.text}>{unit? 'Ft/In':'Cm'}</Text></View>

        <View style={[surStyle.rowContainer,surStyle.bottom]}>
        <TouchableOpacity
          //onPress={handlePre}
          style={[surStyle.buttonLight]}
        >
          <Icon name= 'arrowleft' size={28} color={color.mainPink}></Icon>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={handleAnswers}
          style={[surStyle.buttonDark]}
        >
          <Icon name= 'arrowright' size={28} color={color.white}></Icon>
        </TouchableOpacity>
      </View>
      </View>
      </View>

  )
}

export default PregnantSurvey3

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: color.mainPink,

    }
  })