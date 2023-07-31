import Snackbar from "react-native-snackbar";

export function showErrorMessage(err) {
    var message = (typeof err === ("string")) ? err : err.message
    Snackbar.show({
        text: message,
        backgroundColor: 'red',
    });
}