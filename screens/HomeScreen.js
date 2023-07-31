import { Dimensions, Text, View, TouchableOpacity, Image } from 'react-native';
import ScreenWrapper from '../components/screenWrapper';
import { colors } from '../theme';
import { auth } from '../config/firebase';
import { signOut } from 'firebase/auth';
import { showErrorMessage } from '../components/showErrorMessage';
import { useNavigation } from '@react-navigation/native';

export function HomeScreen() {

    const handleLogOut = async () => {
        try {
            await signOut(auth);
        } catch (err) {
            showErrorMessage(err);
        }
    }

    const { width, height } = Dimensions.get('window'), logoDim = 0.1725 * width, sep = (width - 5 * logoDim) / 6;
    const navigation = useNavigation();

    return (
        <View style={{
            alignItems: 'center',
        }}>
            <ScreenWrapper>
                <View className="flex-row justify-between items-center p-4">
                    <Text className={`${colors.heading} font-bold text-3xl shadow-sm`}>AutonoMe</Text>
                    <TouchableOpacity onPress={handleLogOut} className="p-2 px-3 bg-white border-gray-200 rounded-full">
                        <Text className="font-bold">Log Out</Text>
                    </TouchableOpacity>
                </View>
                <View style={{
                    justifyContent: 'center',
                    alignItems: 'center',
                    width: width,
                    height: 0.725 * height,
                    backgroundColor: '#FFFFFF'
                }}>
                    <Text className="text-center"> -- Media Feed Goes Here -- </Text>
                </View>
                <View style={{ marginBottom: sep }} className="pt-4 flex-1 flex-row justify-center items-center">
                    <TouchableOpacity onPress={() => navigation.navigate('Settings')}>
                        <View style={{ width: logoDim, height: logoDim }} className="items-center justify-center bg-red-400 rounded-full">
                            <Image className="h-10 w-10" source={require('../assets/icons/settings-icon.png')} />
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate('Search')}>
                        <View style={{ marginLeft: sep, width: logoDim, height: logoDim }} className="items-center justify-center bg-green-400 rounded-full">
                            <Image className="h-8 w-8" source={require('../assets/icons/search-icon.png')} />
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
                        <View style={{ marginLeft: sep, width: logoDim, height: logoDim }} className="items-center justify-center bg-sky-400 rounded-full">
                            <Image className="h-10 w-10" source={require('../assets/icons/profile-icon.png')} />
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate('Create')}>
                        <View style={{ marginLeft: sep, width: logoDim, height: logoDim }} className="items-center justify-center bg-orange-400 rounded-full">
                            <Image className="h-12 w-12" source={require('../assets/icons/create-post-icon.png')} />
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate('Track')}>
                        <View style={{ marginLeft: sep, width: logoDim, height: logoDim }} className="items-center justify-center bg-yellow-400 rounded-full">
                            <Image className="h-10 w-10" source={require('../assets/icons/track-usage-icon.png')} />
                        </View>
                    </TouchableOpacity>
                </View>
            </ScreenWrapper >
        </View>
    );
}