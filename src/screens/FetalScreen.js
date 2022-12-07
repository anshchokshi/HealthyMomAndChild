import { useNavigation } from '@react-navigation/core'
import React, { useEffect, useState, useContext, useCallback } from 'react'
import { UserContext } from '../context/UserContext'
import { TouchableOpacity, StyleSheet, Text, ImageBackground, View, Image, ScrollView, Modal, Pressable } from 'react-native'
import RenderHtml from 'react-native-render-html';
import { 
	getFetalGrowthMeasurements, 
	getFetalMeasurementString,
	getFetalGrowthDescription, 
	getFetalGrowthImage 
} from '../db/fetalGrowth'
import { getWeeksDiff } from '../helpers/Date'
import { useWindowDimensions } from 'react-native';
import { useRoute } from '@react-navigation/core';

const FetalScreen = () => {
  const route = useRoute();
  const weekNumber = route.params.weekNumber;

  const [measurements, setMeasurements] = useState(null)
  const navigation = useNavigation()
  const [modalVisible, setModalVisible] = useState(false);
  const { userProfile } = useContext(UserContext)
	const [fetalDevImage, setFetalDevImage] = useState(null)
	const [fetalDevDescription, setFetalDevDescription] = useState(null)
	const { width } = useWindowDimensions();
    

  
  useEffect(() => {
    if (weekNumber == null) { return }
    if (weekNumber > 10) {
      (async () => {
        const measurements = await getFetalGrowthMeasurements(weekNumber)
        setMeasurements(measurements)
      })();
    }
    (async () => {
      const url = await getFetalGrowthImage(weekNumber)
      setFetalDevImage({ uri: url, width: 115, height: 175 })
    })();
    (async () => {
      const developmentDescription = await getFetalGrowthDescription(weekNumber)
      setFetalDevDescription(developmentDescription)
    })();
  }, [])

    const handleDashboard = () => {
        navigation.navigate("Dashboard")
    }

	const getFetalGrowthMeasurementElements = useCallback(() => {
		if (measurements != null) {
			const { lengthIn, lengthCm, weightOz, weightPounds, weightGrams } = measurements
			const headerElement = <Text style={styles.sizeInfoText}>Your baby size:</Text>
			const followingElement = (() => {
				const imperial = true // take this from userprofile in future
				if (imperial) {
					if (weekNumber <= 21) {
						return(<Text style={styles.sizeInfoText}>{lengthIn} inches and {weightOz} ounces</Text>)
					} else {
						return(<Text style={styles.sizeInfoText}>{lengthIn} inches and {weightPounds} pounds</Text>)
					}
				} else {
					return(<Text style={styles.sizeInfoText}>{lengthCm.toFixed(2)} cm and {weightGrams.toFixed(2)} grams</Text>)
				}
			})()
			return (<>{headerElement}{followingElement}</>)
		} else {
			return(<>
				<Text style={styles.sizeInfoText}>Your baby is an embryo and is</Text>
				<Text style={styles.sizeInfoText}>{`${getFetalMeasurementString(weekNumber)}.`}</Text>
			</>)
		}
	}, [measurements])

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
                    <Text style={styles.headerText}>Baby development on week {`${weekNumber}`}</Text>
                    </ImageBackground>
            </View>
            <ScrollView style={styles.container}>
            
                <View style={styles.sizeInfoContainer}>
					{getFetalGrowthMeasurementElements()}
					{/* The below two elements can be re-placed to outside this View
					On Android, it just wasn't showing up when it was outside this View */}
					<Image style={styles.fetalImage} source={fetalDevImage}></Image>
          {fetalDevDescription != null &&
            <RenderHtml
              contentWidth={width}
              source={{ html: fetalDevDescription }}
              tagsStyles={descriptionTagsStyles}
            />
          }
					
                </View>

            </ScrollView>

            {/* <View style={styles.footerContainer}>
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
            </View> */}
            <View style={styles.footerContainer}>
                <TouchableOpacity style={styles.footerButton} onPress={() => setModalVisible(true)}>
                    <Text style={styles.buttonText}>Today</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.footerButton} onPress={() => setModalVisible(true)}>
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
    )
}

export default FetalScreen

const descriptionTagsStyles = {
	p : {
		color: "black",
    fontSize: 16,
    fontWeight:'500', 
    textAlign: 'justify',
    marginLeft: '3%',
    marginRight: '4%'
	},
  h4: {
		color: "black",
    fontSize: 17,
    fontWeight:'700', 
    textAlign: 'justify',
    marginLeft: '3%',
	},
	li: {
		color: "black",
    fontSize: 16,
    fontWeight:'500', 
    textAlign: 'justify',
    marginLeft: '3%',
    marginRight: '3%'
	}
};

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

  fetalImage: {
    marginTop:"2%",
    marginLeft:"33%"
  },

  sizeInfoContainer: {
    width: "90%",
    height:"100%",
    backgroundColor:'#F79D9D',
    alignSelf:'center',
    marginTop:'8%',
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
    backgroundColor:'rgba(250, 250, 250, 0.8)',
    flexDirection: 'row',
    flexWrap: 'wrap',
    borderRadius: 25  
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
  // footer style
  
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
  // buttonImg: {
  //     height:40,
  //     width:40
  // },
  footerButtonText: {
      fontWeight: '700',
      fontSize: 10,
      marginTop:'30%'
  },  
})