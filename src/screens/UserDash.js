import React, { useEffect, useState, useContext} from 'react';
import { Button, StyleSheet, Text, TouchableOpacity, View, Modal, Pressable } from 'react-native'
import { Image } from '@rneui/themed';
const UserDash = ({ navigation }) => {

    const handleBabyDev = () => {
        navigation.navigate("Fetal Screen")
    }

    const handleWeightBP = () => {navigation.navigate("Summary")}

    const handleAppointments = () => {navigation.navigate("Appointment")}
    const handlerelatedWords = () => {navigation.navigate("related words screen")}
    const [modalVisible, setModalVisible] = useState(false);

    return(
        <View style={styles.container}>
            <View style={styles.headerContainer}> 
                <Text style={styles.textMargin}>Your Dashboard</Text>
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
      headerContainer :{
        width: "100%",
        height: "30%",
        backgroundColor: "#F08686",
      },
      dashContainer :{
          position: "absolute",
          marginTop: "20%",
          marginLeft: "3%",
          marginRight: "3%",
          width: "95%",
          height: "80%",
          backgroundColor: '#ffffff',
          borderRadius: "25px"
      },
      textMargin :{
          marginTop: "5%",
          marginLeft: "3%",
          fontSize: "40px",
          color: "#ffffff",
          fontWeight:"bold"
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
        //   backgroundColor: "#000000",
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
        // backgroundColor: "#000000",
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