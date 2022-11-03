import { useNavigation } from '@react-navigation/core'
import React from 'react'
import { Button, StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native'
import { firebase } from '../firebase'
import { getFetalGrowthData, getFetalDevelopmentImage } from '../db/fetalGrowth'

const HomeScreen = () => {
  const navigation = useNavigation()
  const auth = firebase.auth();
  const handleSignOut = () => {
    auth.signOut().then(() => {
        navigation.replace("Login")
      })
      .catch(error => alert(error.message))
  }
  const [src, setSrc] = React.useState(null); 

  return (
    <View style={styles.container}>
      <Text>Email: {auth.currentUser?.email}</Text>
      <Button
        title="test"
        onPress={async () => {
          console.log("test")
          for (let i = 10; i <= 41; i++) {
            const { lengthIn, weightOz, weightPounds, weightGrams } = await getFetalGrowthData(i)
            console.log(`week${i} ${lengthIn}", ${lengthIn * 2.54}cm, ${weightOz} ounces, ${weightPounds} pounds, ${weightGrams} grams`)
          }
        }}
      />
      <Image
        onLoadStart={() => {
          getFetalDevelopmentImage(11)
            .then(url => { setSrc(url) })
        }}
        source={{
          uri: src,
          width: 200,
          height: 100
        }}
      />
      <TouchableOpacity
        onPress={handleSignOut}
        style={styles.button}
      >
        <Text style={styles.buttonText}>Sign out</Text>
      </TouchableOpacity>
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
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