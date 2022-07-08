import { StatusBar } from 'expo-status-bar';
import { color } from './src/utils/colors';
import React, {useState,useEffect} from 'react';
import { StyleSheet, SafeAreaView,StatusBar as ReactStatusBar, Platform } from 'react-native';
import Navigator from './src/features/navigations/navigation';
// import {initializeApp, getApps} from 'firebase/firebase-app'
import MainNavigation from './src/features/navigations';
import {
  useFonts as useOswald,
  Oswald_400Regular,
} from '@expo-google-fonts/oswald';
import {
  useFonts as usePoppins,
  Poppins_400Regular,
} from '@expo-google-fonts/poppins';


import { RestaurantContextProvider } from './src/features/restaurants/components/context';
import {  LocationContextProvider } from './src/features/restaurants/components/locationContext';
import { AuthContextProvider } from './src/context/AuthContext';

// import MainNavigation from './src/features/navigations';
// const firebaseConfig = {
//   apiKey: "AIzaSyBl5O7gxZSLDERY_VkTNosaPg7NT5xEzu8",
//   authDomain: "mamameal.firebaseapp.com",
//   projectId: "mamameal",
//   storageBucket: "mamameal.appspot.com",
//   messagingSenderId: "251877821217",
//   appId: "1:251877821217:web:abf8caa83979a800a28c60"
// };

// initializeApp(firebaseConfig)

// console.log(firebase.app)
const isAndroid = Platform.OS !== 'ios';

export default function App() {
  const [osWaldLoaded] = useOswald({Oswald_400Regular})
  const [PoppinsLoaded] = usePoppins({Poppins_400Regular})
  // const [nunitoLoaded] = useNunito({Nunito_400Regular})
  useEffect(()=>{
      
  },[])
  if(!osWaldLoaded || !PoppinsLoaded)
    return null;
  return (
    <>
    <SafeAreaView style={styles.container} >
    <AuthContextProvider>
    <LocationContextProvider>
    <RestaurantContextProvider>
    <MainNavigation />
    </RestaurantContextProvider>
    </LocationContextProvider>
    </AuthContextProvider>
    </SafeAreaView>
    <StatusBar />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: color.bg.primary,
    marginTop: isAndroid ? ReactStatusBar.currentHeight: 0,
  }
});
