import { 
  StyleSheet, 
  Text, 
  Switch,
  View, 
  TextInput, 
  TouchableOpacity, 
  Pressable,
  DatePickerAndroidDateSetAction, Modal } from 'react-native'
import React, { useEffect, useState, useContext} from 'react';
import { useNavigation } from '@react-navigation/core'
import { useRoute } from '@react-navigation/core';
import  WaveHeader  from '../component/WaveHeader'
import surStyle from '../helpers/SurveyStyle'
import color from '../helpers/Color'
import SelectButton1 from '../component/Switch'
import PregnantSurvey1 from './PregnantSurvey1';
import PregnantSurvey3 from './PregnantSurvey3';
import Icon from 'react-native-vector-icons/AntDesign';





const PregnantSurvey2 = () => {
    const route = useRoute();
    console.log("here:", route.params.LMP)
    const [HBS, setHBS] = useState(false)
    const [EBS, setEBS] = useState(false)
    const [modalVisible1, setModalVisible1] = useState(false);
    const [modalVisible2, setModalVisible2] = useState(false);
    const navigation = useNavigation();
    const handlenext = () => {
      navigation.navigate("Pregnant Survey3", {LMP: route.params.LMP, firstPreg:route.params.firstPreg, HBS: HBS, EBS: EBS})       
    }
    const handlepre = () => {
      navigation.goBack()
          
    }
    const changeHBS = () => { 
      setHBS(!HBS)
    }
    const changeEBS = () => { 
      setEBS(!EBS)
    }
  return (
    <View style = {styles.container}>
      <View style = {[surStyle.headerContainer]}>
        <WaveHeader text="I'm Pregnant"></WaveHeader>
      </View>
      <View style = {surStyle.inputContainer}>
              <Modal
                    animationType="slide"
                    transparent={true}
                    visible={modalVisible1}
                        >
                  <View style={styles.modalView}>
                      <Text style={styles.modalText}>High blood pressure means when pressure is consistently 140/90 mm Hg or higher</Text>
                      <Pressable
                          style={styles.buttonClose}
                          onPress={() => setModalVisible1(!modalVisible1)}
                          >
                          <Text style={{fontSize:17}}>Hide</Text>
                          </Pressable>
                      </View>
          
                </Modal>

                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={modalVisible2}
                        >
                  <View style={styles.modalView}>
                      <Text style={styles.modalText}>A fasting blood sugar level of 99 mg/dL or lower is normal, 100 to 125 mg/dL indicates you have prediabetes, and 126 mg/dL or higher indicates you have diabetes.</Text>
                      <Pressable
                          style={styles.buttonClose}
                          onPress={() => setModalVisible2(!modalVisible2)}
                          >
                          <Text style={{fontSize:17}}>Hide</Text>
                          </Pressable>
                      </View>
          
                </Modal>
        
        <View
        
        style = {surStyle.textContainer}>
          <Text style = {surStyle.text}>Do you have high Blood Pressure?</Text>
          <Icon name= 'questioncircle' size={27} color='#F08686' 
        onPress={() => setModalVisible1(true)}></Icon>
        </View> 
      {/* <View style={surStyle.rowContainer}>
      <Text style = {surStyle.text}>NO</Text>
      <Switch
      trackColor={{ false: color.lightPink, true: color.mainPink }}
        thumbColor={HBS ? color.white : color.white}
        ios_backgroundColor= "#3e3e3e"
        onValueChange={changeHBS}
        value={HBS}></Switch>
        <Text style = {surStyle.text}>Yes</Text></View> */}
      <SelectButton1 values={[true, false]}
              selectedValue={HBS}
              setSelectedValue={setHBS}>
        </SelectButton1>
        <View
        style = {surStyle.textContainer}>
        <Text style = {surStyle.text}>Do you have elevated blood sugar?</Text>
        <Icon name= 'questioncircle' size={27} color='#F08686' 
        onPress={() => setModalVisible2(true)}></Icon>
        </View>
        {/* <View style={surStyle.rowContainer}>
        <Text style = {surStyle.text}>No</Text>        
        <Switch
        trackColor={{ false: color.lightPink, true: color.mainPink }}
        thumbColor={EBS ? color.white : color.white}
        ios_backgroundColor= "#3e3e3e"
        onValueChange={changeEBS}
        value={EBS}></Switch>
        <Text style = {surStyle.text}>Yes</Text>
        </View> */}

        <SelectButton1 values={[true, false]}
              selectedValue={EBS}
              setSelectedValue={setEBS}>
        </SelectButton1>


    </View>
    <View style={[surStyle.rowContainer,surStyle.bottom]}>
        <TouchableOpacity
          onPress={handlepre}
          style={[surStyle.buttonLight, surStyle.roundButton]}
        >
          <Icon name= 'arrowleft' size={28} color={color.mainPink}></Icon>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={handlenext}
          style={[surStyle.buttonDark, surStyle.roundButton]}
        >
          <Icon name= 'arrowright' size={28} color={color.white}></Icon>
        </TouchableOpacity>
      </View>
    </View>

  )
}

export default PregnantSurvey2

const styles = StyleSheet.create({
  container:{
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: color.white,
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
    textAlign: "justify",
    fontSize:15,
    fontWeight:'700'
  },
  buttonClose: {
    backgroundColor: "#2196F3",
    borderRadius: 10,
    padding: 15,
    elevation: 2
  },
  
})