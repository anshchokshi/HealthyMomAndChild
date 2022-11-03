import { useNavigation } from '@react-navigation/core';
import React, { useEffect, useState, useContext} from 'react';
import { Pressable, StyleSheet, Text, TouchableOpacity, View, Modal } from 'react-native'
import { firebase } from '../firebase'

const WelcomePage = () => {
  const navigation = useNavigation()
  const auth = firebase.auth();
  const [Firstname, setFirstName] = useState();
  const [modalVisible, setModalVisible] = useState(false);
  useEffect( () =>{
  async function fetchData(){
    const name = null;
    firebase.firestore().collection('users')
    .doc(auth.currentUser?.email)
    .get()
    .then(documentSnapshot => {
      const name = documentSnapshot.get("FirstName")
      console.log('User exists: ', name);
      setFirstName(name)
    });}
  fetchData();
}, [] );


  const handlePregnant = () => {
    navigation.navigate("Pregnant Survey1")
  }


  return (
    <View style={styles.container}>
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


      <View style={styles.headerContainer}>
        <Text style={styles.headerText}>Welcome {Firstname}!</Text>
      </View>
      
      <View style={styles.buttonContainer}>
        <Text style={{fontSize:20, fontWeight:'500'}}>Select from the following:</Text>
        <TouchableOpacity
          style={styles.button}
          onPress={() => setModalVisible(true)}
        >
          <Text style={styles.buttonText}>I want to become pregnant</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={handlePregnant}
          style={styles.button}
        >
          <Text style={styles.buttonText}>I am already pregnant</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => setModalVisible(true)}
        >
          <Text style={styles.buttonText}>I have a Baby</Text>
        </TouchableOpacity>
      
      </View>
      
      
  
    </View>
  )
}

export default WelcomePage

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor:'#F08686',
  },
  headerContainer :{
    width: "100%",
    height:"20%"

  },
  headerText: {
    color: "white",
    fontWeight: '700',
    fontSize: 32,
    textAlign:'center',
    marginTop:'20%'
  },

  buttonContainer: {
    backgroundColor: 'white',
    width: '100%',
    height:'80%',
    justifyContent: 'center',
    alignItems: 'center',
   
    
  },

   button: {
    backgroundColor: '#F08686',
    width: '65%',
    padding: 19,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: "10%",
    marginBottom:'15%'
  },
  
  buttonText: {
    color: 'white',
    fontWeight: '700',
    fontSize: 16,
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