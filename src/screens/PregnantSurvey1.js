import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native'
import React, { useEffect, useState, useContext} from 'react';
import { useNavigation } from '@react-navigation/core'
import PregnantSurvey2 from './PregnantSurvey2';
import { useRoute } from '@react-navigation/core';

const PregnantSurvey1 = () => {
    const [LMP, setLMP] = useState("temp")
    const [firstPreg, setfirstPreg] = useState(true)
    const navigation = useNavigation();
    const route = useRoute();
    const handleNext = () => {
      navigation.navigate("Pregnant Survey2", {LMP: LMP, firstPreg: firstPreg})
    }
    
  return (
    <View style={styles.inputContainer}>
        <TextInput
          placeholder="Last Mentrual Period"
          value={LMP}
          onChangeText={text => setLMP(text)}
          style={styles.input}
        />
        <TextInput
          placeholder="Is this your first pregancy?"
          value={firstPreg}
          onChangeText={text => setfirstPreg(text)}
          style={styles.input}
        />
        <View style={styles.buttonContainer}>
        <TouchableOpacity
          onPress={handleNext}
          style={[styles.button, styles.buttonOutline]}
        >
          <Text style={styles.buttonOutlineText}>Next</Text>
        </TouchableOpacity>
      </View>
      </View>
  )
}

export default PregnantSurvey1

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