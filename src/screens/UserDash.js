import { useNavigation } from '@react-navigation/core';
import React, { useEffect, useState, useContext} from 'react';
import { Button, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { firebase } from '../firebase'
import { Header } from '@rneui/themed'
import {LinearGradient} from 'react-native-linear-gradient';
import { Image } from '@rneui/themed';

const UserDash = () => {
    const navigation = useNavigation()

    const handleBabyDev = () => {
        navigation.navigate("Fetal Screen")
    }

    const handleWeightBP = () => {navigation.navigate("Summary")}

    const handleAppointments = () => {}

    return(
        <View style={styles.container}>
            <View style={styles.headerContainer}> 
                <Text style={styles.textMargin}>Your Dashboard</Text>
            </View>
            <View 
                style = {styles.dashContainer}>
                {/* <Text>MainPage</Text> */}
                <View style={styles.buttonCont}>
                    <TouchableOpacity style={styles.buttonLeft}
                        onPress={handleBabyDev}>
                        <Image source={require('../assets/BD.png')} style={styles.buttonImg} blurRadius={5}></Image>
                        <Text style={styles.buttonText}>Baby Development</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.buttonRight}
                        onPress={handleWeightBP}>
                    <Image source={require('../assets/WBP.png')} style={styles.buttonImg} blurRadius={5}></Image>
                        <Text style={styles.buttonText}>Your Weight Gain and Blood Pressure</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.buttonCont}>
                    <TouchableOpacity style={styles.buttonLeft}
                        onPress={handleAppointments}>
                        <Image source={require('../assets/APTS.png')} style={styles.buttonImg} blurRadius={5}></Image>
                        <Text style={styles.buttonText}>Your Appointments</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.buttonRight}>
                    <Image source={require('../assets/SA.png')} style={styles.buttonImg} blurRadius={5}></Image>
                        <Text style={styles.buttonText}>Surveys and Articles</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.buttonContCenter}>
                    <TouchableOpacity style={styles.buttonCenter}>
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
    }
    
})

export default UserDash