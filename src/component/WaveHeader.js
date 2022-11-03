import React from 'react';
import { View ,Text} from 'react-native';
import Svg, { Path } from 'react-native-svg';
import color from '../helpers/Color'
import { convertHeight, convertWidth, percentageWidth,percentageHeight } from '../helpers/ScreenSizeHelper';
import surStyle from '../helpers/SurveyStyle'

const WaveHeader= (prop)=> (
    <View>
      <View 
      style={{ backgroundColor: color.mainPink, 
      height: percentageHeight(0.15),
      width: percentageWidth(1),
      justifyContent: 'center',
      alignItem:'center' }}>
        <Svg
          height="110%"
          width="100%"
          viewBox={"0 0 1440 "+percentageHeight(0.2).toString()}
          style={{ position: 'absolute', top: percentageHeight(0.07) }}
        >
          <Path
            fill={color.mainPink}
            d={surStyle.wavePatten}
          />
        </Svg>
        <Text style={[surStyle.headerText, { top: percentageHeight(0.05)}]} >{prop.text}</Text>

      </View>
    </View>
);
export default WaveHeader;