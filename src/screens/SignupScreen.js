import { useNavigation } from '@react-navigation/core'
import React, { useEffect, useState, useContext} from 'react';
import { KeyboardAvoidingView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { firebase } from '../firebase'
import { UserContext } from '../Context'

const LoginScreen = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const {user, setUser} = useContext(UserContext);
  const navigation = useNavigation();
  const [Firstname, setFirstName] = useState();
  const [Lastname, setLastName] = useState();
  const [age, setAge] = useState();

  useEffect(() => {
    const unsubscribe = firebase.auth().onAuthStateChanged(user => {
      if (user) {
       // navigation.replace("Welcome")
      }
    })

    return unsubscribe
  }, [])

  const handleSignUp = () => {
    firebase.auth()
      .createUserWithEmailAndPassword(email, password)
      .then(userCredentials => {
        const user = userCredentials.user;
        console.log('Registered with:', user.email);
      })
      .catch(error => alert(error.message))
      
    firebase.firestore()
    .collection('users')
    .doc(email)
    .set({
      FirstName: Firstname,
      LastName: Lastname,
      Age: age,
      })
    .then(() => {
      console.log('User added!');
    });
  }


  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior="padding"
    >
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Email"
          value={email}
          onChangeText={text => setEmail(text)}
          style={styles.input}
        />
        <TextInput
          placeholder="Password"
          value={password}
          onChangeText={text => setPassword(text)}
          style={styles.input}
          secureTextEntry
        />
        <TextInput
          placeholder="FirstName"
          value={Firstname}
          onChangeText={text => setFirstName(text)}
          style={styles.input}
          
        />

        <TextInput
          placeholder="LastName"
          value={Lastname}
          onChangeText={text => setLastName(text)}
          style={styles.input}
          
        />
        <TextInput
          placeholder="Age"
          value={age}
          onChangeText={text => setAge(text)}
          style={styles.input}
          
        />
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          onPress={handleSignUp}
          style={[styles.button, styles.buttonOutline]}
        >
          <Text style={styles.buttonOutlineText}>Register</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  )
}

export default LoginScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputContainer: {
    width: '80%'
  },
  input: {
    backgroundColor: 'white',
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 10,
    marginTop: 5,
  },
  buttonContainer: {
    width: '60%',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 40,
  },
  button: {
    backgroundColor: '#0782F9',
    width: '100%',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
  },
  buttonOutline: {
    backgroundColor: 'white',
    marginTop: 5,
    borderColor: '#0782F9',
    borderWidth: 2,
  },
  buttonText: {
    color: 'white',
    fontWeight: '700',
    fontSize: 16,
  },
  buttonOutlineText: {
    color: '#0782F9',
    fontWeight: '700',
    fontSize: 16,
  },
})