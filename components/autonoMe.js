import { Dimensions, TouchableOpacity, View, Image } from 'react-native';
import { screenIsShort } from './device';
import { colors } from '../theme';

export function AutonoMe() {

    const { width } = Dimensions.get('window')
    var logoDim = 0.125 * width, margTop = 0.5 * logoDim, margLeft = 0.5 * logoDim;

    if (screenIsShort()) {
        margTop = 0.25 * logoDim;
        margLeft = 0.3 * logoDim;
    }

    return (
        <View style={{ position: 'absolute', top: 0, left: 0 }}>
            <Image className="rounded-lg" style={{ backgroundColor: '#FFFFFF', marginTop: margTop, marginLeft: margLeft, width: logoDim, height: logoDim }} source={require('../assets/autonome_nobackground.png')} />
        </View>
    );
}
