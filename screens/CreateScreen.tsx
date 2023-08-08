import { NavigationContainer } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { PermissionsScreen } from './Camera/PermissionsScreen';
import { MediaScreen } from './Camera/MediaScreen';
import { CameraScreen } from './Camera/CameraScreen';
import type { Routes } from './Camera/Routes';
import { Camera, CameraPermissionStatus } from 'react-native-vision-camera';

const Stack = createNativeStackNavigator<Routes>();

export function CreateScreen(): React.ReactElement | null {
  const [cameraPermission, setCameraPermission] = useState<CameraPermissionStatus>();
  const [microphonePermission, setMicrophonePermission] = useState<CameraPermissionStatus>();

  useEffect(() => {
    Camera.getCameraPermissionStatus().then(setCameraPermission);
    Camera.getMicrophonePermissionStatus().then(setMicrophonePermission);
  }, []);

  console.log(`Re-rendering Navigator. Camera: ${cameraPermission} | Microphone: ${microphonePermission}`);

  if (cameraPermission == null || microphonePermission == null) {
    // still loading
    return null;
  }

  const showPermissionsScreen = cameraPermission !== 'authorized' || microphonePermission === 'not-determined';
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
          statusBarStyle: 'dark',
          animationTypeForReplace: 'push',
        }}
        initialRouteName={showPermissionsScreen ? 'PermissionsScreen' : 'CameraScreen'}>
        <Stack.Screen name="PermissionsScreen" component={PermissionsScreen} />
        <Stack.Screen name="CameraScreen" component={CameraScreen} />
        <Stack.Screen
          name="MediaScreen"
          component={MediaScreen}
          options={{
            animation: 'none',
            presentation: 'transparentModal',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}






// import {
//   AppRegistry,
//   StyleSheet,
//   Text,
//   TouchableOpacity,
//   View,
//   Dimensions,
// } from 'react-native';
// import ScreenWrapper from '../components/screenWrapper';
// import {BackButton} from '../components/backButton';
// import {screenIsShort} from '../components/device';

// export function CreateScreen() {
//   const {width, height} = Dimensions.get('window');
//   var marg = 0.025 * height,
//     margY = 1.25 * marg,
//     margLeft = 1.75 * marg,
//     slightOffset = 0.5 * marg;
//   if (screenIsShort()) {
//     margY = 0.85 * marg;
//     margLeft = 2 * marg;
//     slightOffset *= -1;
//   }

//   return (
//     <ScreenWrapper>
//       <View>
//         {/* <BackButton /> */}

//       </View>
//     </ScreenWrapper>
//   );
// }
