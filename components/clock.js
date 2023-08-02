import { Dimensions, TouchableOpacity, View, Image, Text } from 'react-native';
import { screenIsShort } from './device';
import { auth } from '../config/firebase';
import { getDoc, doc } from 'firebase/firestore';
import { startTimeRef } from '../config/firebase';
import { showTime } from './showMessage';

export function Clock() {

    const { width } = Dimensions.get('window')
    var clockDim = 0.125 * width, margTop = 0.5 * clockDim, margRight = 0.5 * clockDim;

    if (screenIsShort()) {
        margTop = 0.25 * clockDim;
        margRight = 0.3 * clockDim;
    }

    displayTime = async () => {
        var startTimeInSeconds = (await getDoc(doc(startTimeRef, auth.currentUser.uid))).data().startTime.seconds,
            time = (getTimeFormatted((new Date().getTime() / 1000) - startTimeInSeconds));
        showTime(time);
    }

    function getTimeFormatted(seconds) {
        min = Math.floor(seconds / 60), sec = Math.round(seconds - min * 60);
        addZero = "";
        if (sec == 60) {
            min++;
            sec = 0;
        }
        if (sec < 10)
            addZero = "0";
        return "" + min + " min : " + addZero + sec + " sec";
    }

    return (
        <View style={{ position: 'absolute', top: 0, right: 0 }}>
            <TouchableOpacity onPress={displayTime}>
                <Image style={{ marginTop: margTop, marginRight: margRight, width: clockDim, height: clockDim }} source={require('../assets/icons/clock.png')} />
            </TouchableOpacity>
        </View>
    );
}
