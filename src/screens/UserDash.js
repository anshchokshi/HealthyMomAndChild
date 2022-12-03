import React, { useEffect, useState, useContext} from 'react';
import { Button, StyleSheet, Text, TouchableOpacity, View, Modal, Pressable } from 'react-native'
import { firebase } from '../firebase'
import { Header } from '@rneui/themed'
import {LinearGradient} from 'expo-linear-gradient';
import { Image } from '@rneui/themed';
import { UserContext } from '../context/UserContext'
import { getWeeksDiff } from '../helpers/Date'

const UserDash = ({ navigation }) => {
    const auth = firebase.auth();
    const { userProfile } = useContext(UserContext)
    const handleBabyDev = () => {
            const lmpString = userProfile?.pregnantProfile?.LastMenstrualPeriod
            if (lmpString != null) {
                const lmp = new Date(lmpString)
                const weekNumber = getWeeksDiff(lmp, new Date())
                navigation.navigate("Fetal Screen", {weekNumber: Math.min(weekNumber, 42)})
            }
    }
    const handleSignOut = () => {
        auth.signOut().then(() => {
            navigation.replace("Login")
          })
          .catch(error => alert(error.message))
      }

    const handleWeightBP = () => {navigation.navigate("Summary")}

    const handleAppointments = () => {navigation.navigate("Appointment")}
    const handlerelatedWords = () => {navigation.navigate("related words screen")}
    const [modalVisible, setModalVisible] = useState(false);

    return(
        <View style={styles.container}>
            <View style={styles.headerContainer}>
                <LinearGradient
                    colors= {['#fa7878','#F08686', 'white']}
                    style= {styles.gradientHeaderStyle}
                    locations= {[0.1, 0.2, 1.0]}
                >
                    <Text style={styles.textMargin}>Your Dashboard</Text>
                </LinearGradient>
            </View>
            <View 
                style = {styles.dashContainer}>
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
                        <Pressable
                        style={styles.buttonClose}
                        onPress={handleSignOut}
                        >
                        <Text style={{fontSize:17}}>SignOut</Text>
                        </Pressable>
                    </View>
        
                </Modal>
                {/* <Text>MainPage</Text> */}
                <View style={styles.buttonCont}>
                    <TouchableOpacity style={styles.buttonLeft}
                        onPress={handleBabyDev}
                        testID="baby-development">
                        <Image source={require('../assets/BD.png')} style={styles.buttonImg} blurRadius={5}></Image>
                        <Text style={styles.buttonText}>Baby Development</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.buttonRight}
                        onPress={handleWeightBP}
                        testID="weight-gain">
                    <Image source={require('../assets/WBP.png')} style={styles.buttonImg} blurRadius={5}></Image>
                        <Text style={styles.buttonText}>Your Weight Gain and Blood Pressure</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.buttonCont}>
                    <TouchableOpacity style={styles.buttonLeft}
                        onPress={handleAppointments}
                        testID="appointments">
                        <Image source={require('../assets/APTS.png')} style={styles.buttonImg} blurRadius={5}></Image>
                        <Text style={styles.buttonText}>Your Appointments</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.buttonRight}
                    onPress={() => setModalVisible(true)}
                    >
                    <Image source={require('../assets/SA.png')} style={styles.buttonImg} blurRadius={5}></Image>
                        <Text style={styles.buttonText}>Surveys and Articles</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.buttonContCenter}>
                    <TouchableOpacity style={styles.buttonCenter}
                    onPress={handlerelatedWords}
                    testID="related-words">
                    <Image source={require('../assets/EMC.png')} style={styles.buttonImg} blurRadius={5}></Image>
                        <Text style={styles.buttonText}>Educational Medical Content</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // alignItems: 'center',
        backgroundColor:'#ffffff',
      },
      gradientHeaderStyle :{
        width: "100%",
        height: "100%",
        borderRadius: "25px"
      },
      headerContainer :{
        width: "100%",
        height: "100%",
        backgroundColor: "#F08686",
      },
      dashContainer :{
          position: "absolute",
          marginTop: "30%",
        //   marginLeft: "3%",
        //   marginRight: "3%",
          width: "100%",
          height: "80%",
          backgroundColor: 'rgba(250, 250, 250, 0.35)',
          borderRadius: "25px",
      },
      textMargin :{
          marginTop: "15%",
          marginLeft: "3%",
          fontSize: "40px",
          color: "#ffffff",
          fontWeight:"bold",
      },
      buttonCont: {
          width: "100%",
          height: "33%",
          marginBottom: "2%",
        //   position: "absolute",
          flexDirection: "row",
        //   backgroundColor: "#123343"
      },
      buttonLeft: {
          width: "40%",
          height: "100%",
          marginTop: "2%",
          marginBottom: "2%",
          marginLeft: "3%",
          marginRight: "3%",
          position: "relative",
          left: 0,
        //   backgroundColor: "rgba(250, 250, 250, 0.5)",
          borderRadius: "25%",
          flex: 1
      },
      buttonRight: {
        width: "40%",
        height: "100%",
        marginTop: "2%",
        marginBottom: "2%",
        // marginLeft: "3%",
        marginRight: "3%",
        // position: "relative",
        // backgroundColor: "rgba(250, 250, 250, 0.5)",
        // right: 0,
        borderRadius: "25%",
        flex: 1
    },
    buttonContCenter: {
        alignItems: "center",
        width: "100%",
        height: "33%",
        marginBottom: "2%"
      //   position: "absolute",
        // flexDirection: "row",
        // backgroundColor: "#123343"
    },
    buttonCenter: {
        width: "40%",
        height: "100%",
        marginTop: "2%",
        marginBottom: "2%",
        // marginLeft: "3%",
        // marginRight: "3%",
        // position: "relative",
        // backgroundColor: "#000000",
        // right: 0,
        borderRadius: "25%",
        flex: 1
    },
    buttonText: {
        color:"#000000",
        fontSize: "20px",
        fontWeight: 'bold',
        // textAlign: "left",
        marginTop: "25%",
        marginLeft: "5%",
        position: 'absolute',
        zIndex: 1
    },
    buttonTextWhite: {
        color:"#ffffff",
        fontSize: "20px",
        fontWeight: 'bold',
        // textAlign: "left",
        marginTop: "25%",
        marginLeft: "5%",
        position: 'absolute',
        zIndex: 1
    },
    buttonImg: {
        // resizeMode: 'contain',
        // flex: 2
        width: '100%',
        height: '100%',
        borderRadius: '25%',
        // flex: 1
        // position:'absolute'
    },
    abs: {
        // position: 'absolute'
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

export default UserDash