import {
  percentageWidth, 
  percentageHeight, 
  convertHeight, 
  convertWidth} from './ScreenSizeHelper'
import color from './Color'
export default {
    wavePatten:"M0,96L48,112C96,128,192,160,288,186.7C384,213,480,235,576,213.3C672,192,768,128,864,128C960,128,1056,192,1152,208C1248,224,1344,192,1392,176L1440,160L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z",
    buttonNext:{
        color: color.mainPink,
    },
    headerText: {
        fontSize: 30,
        fontWeight: 'bold',
        color: color.white,
        textAlign: 'center',
      },
      headerContainer:{
        width: percentageWidth(1),
        height: percentageHeight(0.2),
        justifyContent: 'center',
        alignItem:'center',
        flex: 0.25,
        backgroundColor: color.mainPink,
      },
      svgStyle:{
        height:"60%",
        width:"100%",
        viewBox:"0 0 1440 320",
      },
      rowContainer: {
        width:percentageWidth(0.8),
        justifyContent: 'space-evenly',
        alignItems: 'center',
        flexDirection:"row",
        margin: convertHeight(10),
      },
      inputContainer: {
        flex:0.85,
        width: percentageWidth(1),
        alignItems: 'center',
        backgroundColor: color.white,
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
      },
      textContainer:{
        flex:0.2,
        margin:1,
        width:percentageWidth(0.8),
        justifyContent: 'center',
        // alignItems: 'center',
      },
      buttonDark:{
        backgroundColor: color.mainPink,
        padding: 15,
        borderRadius: 10,
        alignItems: 'center',
        margin: 10,
      },
      buttonLight:{
        backgroundColor: color.lightPink,
        padding: 15,
        borderRadius: 10,
        alignItems: 'center',
        margin: 10,
      },
      buttonDarkText:{
        fontSize: 14,
    },
    buttonLightText:{
        fontSize: 14,
    },
    text:{
      fontSize:20,
      margin: 5,
    },
    input:{
      backgroundColor: color.lightPink,
      borderBottomColor: color.mainPink,
      borderBottomWidth: 1,
      width: percentageWidth(0.7),
      fontSize:20,      
    },
    bottom:{
      position: 'absolute', 
      bottom: convertHeight(30),
      justifyContent: 'space-between',

    }
}
