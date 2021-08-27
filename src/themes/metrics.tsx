import { Dimensions, Platform } from 'react-native'

const { width, height } = Dimensions.get('window');

const Metrics = {
    WIDTH: width,
    HEIGHT: height
}

export default Metrics;