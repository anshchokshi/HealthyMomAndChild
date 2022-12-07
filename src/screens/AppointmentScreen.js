import { 
    StyleSheet, 
    Text, 
    View,
    ScrollView,
    ImageBackground,
    Modal,
    Image,
    Switch, 
    TextInput, 
    TouchableOpacity, Pressable } from 'react-native'
import React, { useEffect, useState, useContext} from 'react';
import { useNavigation } from '@react-navigation/core'
import PregnantSurvey2 from './PregnantSurvey2';
import { useRoute } from '@react-navigation/core';
import surStyle from '../helpers/SurveyStyle'
import color from '../helpers/Color'
import { UserContext } from "../context/UserContext";
import { CalculateAppointments } from '../helpers/CalculateAppointments';
import {
    percentageWidth, 
    percentageHeight, 
    convertHeight, 
    convertWidth} from '../helpers/ScreenSizeHelper'



const AppointmentScreen = () => {
    const today = new Date();
    const [first, setFirst] = useState();
    const [next, setNext] = useState();
    const navigation = useNavigation()
    const handleDashboard = () => {
        navigation.navigate("Dashboard")
    }

    const [modalVisible, setModalVisible] = useState(false);
    const route = useRoute();
    const { userProfile } = useContext(UserContext)

  useEffect(() => {
    
      const lmp = userProfile?.pregnantProfile?.LastMenstrualPeriod
      if (lmp != null) {
      const date = new Date (lmp)
      const f = CalculateAppointments(date, 12)
      const check = new Date (f)
      const n = CalculateAppointments(check, 5)
      console.log(f.toDateString())
      console.log(n.toDateString())
      setFirst(f.toDateString())
      setNext(n.toDateString())
      }
    else{
        console.log("user null")

    }
      

  }, [userProfile]);




    const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

    const showDatePicker = () => {
      setDatePickerVisibility(true);
    };

    const hideDatePicker = () => {
      setDatePickerVisibility(false);
    };

    const handleConfirm = (date) => {
      setLMP(date.toDateString());
      console.warn("A date has been picked: ", date);
      hideDatePicker();
  };
    
  return (
    <View style = {styles.container}>
      <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
            >

            <View style={styles.modalView}>
                <Text style={styles.modalText}>This feature will be developed later.</Text>
                <Pressable
                    style={styles.buttonClose}
                    onPress={() => setModalVisible(!modalVisible)}
                >
                    <Text style={{fontSize:17}}>Hide</Text>
                </Pressable>
            </View>
                
        </Modal>
        
      <View style = {[surStyle.headerContainer,{backgroundColor:'transparent'}]}>
      <ImageBackground 
      source={require('../assets/APTS.png')}
      style ={[{width: '100%', height:'100%'}]}
      blurRadius={4}>
      <Text style ={[surStyle.headerText,{color:color.mainPink}, {marginTop: '20%'}]}>Your Appointments</Text>

      </ImageBackground>
      </View>
      <View style = {surStyle.inputContainer}>
        <ScrollView>
        <View style = {styles.pinkContainer}>
            <Text>Family Doctor appointments</Text>
            <View style = {styles.smallerContainer}>
                <Text>First visit  to your should be completed by: </Text>
                <Text>{first}  </Text>

            </View>
            <View style = {styles.smallerContainer}>
                <Text>Next visit to should be completed in 4-6 weeks after your visit by:</Text>
                <Text>{next} </Text>

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
      <View style={styles.footerContainer}>
                <TouchableOpacity style={styles.button} onPress={() => setModalVisible(true)}>
                    <Text style={styles.buttonText}>Today</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={() => setModalVisible(true)}>
                    <Text style={styles.buttonText}>Explore</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={handleDashboard}>
                    <Image style={styles.buttonImg} 
                    source={{uri:
                    'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHgAAAB4CAMAAAAOusbgAAAAZlBMVEX///8AAAATExNgYGCgoKDf39+UlJTn5+fs7Oz5+fnQ0NCoqKj09PSYmJji4uJcXFzJycmysrKKioplZWU2NjYLCwtAQEBqampKSkqCgoIiIiJWVla5ubkrKyswMDBRUVF3d3caGhrpcg/PAAADeUlEQVRoge2a7baqIBCGozLRzCz7jsru/yaP7YYKZwbUcJ+zzuL9KTkP4ssMYKNRUFBQUNB/K6mOZXlUkmpL1MzQIvWGTWYCNEtw6140tfLEjTfvmJu42Zojrrj44RZG0G1zICMMHnvhzpth578DPuK4x18AJ0scVojlp8UGAccXiivE9cNiQ4CLLc01LDYAeMVhH3rNVf/gtY1b55KBwMnEzhViPwg4Prm4tcWkf3CBoymFr6W+wShbiXvNSO/o8sovGNvq8DOq8oAaZh7BskSRSt2Gm6rUFzjfoUBr22BccZbpBSYewChH+PX7eWIiLmRHKdmeeQBXKMjmzdM92BCs78DZGcXYf46EHnO8yvoOHOFHWUATeEq7bOEVXIxRBChB2esR99nzirVwdQRjW52KZ0v8McF2sAQobLm8ExivrXY5MIyJuoXeENO9D5hYW5UJMxJgsQRnse5giQdO+whPMFFBE7tSaA0mcoJ6tmS4LNQ6gMWIQtkJTGSr6NmSM6u9Lbx+ojJ1ABO20tZlnqgWYfiO4AyvrfRknfJcIaZwO5XF2oAjtggmhK0+VYHrCYu1ABNLdshW8c3OFeIGL4TIYs6tOb5HbxHSFqvMk/4t7r2yc7GtLlAEuYlCx5d4i7XmqaMMD+YZmhybCBwf19MlcWjxVMR2072JeGvCWmyT09zijn4KtrKlfyxdSrBddHEzxRdBa8EjZLlvjrnYVoec65FTED/Heb1pMeIllhnXoxaCQ5GM2AkYFouvXNcSshi5dWAt9nloQaR+na06vt63TnwWe1mMSP0p26P2gvj8RoQogpLtURdBuZJ4Mj4skBBLdrCVoxi5VYHFcKE8J0R0sJV0FiO3bpKzWDVCl8BWKXOS1k2XlLPYqLmKhV+2LEZuKdpiy8bh8hXGxrEV6iLYbEkzVeTms+nK5dr8dRJsL40dgjInDdiKOyjtq0vctNjUnMhgK2KP+KXGhWkxfbz93POMwVY9ipFbkKvSn2d614nHadVB5+4huPXsgbe40ydkkFuUevXC+0A/9FpXJ0plI1rDgi0K4AAO4AAeDjzLo4bymeseL+Apvse5Dg7gAA7gAA7gAA7gAA7gAP47YOcJdR/wvQXY+YWpD9j2tUsrHgKM/iZLyXXA1h08Jr83YclFOeF1Jj5PqrPlhnJB/hc6KCgoKOif1x/WoTaqSAaQ9gAAAABJRU5ErkJggg=='}}/>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={() => setModalVisible(true)}>
                    <Text style={styles.buttonText}>Club</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={() => setModalVisible(true)}>
                    <Text style={styles.buttonText}>Tools</Text>
                </TouchableOpacity>
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
  },
  footerContainer :{
    width: "100%",
    height:"10%",
    backgroundColor:'#F08686',
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: '195%'
    
},

button :{
    backgroundColor: "white",
    width: '16%',
    padding: 10,
    borderRadius: 100,
    alignItems: 'center',
    marginLeft:'3%',
    marginTop:'2%'
    
},

buttonImg: {
    height:40,
    width:40
},

buttonText: {
    fontWeight: '700',
    fontSize: 10,
    marginTop:'30%'
},   

modalView: {
    marginTop: '80%',
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
},
modalText: {
    marginBottom: 15,
    textAlign: "center",
    fontSize:18,
    fontWeight:'700'
},
buttonClose: {
    backgroundColor: "#2196F3",
    borderRadius: 10,
    padding: 15,
    elevation: 2
},
})