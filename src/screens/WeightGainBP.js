import { useNavigation } from '@react-navigation/core';
import React, { useEffect, useState, useContext} from 'react';
import { Button, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { firebase } from '../firebase'
import { Header } from '@rneui/themed'
import {LinearGradient} from 'react-native-linear-gradient';
import { Image, Switch } from '@rneui/themed';
import { UserContext, getUserProfile } from "../context/UserContext";
import { CalculateDueDate } from '../helpers/CalculateDueDate';
// import { async } from 'node-stream-zip';

const WeightGainBP = () => {
    
    const { userProfile } = useContext(UserContext)

    const [toggle, setToggle] = useState(false);
    const [units, setUnit] = useState('Lb')
    const auth = firebase.auth();
    const [LMP, setLMP] = useState();
    const [BMI, setBMI] = useState();
    const [month, setMonth] = useState();
    const [year, setYear] = useState();
    const [day, setDay] = useState();

    useEffect(() => {
        
          //const profile = const lmpString = userProfile?.pregnantProfile?.LastMenstrualPeriod
          //setUserProfile(profile)
          const lmp = userProfile?.pregnantProfile?.LastMenstrualPeriod
          const h = userProfile?.pregnantProfile?.Height
          const w = userProfile?.pregnantProfile?.InitialWeight
        if (lmp != null) {
            const check = new Date (lmp)
            const dd = CalculateDueDate(check.getMonth(), check.getDate(), check.getFullYear())
            setDay(dd.day)
            setMonth(dd.month)
            setYear(dd.year) 

		}
        else{
            console.log("user null")

        }
        if (h!= null & w!= null){
          const bmi = (Math.round((w/h/h)*10000 * 10) / 10)
          setBMI(bmi)
          setLMP(lmp)

        }
        else{
            console.log("user null")

        }
      }, [userProfile]);
  
    const handleToggle = () => {
        setToggle(!toggle);
    }

    useEffect(() => {
        if(toggle){
            setUnit('Kg') 

        }else{
            setUnit('Lb')
        }
    })

    return(
        <View style={styles.container}>
            <View style={styles.headerContainer}>
                <Image source={require('../assets/WBP.png')} style={styles.img} blurRadius={4}></Image>
                <Text style={styles.textMargin}>Your Weight Gain and BP</Text>
            </View>
            <View style={styles.dashContainer}>
                <View style={styles.firstBlock}>
                    <Text style={styles.leftAlignHeading}>Key Dates and Figures</Text>
                    <Text style={styles.firstBlockText}>Your last menstual period was on {LMP} </Text>
                    <Text style={styles.firstBlockText}>Your due date is {month}/{day}/{year}</Text>
                    <Text style={styles.firstBlockText}>Your initial BMI is {BMI} </Text>
                </View>
                <View style={styles.secondBlock}>
                    <Text style={styles.leftAlignHeading}>Weight Gain and BP</Text>
                    <View style={styles.rowBlock}>
                        <Text style={styles.unitTextLeft}>Lb</Text>
                        <Switch value={toggle} onValueChange={handleToggle} color={"#F08686"}></Switch>
                        <Text style={styles.unitTextRight}>Kg</Text>
                    </View>
                    <View style={styles.dataBlock}>
                        <Text>
                            Your average weight gain since beginning of pregnancy {units}
                        </Text>
                        <Text>Average normal weight gain since beginning of pregnancy {units}</Text>
                    </View>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:'#ffffff'
    },
    dataBlock: {
        marginTop : "2%", 
        marginLeft: "2%",
    },
    rowBlock: {
        marginTop: "1%",
        flexDirection: "row"
    },
    unitTextLeft: {
        marginTop: "2%",
        marginRight: "2%",
        marginLeft: "2%",
        textAlign:"left",
        fontSize:"14px"
    },
    unitTextRight: {
        marginTop: "2%",
        marginLeft: "2%",
        textAlign:"left",
        fontSize:"14px"
    },
    leftAlignHeading: {
        marginLeft: "2%",
        marginTop: "1%",
        textAlign: "left",
        fontWeight: "bold",
        fontSize: "25px",
    },
    firstBlockText: {
        marginTop: "2%",
        marginLeft: "2%",
        textAlign:"left",
        // fontWeight:"bold",
        fontSize:"14px"
    },
    textMargin :{
        marginTop: "5%",
        marginLeft: "3%",
        fontSize: "25px",
        color: "#ffffff",
        fontWeight:"bold",
        position: "absolute",
        zIndex: 1
    },
    headerContainer :{
        width: "100%",
        height: "30%",
        backgroundColor: "#FFFFFF",
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
    firstBlock :{
        height: "25%",
        width: "100%",
        borderRadius: "25%",
        backgroundColor: "#f5f5f5"
    },
    secondBlock :{
        marginTop: "1%",
        height: "80%",
        width: "100%",
        borderRadius: "25%",
        backgroundColor: "#ffd2d2"
    },
    img: {
        // resizeMode: 'contain',
        // flex: 2
        width: '100%',
        height: '100%',
        // borderRadius: '25%',
        // flex: 1
        // position:'absolute'
    },


})

export default WeightGainBP