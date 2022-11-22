import { 
  StyleSheet, 
  Text, 
  View,
  Switch, 
  TextInput, 
  TouchableOpacity, 
  Button,
  Modal,
  Alert } from 'react-native'
import React, { useEffect, useState, useContext} from 'react';
import { useNavigation } from '@react-navigation/core'
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
    const [LMP, setLMP] = useState(today.toISOString())
    //LMP: YYYY-MM-DDTHH:mm:ss.sssZ
    const [firstPreg, setfirstPreg] = useState(true)
    const [modalVisible, setModalVisible] = useState(false);
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
      const now = new Date();
      if ((now - date)>=0){
        setLMP(date.toISOString());
        hideDatePicker();
      }
      else{
        hideDatePicker();
        setModalVisible(!modalVisible);
      }
  };
    
  return (
    <View style = {styles.container}>
      <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
      >
      <View style={styles.modalView}>
          <Text style={styles.modalText}>Invaild Date</Text>
          <TouchableOpacity
              style={styles.buttonClose}
              onPress={() => setModalVisible(!modalVisible)}
          >
              <Text style={{fontSize:17}}>Hide</Text>
          </TouchableOpacity>
      </View>
      </Modal>
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
            <Text style = {[surStyle.text,{fontWeight:'light'}]}>{LMP.slice(0,10)}</Text>
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