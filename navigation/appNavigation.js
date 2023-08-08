import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { WelcomeScreen } from '../screens/WelcomeScreen';
import { LoginScreen } from '../screens/LoginScreen';
import { SignUpScreen } from '../screens/SignUpScreen';
import { HomeScreen } from '../screens/HomeScreen';
import { SettingsScreen } from '../screens/SettingsScreen';
import { ProfileScreen } from '../screens/ProfileScreen';
import { SearchScreen } from '../screens/SearchScreen';
import { CreateScreen } from '../screens/CreateScreen';
import { TrackScreen } from '../screens/TrackScreen';
import { auth } from '../config/firebase';
import { onAuthStateChanged } from 'firebase/auth';
import { useState } from 'react';

const Stack = createNativeStackNavigator();

export function AppNavigation() {
  const [user, setUser] = useState(false);

  onAuthStateChanged(auth, u => {
    if (u) {
      setUser(true);
    } else {
      setUser(false);
    }
  })

  if (user) {
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen options={{ headerShown: false }} name="Home" component={HomeScreen} />
          <Stack.Screen options={{ headerShown: false }} name="Settings" component={SettingsScreen} />
          <Stack.Screen options={{ headerShown: false }} name="Profile" component={ProfileScreen} />
          <Stack.Screen options={{ headerShown: false }} name="Search" component={SearchScreen} />
          <Stack.Screen options={{ headerShown: false }} name="Create" component={CreateScreen} />
          <Stack.Screen options={{ headerShown: false }} name="Track" component={TrackScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  } else {
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Welcome">
          <Stack.Screen options={{ headerShown: false }} name="Welcome" component={WelcomeScreen} />
          <Stack.Screen options={{ headerShown: false, presentation: 'modal' }} name="Login" component={LoginScreen} />
          <Stack.Screen options={{ headerShown: false, presentation: 'modal' }} name="SignUp" component={SignUpScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }

}