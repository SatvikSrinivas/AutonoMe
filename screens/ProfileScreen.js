
import { Text, View, Dimensions } from 'react-native';
import { useState } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../config/firebase';
import ScreenWrapper from '../components/screenWrapper';
import { BackButton } from '../components/backButton';

export function ProfileScreen() {

    const { width, height } = Dimensions.get('window'), marg = 0.025 * height;

    const [username, setUsername] = useState("UNKNOWN");
    onAuthStateChanged(auth, u => {
        if (u) {
            setUsername(u.email);
        } else {
            setUsername("UNKNOWN");
        }
    })

    return (
        <ScreenWrapper>
            <BackButton />
            <View>
                <Text style={{ textAlign: 'center', marginTop: marg }} className="font-bold text-4xl">{username}</Text>
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
        </ScreenWrapper>
    );
}
