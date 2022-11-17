import { useNavigation } from '@react-navigation/core'
import React, { useEffect, useState, useContext, useCallback } from 'react'
import { UserContext } from '../context/UserContext'
import { TouchableOpacity, StyleSheet, Text, ImageBackground, View, Image, ScrollView, Modal, Pressable } from 'react-native'
import { getFetalGrowthMeasurements, getFetalMeasurementString } from '../db/fetalGrowth'
import { getWeeksDiff } from '../helpers/Date'

const FetalScreen = () => {
	const [weekNumber, setWeekNumber] = useState(null)
    const [measurements, setMeasurements] = useState(null)
    const navigation = useNavigation()
    const [modalVisible, setModalVisible] = useState(false);
    const { userProfile } = useContext(UserContext)
    
	useEffect(() => {
		console.log(userProfile)
		const lmpString = userProfile?.pregnantProfile?.LastMenstrualPeriod
		if (lmpString != null) {
			const lmp = new Date(lmpString)
			const weekNumber = getWeeksDiff(lmp, new Date())
			setWeekNumber(Math.min(weekNumber, 42))
		}
	}, [userProfile])

    useEffect(() => {
		console.log(weekNumber)
        const fetchData = async () => {
			const measurements =  await getFetalGrowthMeasurements(weekNumber)
			setMeasurements(measurements)
        }
		if (weekNumber > 10) {
			fetchData()
		}
      }, [weekNumber])

    const handleDashboard = () => {
        navigation.navigate("Dashboard")
    }

	const getFetalGrowthMeasurementElements = useCallback(() => {
		if (measurements != null) {
			const imperial = true // take this from userprofile in future
			const headerElement = <Text style={styles.sizeInfoText}>Your baby size:</Text>
			const followingElement = (() => {
				if (imperial) {
					if (weekNumber <= 21) {
						return(<Text style={styles.sizeInfoText}>{measurements.lengthIn} inches and {measurements.weightOz} ounces</Text>)
					} else {
						return(<Text style={styles.sizeInfoText}>{measurements.lengthIn} inches and {measurements.weightPounds} pounds</Text>)
					}
				} else {
					return(<Text style={styles.sizeInfoText}>{measurements.lengthCm.toFixed(2)} cm and {measurements.weightGrams.toFixed(2)} grams</Text>)
				}
			})()
			return (<>{headerElement}{followingElement}</>)
		} else {
			return(<>
				<Text style={styles.sizeInfoText}>Your baby is an embryo and is</Text>
				<Text style={styles.sizeInfoText}>{`${getFetalMeasurementString(weekNumber)}.`}</Text>
			</>)
		}
	}, [weekNumber, measurements])

    return (
        <View>
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
                    <ImageBackground style={styles.imageLogo}
                            source={{uri: 'https://media.istockphoto.com/vectors/fetus-stage-illustration-vector-id628342574?s=612x612'}}>
                    <Text style={styles.headerText}>Baby development on week 11</Text>
                    </ImageBackground>
            </View>
            <ScrollView style={styles.container}>
            
                <View style={styles.sizeInfoContainer}>
					{getFetalGrowthMeasurementElements()}
                </View>
                <Text>Additional content ...</Text>

            </ScrollView>

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
    )
}

export default FetalScreen

const styles = StyleSheet.create({
  container: {
    height:'72%'
  },
  headerContainer :{
    width: "100%",
    height:"18%"

  },
  headerText: {
    color: "black",
    fontWeight: '700',
    fontSize: 32,
    textAlign:'center',
    marginTop:'15%'
  },

  imageLogo: {
    width:'100%',
    height:'100%',
  },

  sizeInfoContainer: {
    width: "80%",
    height:"90%",
    backgroundColor:'#F08686',
    alignSelf:'center',
    marginTop:'15%',
    borderRadius: 14,
  },

  sizeInfoText: {
    color: "black",
    fontWeight: '700',
    fontSize: 18,
    textAlign:'center', 
    marginTop:'10%'
  },

  footerContainer :{
    width: "100%",
    height:"10%",
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
    fontSize: 11,
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

})