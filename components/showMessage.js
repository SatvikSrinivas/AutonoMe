import Snackbar from "react-native-snackbar";
import { colors } from "../theme";

export function showErrorMessage(err) {
    var message = (typeof err === ("string")) ? err : err.message
    Snackbar.show({
        text: message,
        backgroundColor: 'red'
    });
}

export function showTime(time) {
    Snackbar.show({
        text: time,
        backgroundColor: colors.entertainment,
    });
}