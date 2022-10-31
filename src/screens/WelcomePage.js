import { useNavigation } from '@react-navigation/core';
import React, { useEffect, useState, useContext} from 'react';
import { Button, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { firebase } from '../firebase'
import { getFetalGrowthData } from '../db/fetalGrowth'

const WelcomePage = () => {
  const navigation = useNavigation()
  const auth = firebase.auth();
  const [Firstname, setFirstName] = useState();
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
      <Text>Welcome, {Firstname}</Text>
      
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
  )
}

export default WelcomePage

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center'
  },
   button: {
    backgroundColor: '#0782F9',
    width: '60%',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 40,
  },
  buttonText: {
    color: 'white',
    fontWeight: '700',
    fontSize: 16,
  },
})