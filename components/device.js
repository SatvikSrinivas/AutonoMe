
import { Dimensions } from "react-native"

export function screenIsShort() {
    const { height } = Dimensions.get('window');
    return height < 700; // NOTE: iPhone SE has a height of 667
}