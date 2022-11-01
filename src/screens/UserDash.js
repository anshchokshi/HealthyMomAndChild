import { useNavigation } from '@react-navigation/core';
import React, { useEffect, useState, useContext} from 'react';
import { Button, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { firebase } from '../firebase'
import { Header } from '@rneui/themed'
import {LinearGradient} from 'react-native-linear-gradient';


class UserDash extends React.Component {
    render(){
        return(
            <View style={styles.container}>
                <View style={styles.headerContainer}> 
                    <Text style={styles.textMargin}>Your Dashboard</Text>
                </View>
                <View 
                    style = {styles.dashContainer}>
                    <Text>MainPage</Text>
                </View>
            </View>
        )
    }
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
          color: "#ffffff"
      }
})

export default UserDash