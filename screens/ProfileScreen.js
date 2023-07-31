
import { Text, View, Dimensions, TouchableOpacity } from 'react-native';
import { useState } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { auth, startTimeRef } from '../config/firebase';
import { signOut } from 'firebase/auth';
import { showErrorMessage } from '../components/showErrorMessage';
import ScreenWrapper from '../components/screenWrapper';
import { BackButton } from '../components/backButton';
import { colors } from '../theme';
import { screenIsShort } from '../components/device';

export function ProfileScreen() {

    const [username, setUsername] = useState("UNKNOWN");
    onAuthStateChanged(auth, u => {
        if (u) {
            setUsername(u.email);
        } else {
            setUsername("UNKNOWN");
        }
    })

    const handleLogOut = async () => {
        try {
            await signOut(auth);
        } catch (err) {
            showErrorMessage(err);
        }
    }

    const { width, height } = Dimensions.get('window');
    var marg = 0.025 * height, margY = 1.25 * marg, margLeft = 1.5 * marg, slightOffset = 0.5 * marg;
    if (screenIsShort()) {
        margY = 0.85 * marg;
        margLeft = 2 * marg;
        slightOffset *= -1;
    }

    return (
        <ScreenWrapper>
            <View style={{ marginTop: slightOffset }} className="flex-row">
                <BackButton />
                <Text style={{ marginBottom: marg, marginTop: margY, marginLeft: margLeft, textAlign: 'center' }} className="font-bold text-3xl">{username}</Text>
            </View>
            <View style={{
                justifyContent: 'center',
                alignItems: 'center',
                width: width,
                height: 0.725 * height,
                backgroundColor: '#FFFFFF'
            }}>
                <Text className="text-center"> -- Profile Info Goes Here -- </Text>
            </View>
            <TouchableOpacity style={{ marginHorizontal: 2 * marg, marginVertical: margY, backgroundColor: colors.saveChanges }} onPress={handleLogOut} className="p-2 px-3 border-gray-200 rounded-full">
                <Text className="font-bold text-center text-lg">Log Out</Text>
            </TouchableOpacity>
        </ScreenWrapper>
    );
}
