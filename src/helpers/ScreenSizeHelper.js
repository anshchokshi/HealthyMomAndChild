import { 
    Dimensions, 
    PixelRatio 
} from "react-native";

const { width: currWidth, height: currHeight } = Dimensions.get('window');

// screen size of iphone13
const bWidth = 390;
const bHeight = 844;

//convert the fited size for iphone13 to fit other size of phone 
export function convertWidth(value){
    return PixelRatio.roundToNearestPixel(value * (currWidth / bWidth));
}
export function convertHeight(value){
    return PixelRatio.roundToNearestPixel(value * (currHeight / bHeight));
}

// get the size of certain percentage of the screen
export function percentageWidth(percentage){
    return PixelRatio.roundToNearestPixel(percentage *currWidth);
}
export function percentageHeight(percentage){
    return PixelRatio.roundToNearestPixel(percentage *currHeight);
}