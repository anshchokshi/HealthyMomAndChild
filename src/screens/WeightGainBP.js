import { useNavigation } from '@react-navigation/core';
import React, { useEffect, useState, useContext} from 'react';

import { Button, StyleSheet, Text, TouchableOpacity, View, TextInput,
     TouchableWithoutFeedback, SafeAreaView, Keyboard, Modal, Pressable } from 'react-native'
import { firebase } from '../firebase'
import { Header } from '@rneui/themed'
import {LinearGradient} from 'expo-linear-gradient';
import { Image, Switch } from '@rneui/themed';
import { UserContext } from "../context/UserContext";
import { CalculateDueDate } from '../helpers/CalculateDueDate';

// import { async } from 'node-stream-zip';

const WeightGainBP = () => {
    
    const { userProfile } = useContext(UserContext)

    const [toggle, setToggle] = useState(false);
    const [units, setUnit] = useState('Lb')
    const [LMP, setLMP] = useState();
    const [currWeight, setcurrWeight] = useState(0)

    const [BMI, setBMI] = useState();
    const [month, setMonth] = useState();
    const [year, setYear] = useState();
    const [day, setDay] = useState();

    const navigation = useNavigation()
    const handleDashboard = () => {
        navigation.navigate("Dashboard")
    }

  const [modalVisible, setModalVisible] = useState(false);
    useEffect(() => {
        
          //const profile = const lmpString = userProfile?.pregnantProfile?.LastMenstrualPeriod
          //setUserProfile(profile)
          const lmp = userProfile?.pregnantProfile?.LastMenstrualPeriod
          const h = userProfile?.pregnantProfile?.Height
          const w = userProfile?.pregnantProfile?.InitialWeight
        if (lmp != null) {
            const check = new Date (lmp)
            const dd = CalculateDueDate((check.getMonth()+1), check.getDate(), check.getFullYear())
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

    const handleTextInput = (text) => {
        setcurrWeight(text)
        console.log(currWeight)
    }

    const handleSubmit = () => {
        // Send the current weight to backend
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
                        <Text
                            style={styles.secondBlockHeaderText}
                        >
                            What is your current weight (in {units})?
                        </Text>
                        <View style={styles.rowBlock}>
                            <TextInput
                                style={styles.textBoxStyle}
                                placeholder="Enter current weight"
                                value={currWeight}
                                keyboardType="number-pad"
                                // keyboardAppearance="light"
                                onChangeText={handleTextInput}
                                defaultValue={currWeight}
                                maxLength={6}
                            />
                        </View>
                        <TouchableOpacity
                            style={styles.button}
                            onPress={handleSubmit}
                        >
                            <Text style={styles.buttonText}>Submit</Text>
                        </TouchableOpacity>
                        {/* <Text style={styles.secondBlockHeaderText}>
                            Your average weight gain since beginning of pregnancy {units}
                        </Text> */}
                        <Text style={styles.secondBlockHeaderText}>
                            Your current weight is {units}
                        </Text>
                        <Text>Average normal weight gain since beginning of pregnancy {units}</Text>
                    </View>
                </View>
            </View>
            {/* / Footer */}
            <View style={styles.footerContainerTransparent}>
                <TouchableOpacity style={styles.footerButton} onPress={() => setModalVisible(true)}>
                    <Text style={styles.footerButtonText}>Today</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.footerButton} onPress={() => setModalVisible(true)}>
                    <Text style={styles.footerButtonText}>Explore</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.footerHomeButton} onPress={handleDashboard}>
                    <Image style={styles.buttonImg} 
                    source={{uri:
                    'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHgAAAB4CAMAAAAOusbgAAAAZlBMVEX///8AAAATExNgYGCgoKDf39+UlJTn5+fs7Oz5+fnQ0NCoqKj09PSYmJji4uJcXFzJycmysrKKioplZWU2NjYLCwtAQEBqampKSkqCgoIiIiJWVla5ubkrKyswMDBRUVF3d3caGhrpcg/PAAADeUlEQVRoge2a7baqIBCGozLRzCz7jsru/yaP7YYKZwbUcJ+zzuL9KTkP4ssMYKNRUFBQUNB/K6mOZXlUkmpL1MzQIvWGTWYCNEtw6140tfLEjTfvmJu42Zojrrj44RZG0G1zICMMHnvhzpth578DPuK4x18AJ0scVojlp8UGAccXiivE9cNiQ4CLLc01LDYAeMVhH3rNVf/gtY1b55KBwMnEzhViPwg4Prm4tcWkf3CBoymFr6W+wShbiXvNSO/o8sovGNvq8DOq8oAaZh7BskSRSt2Gm6rUFzjfoUBr22BccZbpBSYewChH+PX7eWIiLmRHKdmeeQBXKMjmzdM92BCs78DZGcXYf46EHnO8yvoOHOFHWUATeEq7bOEVXIxRBChB2esR99nzirVwdQRjW52KZ0v8McF2sAQobLm8ExivrXY5MIyJuoXeENO9D5hYW5UJMxJgsQRnse5giQdO+whPMFFBE7tSaA0mcoJ6tmS4LNQ6gMWIQtkJTGSr6NmSM6u9Lbx+ojJ1ABO20tZlnqgWYfiO4AyvrfRknfJcIaZwO5XF2oAjtggmhK0+VYHrCYu1ABNLdshW8c3OFeIGL4TIYs6tOb5HbxHSFqvMk/4t7r2yc7GtLlAEuYlCx5d4i7XmqaMMD+YZmhybCBwf19MlcWjxVMR2072JeGvCWmyT09zijn4KtrKlfyxdSrBddHEzxRdBa8EjZLlvjrnYVoec65FTED/Heb1pMeIllhnXoxaCQ5GM2AkYFouvXNcSshi5dWAt9nloQaR+na06vt63TnwWe1mMSP0p26P2gvj8RoQogpLtURdBuZJ4Mj4skBBLdrCVoxi5VYHFcKE8J0R0sJV0FiO3bpKzWDVCl8BWKXOS1k2XlLPYqLmKhV+2LEZuKdpiy8bh8hXGxrEV6iLYbEkzVeTms+nK5dr8dRJsL40dgjInDdiKOyjtq0vctNjUnMhgK2KP+KXGhWkxfbz93POMwVY9ipFbkKvSn2d614nHadVB5+4huPXsgbe40ydkkFuUevXC+0A/9FpXJ0plI1rDgi0K4AAO4AAeDjzLo4bymeseL+Apvse5Dg7gAA7gAA7gAA7gAA7gAP47YOcJdR/wvQXY+YWpD9j2tUsrHgKM/iZLyXXA1h08Jr83YclFOeF1Jj5PqrPlhnJB/hc6KCgoKOif1x/WoTaqSAaQ9gAAAABJRU5ErkJggg=='}}/>
                </TouchableOpacity>
                <TouchableOpacity style={styles.footerButton} onPress={() => setModalVisible(true)}>
                    <Text style={styles.footerButtonText}>Club</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.footerButton} onPress={() => setModalVisible(true)}>
                    <Text style={styles.footerButtonText}>Tools</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    wi: {
        width: '100%',
        height: '100%'
    },
    button: {
        marginTop: '3%',
        marginBottom: '2%',
        backgroundColor: '#F08686',
        height: '12.5%',
        width: "20%",
        borderRadius: 25,
    },
    buttonText: {
        textAlign: 'center',
        marginTop: '7%'
    },
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
        fontSize:14
    },
    unitTextRight: {
        marginTop: "2%",
        marginLeft: "2%",
        textAlign:"left",
        fontSize:14
    },
    leftAlignHeading: {
        marginLeft: "2%",
        marginTop: "1%",
        textAlign: "left",
        fontWeight: "bold",
        fontSize: 25,
    },
    firstBlockText: {
        marginTop: "2%",
        marginLeft: "2%",
        textAlign:"left",
        // fontWeight:"bold",
        fontSize:14
    },
    textMargin :{
        marginTop: "15%",
        marginLeft: '15%',
        fontSize: 25,
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
        marginTop: "30%",
        marginLeft: "3%",
        marginRight: "3%",
        width: "95%",
        height: "80%",
        backgroundColor: '#ffffff',
        borderRadius: 25
    },
    firstBlock :{
        height: "25%",
        width: "100%",
        borderRadius: 25,
        backgroundColor: "#f5f5f5"
    },
    secondBlock :{
        marginTop: "-10%",
        height: "80%",
        width: "100%",
        borderRadius: 25,
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
    textBoxStyle: {
        width: '50%',
        borderBottomWidth: 1,
        padding: 10,
        backgroundColor: 'rgba(250, 250, 250, 0.35)',
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10
    },
    secondBlockUnitText: {
        marginLeft: '2%'
    },
    secondBlockHeaderText: {
        fontWeight: 'bold',
        fontSize: 17.5,
        marginBottom: '2%',
        marginTop: '2%'
    },
    // footerContainer :{
    //     width: "100%",
    //     height:"10%",
    //     backgroundColor:'#F08686',
    //     flexDirection: 'row',
    //     flexWrap: 'wrap',
    //     marginTop: '130%'
        
    // }, 
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
    // footer style
    footerContainerTransparent :{
        width: "100%",
        height:"10%",
        backgroundColor:'rgba(250, 250, 250, 0.8)',
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginTop: '130%',
        borderRadius: 25  
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

export default WeightGainBP
