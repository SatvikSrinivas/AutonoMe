import { Text, View, Dimensions } from 'react-native';
import ScreenWrapper from '../components/screenWrapper';
import { BackButton } from '../components/backButton';

export function TrackScreen() {

    const { width, height } = Dimensions.get('window');

    return (
        <ScreenWrapper>
            <BackButton />
            <View>
                <Text style={{ textAlign: 'center' }} className="font-bold text-4xl">Track Your Usage</Text>
            </View>
            <View style={{
                justifyContent: 'center',
                alignItems: 'center',
                width: width,
                height: 0.725 * height,
                backgroundColor: '#FFFFFF'
            }}>
                <Text className="text-center"> -- Tracking Stuff Goes Here -- </Text>
            </View>
        </ScreenWrapper>
    );
}
