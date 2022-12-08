import { 
    View,
    StyleSheet, 
    Text, 
    ScrollView,
    TouchableOpacity,
    TextInput,
    Modal, Pressable
     } from 'react-native'
import React, { useEffect, useState, useContext} from 'react';
import { useNavigation } from '@react-navigation/core'

import color from '../helpers/Color'
import {
    percentageWidth, 
} from '../helpers/ScreenSizeHelper'
import Icon from 'react-native-vector-icons/AntDesign';


const ExplorePage = () => {

  const [weekNumber, SetweekNumber] = useState();
  const [modalVisible, setModalVisible] = useState(false);
  const navigation = useNavigation();
  const handlenext = () => {
    
    if (weekNumber >= 5 && weekNumber <= 41){
    
      navigation.navigate("Fetal Screen", { weekNumber: weekNumber })
    }
    else{
      setModalVisible(true)
    }
  }
  const handleBack = () => {
    navigation.navigate("Dashboard")
  }

  return (<>
  <View
      style={styles.container}
    >
      <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
            >

            <View style={styles.modalView}>
                <Text style={styles.modalText}>Invalid week number try again between 5 to 41</Text>
                <Pressable
                    style={styles.buttonClose}
                    onPress={() => setModalVisible(!modalVisible)}
                >
                    <Text style={{fontSize:17}}>Hide</Text>
                </Pressable>
            </View>
                
            </Modal>
            <View style={styles.headerButtonContainer}>
      <TouchableOpacity
          onPress={handleBack}
          style={styles.backButton}
        >
          <Icon name= 'arrowleft' size={28} color="white"></Icon>
        </TouchableOpacity>
        </View>
      <View style={styles.headerContainer}>
        <Text style={styles.headerText}>Explore</Text>
      </View>
<View style={styles.inputContainer}>
  <View style={{flexDirection: 'row', flexWrap: 'wrap'}}>
  <TextInput
          placeholder="Enter Week Number Between 5-41"
          value={weekNumber}
          onChangeText={text => SetweekNumber(text)}
          style={styles.input}
        />
        
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          onPress={handlenext}
          style={styles.button}
        >
          <Text style={styles.buttonText}>Next</Text>
        </TouchableOpacity>
        </View>
        </View>
        </View>
        </View>
  </>
  )
}

export default ExplorePage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: "#F08686",
  },
  headerContainer :{
    width: "100%",
    height:"10%"

  },
  headerText: {
    color: "white",
    fontWeight: '700',
    fontSize: 40,
    textAlign:'center',
    marginTop:'1%'
  },

  buttonContainer: {
    backgroundColor: 'white',
    width: '100%',
    height:'40%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    backgroundColor: '#F08686',
    width: '50%',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
  },
  buttonOutline: {
    backgroundColor: 'white',
    marginTop: 15,
    borderColor: '#F08686',
    borderWidth: 2,
  },
  buttonText: {
    color: 'white',
    fontWeight: '700',
    fontSize: 16,
  },
  buttonOutlineText: {
    color: '#F08686',
    fontWeight: '700',
    fontSize: 16,
  },
  inputContainer: {
    width: '100%',
    height:"78%",
    backgroundColor: 'white',
  },
  input: {
    backgroundColor: 'white',
    width:'70%',
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 10,
    marginTop: 15,
    marginBottom: 15,
    marginLeft:'3%',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,

    elevation: 6,
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
headerButtonContainer :{
  width: "100%",
  height:"12%",
  display: 'flex',
  flexDirection: "row"

},
backButton : {
  backgroundColor: "#F08686",
  width: "15%",
  padding: 15,
  borderRadius: 100,
  marginLeft:"1%",
  //marginBottom: "1%", 
  marginTop: "10%"
},
})