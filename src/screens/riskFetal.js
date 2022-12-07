import { useNavigation } from '@react-navigation/core'
import React, { useEffect, useState, useContext } from 'react'
import { Linking, Modal, StyleSheet, Text, Pressable, TouchableOpacity, View, Image, ScrollView } from 'react-native'
import Icon from 'react-native-vector-icons/AntDesign';

const RiskFetal = () => {
  const navigation = useNavigation()
  const handleDashboard = () => {
    navigation.navigate("Dashboard")
  }

  const [modalVisible, setModalVisible] = useState(false);
  const handleNext = () => {
    navigation.navigate("Health care providers")
  }
  const handleBack = () => {
    navigation.navigate("related words screen")
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
      <View style={styles.headerButtonContainer}>
      <TouchableOpacity
          onPress={handleBack}
          style={styles.backButton}
        >
          <Icon name= 'arrowleft' size={28} color="white"></Icon>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={handleNext}
          style={styles.nextButton}
        >
          <Icon name= 'arrowright' size={28} color="white"></Icon>
        </TouchableOpacity>
        </View>
      <View style={styles.headerContainer}>
      <Text style={styles.headerText}>Risk of fetal development</Text>

      </View>

      <View style={styles.inputContainer}>
        
        <Text style={styles.description}>During this embryonic stage most organs are formed throughout the body.</Text>
        <Text style={styles.description}>Therefore
                there is an increased susceptibility to
                fetal malformations if the woman follows unhealthy
                lifestyle habits or does not take care of herself from
                the beginning of her pregnancy</Text>
        <Text></Text>
        <Image source={require('../assets/risk.png')} style={styles.imageLogo}></Image>
        
        <Text style={{color: 'blue' ,marginLeft:'3%'}}
        onPress={() => Linking.openURL('https://www.freepik.com/freevector/hand drawn fetal developmentinfographic_21743833.htm#query=fetal%20development&position=40&from_view=search&track=sph')}>
        Source: Freepik
        </Text>

      <View style={styles.footerContainer}>
                <TouchableOpacity style={styles.button} onPress={() => setModalVisible(true)}>
                    <Text style={styles.buttonText}>Today</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={() => setModalVisible(true)}>
                    <Text style={styles.buttonText}>Explore</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={handleDashboard}>
                    <Image style={styles.buttonImg} 
                    source={{uri:
                    'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHgAAAB4CAMAAAAOusbgAAAAZlBMVEX///8AAAATExNgYGCgoKDf39+UlJTn5+fs7Oz5+fnQ0NCoqKj09PSYmJji4uJcXFzJycmysrKKioplZWU2NjYLCwtAQEBqampKSkqCgoIiIiJWVla5ubkrKyswMDBRUVF3d3caGhrpcg/PAAADeUlEQVRoge2a7baqIBCGozLRzCz7jsru/yaP7YYKZwbUcJ+zzuL9KTkP4ssMYKNRUFBQUNB/K6mOZXlUkmpL1MzQIvWGTWYCNEtw6140tfLEjTfvmJu42Zojrrj44RZG0G1zICMMHnvhzpth578DPuK4x18AJ0scVojlp8UGAccXiivE9cNiQ4CLLc01LDYAeMVhH3rNVf/gtY1b55KBwMnEzhViPwg4Prm4tcWkf3CBoymFr6W+wShbiXvNSO/o8sovGNvq8DOq8oAaZh7BskSRSt2Gm6rUFzjfoUBr22BccZbpBSYewChH+PX7eWIiLmRHKdmeeQBXKMjmzdM92BCs78DZGcXYf46EHnO8yvoOHOFHWUATeEq7bOEVXIxRBChB2esR99nzirVwdQRjW52KZ0v8McF2sAQobLm8ExivrXY5MIyJuoXeENO9D5hYW5UJMxJgsQRnse5giQdO+whPMFFBE7tSaA0mcoJ6tmS4LNQ6gMWIQtkJTGSr6NmSM6u9Lbx+ojJ1ABO20tZlnqgWYfiO4AyvrfRknfJcIaZwO5XF2oAjtggmhK0+VYHrCYu1ABNLdshW8c3OFeIGL4TIYs6tOb5HbxHSFqvMk/4t7r2yc7GtLlAEuYlCx5d4i7XmqaMMD+YZmhybCBwf19MlcWjxVMR2072JeGvCWmyT09zijn4KtrKlfyxdSrBddHEzxRdBa8EjZLlvjrnYVoec65FTED/Heb1pMeIllhnXoxaCQ5GM2AkYFouvXNcSshi5dWAt9nloQaR+na06vt63TnwWe1mMSP0p26P2gvj8RoQogpLtURdBuZJ4Mj4skBBLdrCVoxi5VYHFcKE8J0R0sJV0FiO3bpKzWDVCl8BWKXOS1k2XlLPYqLmKhV+2LEZuKdpiy8bh8hXGxrEV6iLYbEkzVeTms+nK5dr8dRJsL40dgjInDdiKOyjtq0vctNjUnMhgK2KP+KXGhWkxfbz93POMwVY9ipFbkKvSn2d614nHadVB5+4huPXsgbe40ydkkFuUevXC+0A/9FpXJ0plI1rDgi0K4AAO4AAeDjzLo4bymeseL+Apvse5Dg7gAA7gAA7gAA7gAA7gAP47YOcJdR/wvQXY+YWpD9j2tUsrHgKM/iZLyXXA1h08Jr83YclFOeF1Jj5PqrPlhnJB/hc6KCgoKOif1x/WoTaqSAaQ9gAAAABJRU5ErkJggg=='}}/>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={() => setModalVisible(true)}>
                    <Text style={styles.buttonText}>Club</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={() => setModalVisible(true)}>
                    <Text style={styles.buttonText}>Tools</Text>
                </TouchableOpacity>
            </View>
      </View>
      
    </View>
  )
}

export default RiskFetal

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: "#F08686",
  },
  headerButtonContainer :{
    width: "100%",
    height:"12%",
    display: 'flex',
    flexDirection: "row"

  },
  headerContainer :{
    width: "100%",
    height:"5%",
    display: 'flex',

  },
  headerText: {
    color: "white",
    fontWeight: '700',
    fontSize: 25,
    textAlign:'center',
  },
  description: {
    fontSize: 18,
    fontWeight: '400',
    marginLeft: "3%",
    color: "#7C2424",
    marginTop:"8%"
  },

  inputContainer: {
    width: '100%',
    height:"85%",
    backgroundColor: 'white',

  },

  imageLogo: {
    width:"100%",
    height: "50%",
    marginTop: 3,
  },
  footerContainer :{
    width: "100%",
    height:"15%",
    backgroundColor:'#F08686',
    flexDirection: 'row',
    flexWrap: 'wrap',
    
  },

  button :{
    backgroundColor: "white",
    width: '16%',
    padding: 10,
    borderRadius: 100,
    alignItems: 'center',
    marginLeft:'3%',
    marginTop:'2%'
    
  },

  buttonImg: {
    height:40,
    width:40
  },

  buttonText: {
    fontWeight: '700',
    fontSize: 10,
    marginTop:'30%'
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
  backButton : {
    backgroundColor: "#F08686",
    width: "15%",
    padding: 15,
    borderRadius: 100,
    marginLeft:"1%",
    //marginBottom: "1%", 
    marginTop: "10%"
  },

  nextButton : {
    backgroundColor: "#F08686",
    width: "15%",
    padding: 15,
    marginLeft: "68%", 
    borderRadius: 100,
    marginTop: "10%",
  }
  
})