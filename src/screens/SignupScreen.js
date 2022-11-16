import { useNavigation } from '@react-navigation/core'
import React, { useEffect, useState, useContext} from 'react';
import { KeyboardAvoidingView, StyleSheet, Text, TextInput, TouchableOpacity, View, Image, ScrollView } from 'react-native'
import { firebase } from '../firebase'
import { UserContext } from '../context/UserContext'

const LoginScreen = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [repeatPassword, setRepeatPassword] = useState(false)
  const {user, setUser} = useContext(UserContext);
  const navigation = useNavigation();
  const [Firstname, setFirstName] = useState();
  const [Lastname, setLastName] = useState();
  const [age, setAge] = useState();
  const auth = firebase.auth();
  const [check, setCheck] = useState(false)

  useEffect(() => {
    async function fetchData(){
    const name = null;
    firebase.firestore().collection('users')
    .doc(auth.currentUser?.email)
    .get()
    .then(documentSnapshot => {
      const count = documentSnapshot.get("isPregnant")
      console.log('count exists: ', count);
      setCheck(count)
    });}
    fetchData();
    const unsubscribe = firebase.auth().onAuthStateChanged(user => {
      if (user) {
        if (check){
          navigation.replace("Dashboard")
        }
        else{
          navigation.replace("Welcome")
        }
       
      }
    })

    return unsubscribe
  }, [])

  const handleSignUp = () => {
    
      
      if(repeatPassword !== password){
        alert('Passwords should match')
        console.log("Passwords should match")
      }
      else{


        firebase.auth()
      .createUserWithEmailAndPassword(email, password)
      .then(userCredentials => {
        const user = userCredentials.user;
        console.log('Registered with:', user.email);
      firebase.firestore()
      .collection('users')
      .doc(auth.currentUser?.email)
      .set({
        FirstName: Firstname,
        LastName: Lastname,
        Age: age,
        isPregnant: false
        })
      .then(() => {
        console.log('User added!');
      });
      })
      .catch(error => alert(error.message))


      }
    
  }


  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior="padding"
    >
      <View style={styles.headerContainer}>
        <Text style={styles.headerText}>Sign up</Text>
      </View>
      <ScrollView style={styles.inputContainer} >
       
          <Text style={styles.queryText}>Email</Text>
          <TextInput
            placeholder="Email"
            value={email}
            onChangeText={text => setEmail(text)}
            style={styles.input}
          />
        
        
        <Text style={styles.queryText}>Password</Text>
        <TextInput
          placeholder="Password"
          value={password}
          onChangeText={text => setPassword(text)}
          style={styles.input}
          secureTextEntry
        />
        <Text style={styles.queryText}>Repeat Password</Text>
        <TextInput
          placeholder="Retype Password"
          value={repeatPassword}
          onChangeText={(text) => {setRepeatPassword(text)}}
          style={styles.input}
          secureTextEntry
        />
        <Text style={styles.queryText}>First Name</Text>
        <TextInput
          placeholder="FirstName"
          value={Firstname}
          onChangeText={text => setFirstName(text)}
          style={styles.input}
          
        />
        
        <Text style={styles.queryText}>Last Name</Text>
        
        <TextInput
          placeholder="LastName"
          value={Lastname}
          onChangeText={text => setLastName(text)}
          style={styles.input}
          
        />
        
        <Text style={styles.queryText}>Age</Text>
        
        <TextInput
          placeholder="Age"
          value={age}
          onChangeText={text => setAge(text)}
          style={styles.input}
          
        />
        
      </ScrollView>
      <View style={styles.buttonContainer}>
        <TouchableOpacity 
          onPress={handleSignUp}
          style={[styles.button, styles.buttonOutline, ]}
        >
          <Image style={styles.imageLogo}
          source={{uri: 
          'data:image/jpeg;base64,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'}}/>
          
          <Text style={styles.buttonOutlineText}>Create Account</Text>
        </TouchableOpacity>
       
        <Text>By giving us permission to store data,</Text>
        <Text>important information that you've entered such as</Text>
        <Text> due date, weight tracking and other notes will be saved.</Text>
      </View>
    </KeyboardAvoidingView>
  )
}

export default LoginScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F08686",
  },

  headerContainer :{
    width: "100%",
    height:"14%"
  },

  headerText: {
    color: "white",
    fontWeight: '700',
    fontSize: 40,
    textAlign:'center',
    marginTop:'14%'
  },

  inputContainer: {
    width: '100%',
    height:"67%",
    backgroundColor: 'white',
  },

  input: {
    backgroundColor: 'white',
    width:'70%',
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 10,
    marginTop: 15,
    marginLeft:'6%',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,

    elevation: 6,
  },

  queryText: {
    marginLeft: '6%',
    marginTop: '5%',
    fontSize: 16,
    fontWeight: '400',
  },

  buttonContainer: {
    backgroundColor: 'white',
    width: '100%',
    height:'20%',
    justifyContent: 'center',
    alignItems: 'center',
  },

  imageLogo: {
    width:30,
    height:30,
    marginLeft:'3%',
  },

  button: {
    backgroundColor: '#F08686',
    width: '50%',
    padding: 10,
    borderRadius: 10,
    alignItems: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop:'1%'

  },
  buttonOutline: {
    borderColor: '#F08686',
    borderWidth: 2,
  },
  
  buttonOutlineText: {
    color: 'white',
    fontWeight: '700',
    fontSize: 16,
    marginLeft:'2%'
  },
})