import { useNavigation } from '@react-navigation/core';
import React, { useEffect, useState, useContext} from 'react';
import { Button, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { firebase } from '../firebase'
import { getFetalGrowthData } from '../db/fetalGrowth'

const WelcomePage = () => {
  const navigation = useNavigation()
  const auth = firebase.auth();
  const [Firstname, setFirstName] = useState();
  const handleSignOut = () => {
    auth.signOut().then(() => {
        navigation.replace("Login")
      })
      .catch(error => alert(error.message))
  }
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
      <View style={styles.headerContainer}>
        <Text style={styles.headerText}>Welcome {Firstname}!</Text>
        
      </View>
      
      <View style={styles.buttonContainer}>
        <Text style={{fontSize:20, fontWeight:'500'}}>Select from the following:</Text>
        <TouchableOpacity
          style={styles.button}
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

})