import { useNavigation } from '@react-navigation/core'
import React, { useEffect, useState, useContext } from 'react'
import { Linking, Modal, StyleSheet, Text, Pressable, TouchableOpacity, View, Image, ScrollView } from 'react-native'
import Icon from 'react-native-vector-icons/AntDesign';


const RelatedWords = () => {
  const navigation = useNavigation()

  const [modalVisible, setModalVisible] = useState(false);
  const words = ["Placenta","Uterus", "Fetus", "Muscle Wall",
   "amniotic sac", "Pubic Symphysis", "Umbilical Cord", "Rectum", "Bladder", "Vagina"]
  
  const description = ["an organ that supplies your baby with oxygen, hormones and nutrients. It also removes fetus waste products", 
    "muscular organ that holds", 
    "baby inside the womb from the ninth week to the 38th week (or delivery, whichever is earlier)", 
    "",
    "contains amniotic fluids surrounding your baby. This cushions and protects your baby.",
    "a joint between left pelvic bone and your right pelvic bone",
    "provides nutrients, blood and oxygen to the baby, and removes waste products and carbon dioxide",
    "where bowel movements come out",
    "sac that holds urine",
    "the birth canal leading to"]
  
  const handleDashboard = () => {
    navigation.navigate("Dashboard")
  }
  const handleExplore = () => {
    navigation.navigate("Explore")
  }
  const handleNext = () => {
    navigation.navigate("Risk of fetal")
  }
  const handleBack = () => {
    navigation.navigate("Dashboard")
  }

  return (
    <View
      style={styles.container}
    >
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
        <Text style={styles.headerText}>Key Words For Pregnancy
         </Text>
      </View>
      <View style={styles.inputContainer}>
        <Image source={require('../assets/relatedWords.png')} style={styles.imageLogo}></Image>
        <Text style={{color: 'blue' ,marginLeft:'3%'}}
        onPress={() => Linking.openURL('https://www.freepik.com/freevector/pregnant fetus anatomydiagram_11207799.htm#page=3&query=pregnancy%20anatomy&position=18&from_view=keyword"')}>
        Source: Freepik
        </Text>
        <ScrollView >
        {words.map((prop, key) => {
          return (
            <View key={key}><Text style={styles.keyWords} >{key + 1} . {prop} - <Text style={styles.description}>{description[key]}</Text></Text></View>
          );
        })}

      </ScrollView>

      <View style={styles.footerContainer}>
                <TouchableOpacity style={styles.footerButton} onPress={() => setModalVisible(true)}>
                    <Text style={styles.buttonText}>Today</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.footerButton} onPress={handleExplore}>
                    <Text style={styles.buttonText}>Explore</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.footerHomeButton} onPress={handleDashboard}>
                    <Image style={styles.buttonImg} 
                    source={{uri:
                    'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHgAAAB4CAMAAAAOusbgAAAAZlBMVEX///8AAAATExNgYGCgoKDf39+UlJTn5+fs7Oz5+fnQ0NCoqKj09PSYmJji4uJcXFzJycmysrKKioplZWU2NjYLCwtAQEBqampKSkqCgoIiIiJWVla5ubkrKyswMDBRUVF3d3caGhrpcg/PAAADeUlEQVRoge2a7baqIBCGozLRzCz7jsru/yaP7YYKZwbUcJ+zzuL9KTkP4ssMYKNRUFBQUNB/K6mOZXlUkmpL1MzQIvWGTWYCNEtw6140tfLEjTfvmJu42Zojrrj44RZG0G1zICMMHnvhzpth578DPuK4x18AJ0scVojlp8UGAccXiivE9cNiQ4CLLc01LDYAeMVhH3rNVf/gtY1b55KBwMnEzhViPwg4Prm4tcWkf3CBoymFr6W+wShbiXvNSO/o8sovGNvq8DOq8oAaZh7BskSRSt2Gm6rUFzjfoUBr22BccZbpBSYewChH+PX7eWIiLmRHKdmeeQBXKMjmzdM92BCs78DZGcXYf46EHnO8yvoOHOFHWUATeEq7bOEVXIxRBChB2esR99nzirVwdQRjW52KZ0v8McF2sAQobLm8ExivrXY5MIyJuoXeENO9D5hYW5UJMxJgsQRnse5giQdO+whPMFFBE7tSaA0mcoJ6tmS4LNQ6gMWIQtkJTGSr6NmSM6u9Lbx+ojJ1ABO20tZlnqgWYfiO4AyvrfRknfJcIaZwO5XF2oAjtggmhK0+VYHrCYu1ABNLdshW8c3OFeIGL4TIYs6tOb5HbxHSFqvMk/4t7r2yc7GtLlAEuYlCx5d4i7XmqaMMD+YZmhybCBwf19MlcWjxVMR2072JeGvCWmyT09zijn4KtrKlfyxdSrBddHEzxRdBa8EjZLlvjrnYVoec65FTED/Heb1pMeIllhnXoxaCQ5GM2AkYFouvXNcSshi5dWAt9nloQaR+na06vt63TnwWe1mMSP0p26P2gvj8RoQogpLtURdBuZJ4Mj4skBBLdrCVoxi5VYHFcKE8J0R0sJV0FiO3bpKzWDVCl8BWKXOS1k2XlLPYqLmKhV+2LEZuKdpiy8bh8hXGxrEV6iLYbEkzVeTms+nK5dr8dRJsL40dgjInDdiKOyjtq0vctNjUnMhgK2KP+KXGhWkxfbz93POMwVY9ipFbkKvSn2d614nHadVB5+4huPXsgbe40ydkkFuUevXC+0A/9FpXJ0plI1rDgi0K4AAO4AAeDjzLo4bymeseL+Apvse5Dg7gAA7gAA7gAA7gAA7gAP47YOcJdR/wvQXY+YWpD9j2tUsrHgKM/iZLyXXA1h08Jr83YclFOeF1Jj5PqrPlhnJB/hc6KCgoKOif1x/WoTaqSAaQ9gAAAABJRU5ErkJggg=='}}/>
                </TouchableOpacity>
                <TouchableOpacity style={styles.footerButton} onPress={() => setModalVisible(true)}>
                    <Text style={styles.buttonText}>Club</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.footerButton} onPress={() => setModalVisible(true)}>
                    <Text style={styles.buttonText}>Tools</Text>
                </TouchableOpacity>
            </View>
      </View>
      
    </View>
  )
}

export default RelatedWords

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

  inputContainer: {
    width: '100%',
    height:"85%",
    backgroundColor: 'white',
  },
  keyWords: {
    fontSize: 20,
    fontWeight: '600',
    marginLeft: "3%",
    color: "#7C2424",
    marginTop:"3%"
  },
  description: {
    fontSize: 20,
    fontWeight: '400',
    marginLeft: "3%",
    color: "#7C2424",
    marginTop:"3%"
  },

  imageLogo: {
    width:"100%",
    height: "40%",
    marginTop: 3,
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
  },

  // footer style
  footerContainer :{
    borderTopWidth: 2.5,
    borderTopColor: 'rgba(240, 134, 134, 1)',
    width: "100%",
    height:"15%",
    backgroundColor:'rgba(250, 250, 250, 0.8)',
    flexDirection: 'row',
    flexWrap: 'wrap',
    borderBottomRadius: 25
  },

  footerButton :{
      backgroundColor: 'rgba(240, 134, 134, 1)',
      width: '16%',
      padding: 10,
      borderRadius: 100,
      alignItems: 'center',
      marginLeft:'3%',
      marginTop:'2%'
      
  },
  footerHomeButton :{
      backgroundColor: '#FFFFFF',
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
  footerButtonText: {
      fontWeight: '700',
      fontSize: 10,
      marginTop:'30%'
  },  
})