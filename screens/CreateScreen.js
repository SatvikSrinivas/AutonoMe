import { Text, View, Dimensions } from 'react-native';
import ScreenWrapper from '../components/screenWrapper';
import { BackButton } from '../components/backButton';
import { screenIsShort } from '../components/device';

export function CreateScreen() {

    const { width, height } = Dimensions.get('window');
    var marg = 0.025 * height, margY = 1.25 * marg, margLeft = 1.75 * marg, slightOffset = 0.5 * marg;
    if (screenIsShort()) {
        margY = 0.85 * marg;
        margLeft = 2 * marg;
        slightOffset *= -1;
    }

    return (
        <ScreenWrapper>
            <View style={{ marginTop: slightOffset }} className="flex-row">
                <BackButton />
                <Text style={{ marginBottom: marg, marginTop: margY, marginLeft: margLeft, textAlign: 'center' }} className="font-bold text-3xl">Create Content</Text>
            </View>
            <View style={{
                justifyContent: 'center',
                alignItems: 'center',
                width: width,
                height: 0.725 * height,
                backgroundColor: '#FFFFFF'
            }}>
                <Text className="text-center"> -- Create Stuff Goes Here -- </Text>
            </View>
        </ScreenWrapper>
    );
}
