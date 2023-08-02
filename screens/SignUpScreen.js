import React, { useState } from 'react';
import { Text, View, Image, TextInput, TouchableOpacity } from 'react-native';
import ScreenWrapper from '../components/screenWrapper';
import { colors } from '../theme';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../config/firebase';
import { Loading } from '../components/loading';
import { showErrorMessage } from '../components/showMessage';

export function SignUpScreen() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);

    const handleSignUp = async () => {
        if (email && password) {
            try {
                setLoading(true);
                await createUserWithEmailAndPassword(auth, email, password);
                setLoading(false);
            } catch (err) {
                setLoading(false);
                showErrorMessage(err);
            }
        } else showErrorMessage('All Fields Are Required');
    }

    return (
        <ScreenWrapper>
            <View className="flex justify-between h-full mx-4">
                <View>

                </View>
                <View>
                    <View className="relative">
                        <Text className={`${colors.heading} text-xl font-bold text-center`}>Sign Up</Text>
                    </View>

                    {/* <View className="flex-row justify-center my-3 mt-5 ">
                        <Image className="h-52 w-52" source={require('../assets/login.png')} />
                    </View> */}

                    <View className="space-y-1 mx-2">
                        <Text className={`${colors.heading} text-lg font-bold`}>Email:</Text>
                        <TextInput value={email} onChangeText={value => setEmail(value)} className={`${colors.heading} p-4 bg-white rounded-full mb-3`} />
                        <Text className={`${colors.heading} text-lg font-bold`}>Password: </Text>
                        <TextInput value={password} secureTextEntry onChangeText={value => setPassword(value)} className={`${colors.heading} p-4 bg-white rounded-full mb-3`} />
                    </View>
                </View>

                <View>
                    {
                        loading ? (
                            <Loading />
                        ) : (
                            <TouchableOpacity onPress={handleSignUp} style={{ backgroundColor: colors.button }} className="rounded-full p-3 shadow-sm">
                                <Text className="text-center text-xl font-bold">Sign Up</Text>
                            </TouchableOpacity>
                        )
                    }
                </View>

                <View>

                </View>
            </View>
        </ScreenWrapper>
    )

}

