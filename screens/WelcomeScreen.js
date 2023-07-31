import { Dimensions, View, Text, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export function WelcomeScreen() {
  // NOTE: Since the logo is 640x640 the width and height can be set to be the same without distorting the logo
  const logoScale = 0.525,
    logoDim = logoScale * Dimensions.get('screen').height;

  const navigation = useNavigation();

  return (
    <View className="flex justify-center items-center h-screen bg-slate-100">
      <Text className="font-extrabold text-6xl text-center">AutonoMe</Text>
      <Image
        style={{
          width: logoDim,
          height: logoDim,
        }}
        source={require('../assets/autonome_nobackground.png')}
      />
      <View className="flex justify-center items-center">
        <TouchableOpacity onPress={() => navigation.navigate('Login')} className="my-2 rounded-full p-5 shadow-sm bg-green-400">
          <Text className="text-center text-xl font-bold block w-screen">
            Login
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('SignUp')} className="my-2 rounded-full p-5 shadow-sm bg-black">
          <Text className="text-white text-center text-xl font-bold block w-screen">
            Sign Up
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
