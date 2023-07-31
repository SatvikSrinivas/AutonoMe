
import { TouchableOpacity, Dimensions, Image, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';


export function BackButton() {

    const logoScale = 0.05, dim = logoScale * Dimensions.get('screen').height, marg = 0.5 * dim;
    const navigation = useNavigation();

    return (
        <View>
            <TouchableOpacity onPress={() => navigation.goBack()}>
                <Image
                    style={{
                        marginTop: marg,
                        marginLeft: marg,
                        width: dim,
                        height: dim,
                    }}
                    source={require('../assets/icons/back-button.png')} />
            </TouchableOpacity>
        </View>
    );
}
