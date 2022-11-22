import { 
    StyleSheet, 
    Text, 
    View,
    ScrollView,
    ImageBackground,
    Image,
    Switch, 
    TextInput, 
    TouchableOpacity } from 'react-native'
import React, { useEffect, useState, useContext} from 'react';
import { useNavigation } from '@react-navigation/core'
import PregnantSurvey2 from './PregnantSurvey2';
import { useRoute } from '@react-navigation/core';
import surStyle from '../helpers/SurveyStyle'
import color from '../helpers/Color'
import Icon from 'react-native-vector-icons/AntDesign';
import {
    percentageWidth, 
    percentageHeight, 
    convertHeight, 
    convertWidth} from '../helpers/ScreenSizeHelper'
import { UserContext } from '../context/UserContext'
import { 
  firstAppointDate, 
  nextAppointDate 
} from '../helpers/AppoiCalculator';


const AppointmentScreen = () => {
    const today = new Date();
    const [LMP, setLMP] = useState()
    const route = useRoute();
    const navigation = useNavigation()
    const { userProfile } = useContext(UserContext)

    useEffect(() => {
      const lmpString = userProfile?.pregnantProfile?.LastMenstrualPeriod
      setLMP(lmpString);
    }, [userProfile])
    
  return (
    <View style = {styles.container}>
        
      <View style = {[surStyle.headerContainer,{backgroundColor:'transparent'}]}>
      <ImageBackground 
      source={require('../assets/APTS.png')}
      style ={[{width: '100%', height:'100%'}]}
      blurRadius={4}>
      <Text style ={[surStyle.headerText,{color:color.mainPink}]}>Your Appointments</Text>

      </ImageBackground>
      </View>
      <View style = {surStyle.inputContainer}>
        <ScrollView>
        <View style = {styles.pinkContainer}>
            <Text>Family Doctor appointments</Text>
            <View style = {styles.smallerContainer}>
                <Text>First visit  to your should be completed by:  </Text>
                {/* <Text> {LMP} </Text> */}
                <Text> {firstAppointDate(LMP)} </Text>

            </View>
            <View style = {styles.smallerContainer}>
                <Text>Next visit to should be completed in 4-6 weeks after your visit by:</Text>
                {/* <Text> {LMP} </Text> */}
                <Text>{nextAppointDate(LMP)}  </Text>

            </View>
        </View> 
        <View style = {styles.pinkContainer}>
            <Text>Diagnostics appointments</Text>
            <View style = {styles.smallerContainer}>
            <Text>Dating Ultrasound (brief description)</Text>

            </View>
            
        </View> 
        <View style = {styles.pinkContainer}>
            <Text>Laboratory appointment</Text>
            <View style = {styles.smallerContainer}>
            <Text>Blood test for HIV, VDRL, HepBSAg, Rubella IgG etc. Urinalysis, Urine culture</Text>

            </View>
            
        </View> 
        <View style = {styles.pinkContainer}>
            <Text>Vaccination</Text>
            <View style = {styles.smallerContainer}>
            <Text>Safe required vaccinations (brief description)</Text>

            </View>
            
        </View>  
        </ScrollView>

      </View>      
    </View>
  )
}

export default AppointmentScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: color.white,
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