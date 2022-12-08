import { useNavigation } from '@react-navigation/core'
import React, { useEffect, useState, useContext, useCallback } from 'react'
import { KeyboardAvoidingView, StyleSheet, Text, TextInput, TouchableOpacity, View, Image } from 'react-native'
import { login } from '../auth/auth'
import { UserContext } from '../context/UserContext'

const LoginScreen = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const { userProfile } = useContext(UserContext)

  const navigation = useNavigation()

  useEffect(() => {
    if (userProfile == null) { return }
    if (userProfile.pregnantProfile != null) {
      navigation.replace("Dashboard")
    } else {
      navigation.replace("Welcome")
    }
  }, [userProfile])

  const handleSignUp = () => {
    console.log("here")
    navigation.navigate("Signup")
  }

  const handleLogin = useCallback(() => {
    login(email, password)
  }, [email, password])

  return (
    <View
      style={styles.container}
    >
      <View style={styles.headerContainer}>
        <Text style={styles.headerText}>Login</Text>
      </View>
      <View style={styles.inputContainer}>
        
        <Text style={styles.queryText}>Email</Text>
        <View style={{flexDirection: 'row', flexWrap: 'wrap'}}>
          <Image style={styles.imageLogo}
          source={{uri: 
          'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHcAAAB3CAMAAAAO5y+4AAAAbFBMVEX///8AAADv7+89PT3n5+fb29v29vYdHR3y8vLq6ur5+fn8/PzW1tYrKysaGhrOzs6enp6urq6UlJRNTU3ExMSmpqaBgYFERETh4eEwMDC5ubkJCQlUVFRvb2+Hh4deXl55eXlmZmYTExMkJCTzpZn9AAAFD0lEQVRogb1a58KqMAwVQYbKRpkO9P3f8UrSCn6sNi33/FTatGlykibd7eRRhPG18YPaqAO/ucahRZhDFvYhyd/GL955UtibSj1ecmMa6eW0mVTvPiMUcfc2keomzlCK45dm6f/+lLj6xYZmL6C8Z+HB8vaedQize9n/YYaapR57Fd+qvzZkV7de2VqP2eLmVEb7yQ/2kc++yDWe8oF7TjQ/qRdxrzroEpuxGdvlrXgtflZnmsTWMF1QrX5ZBShYi3WdUWxZCHxboG3XGlTtocE0YkToNvC1P219Ejil6Dyi/GujS6Wq7pTgNOK0b+NCEzWxZ1SbDP+5eDBnFbE28MVLzkwOL0kVjXGBpceSo2LSqAFc4KmH9LgH8BY9OCH1iTjuLwokVbJcYIw7YSBErxdVbAX0KL/dz4aBMNeJdRotdbtswy1NrEU83Q5wwjUtwQV3yGmEd8rpigZvuJCGMs8nKdo2VegOCNY8UkZ2XlQTxaIP1pRVZzSu4oBTomQ8F7VwllCt40ZdMALU9SQMhIyFnqGFkB0RBpZq0RsNmjAwoBokk9tF/zdhoCOfaQxxCIhy34p67hzYJwws1eyKfL4PDfZMIeirWnJWUYM3hMErWe6dumwgnJwsN6fSHTiCQYlkHU7dYIeUrJBX3EFBWzeVgJRQwwLzhICm6KND98K9T1c0qLkk3r6v9CS4VXFCvPxSNgxHZJCDSk6N3cCxKVUsch0h+86I476AWsVL9iJrO1Q9ceA5PSVHPQ21ULZj3CFJ7zFpsb+wX9JrRx29qMTOwGqi4vkO1hgUEm8GLHi/RQUXWL2i3daHOLUyG0AlGzdlsR+KZ7V2kfIM1ruMVPFwES7raNzWaN5lbQZTU1tlj6XONX+q2Feptm7OifdL8mqu3HHKeOvjprOjkrBJjeYypW07bvgHigXgvwj7ztgz/g1wRfz8/ufoblxxR0YEzTXOwg+qazNs1am77QTOD2MZD6Va95LkuS4smPFmUn8boiP40QaS3ThdFIpoRj1LNRwT/68IP22aJh39bEb63NeNhjPn9ygbMpKbRfefc7/o4atT1TeWy7aypmZ1rartvzIVMrovrPY7X5otNUS9rLeA1RCyiq+K62S9im196ZRcP2YT8YDwTsR2sL/zFvVTYctnfmZP8Yq9xck6p3UIdoOAKscHZ37OxNyOH20km7Uc+UjSIbP4U1IiW8b4hBCMrzjyQSM+m8Uu6cDIdkuvX11JO2aOSG8tfs1D6oyZJSu0cHf8fiZj1aEOzvlm8cJe6JnKSkagqnNR5mpopjgBtE7BJhSuUqVM0KMRPzC8wJp6njPhkb0E6P2ES9SVf4eimr5oMeW/8616JBY0KP2IOYCm32vZXiLncgI4izilpc2FeqAzLdspsLmv9wEmvuBa3IsV6CGqX0SrmwGV0Hvrc6hXIuIx0OtDHOBLzrxJQ/hz9D+v9eAiOX+LaNRSjHmAuc4W0zwweG3PPQc4wMxz8RDsrtFSa/uDY7NkOEoPY5ax9GymAGre4On0By648HQ4zHRHhCHM+eD63IKrOMB2npN/lZJZpxTmlel1ZBVs8yafze5MXXo2Pd6FA44XOUUZt7l0h/xwSQyXOattdaaRY4RzBl1uRc4IoOipFmkXnEmPQ8VQdLEwmPijW0+5lRt9HAn0Of4dHlyYxX4rFFDDHOccNlxkzO3wmpYLEWNzjAnL+i9yxynH/5E7jsD/We4/5jo5uzfUQYwAAAAASUVORK5CYII='}}/>
          
          <TextInput
            placeholder="Type your email"
            value={email}
            onChangeText={text => setEmail(text)}
            style={styles.input}
          />
        </View>
        <Text></Text><Text></Text><Text></Text><Text></Text>
        <Text style={styles.queryText}>Password</Text>
        <View style={{flexDirection: 'row', flexWrap: 'wrap'}}>
          <Image style={styles.imageLogo}
          source={{uri: 
          'data:image/png;base64,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'}}/>
          
          <TextInput
          placeholder="Type your password"
          value={password}
          onChangeText={text => setPassword(text)}
          style={styles.input}
          secureTextEntry
        />
        </View>
        
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity
          onPress={handleLogin}
          style={styles.button}
        >
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
        <Text ></Text><Text ></Text><Text ></Text>
        <Text style={{fontSize: 18, fontWeight:"500"}}>Don't have an account?</Text>
        <TouchableOpacity
          onPress={handleSignUp}
          style={[styles.button, styles.buttonOutline]}
        >
          <Text style={styles.buttonOutlineText}>Sign up!</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default LoginScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: "#F08686",
  },
  headerContainer :{
    width: "100%",
    height:"20%"

  },
  headerText: {
    color: "white",
    fontWeight: '700',
    fontSize: 40,
    textAlign:'center',
    marginTop:'20%'
  },

  inputContainer: {
    width: '100%',
    height:"40%",
    backgroundColor: 'white',
  },
  queryText: {
    marginLeft: '6%',
    marginTop: '5%',
    fontSize: 20,
    fontWeight: '400',
  },
  input: {
    backgroundColor: 'white',
    width:'70%',
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 10,
    marginTop: 15,
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

  imageLogo: {
    width:20,
    height:20,
    marginTop: 23,
    marginLeft:'4%',
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
})