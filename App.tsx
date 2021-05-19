import React from 'react';
import * as SplashScreen from 'expo-splash-screen';
import { enableScreens } from 'react-native-screens';
import { LogBox } from 'react-native';
import useCachedResources from './src/hooks/useCachedResources';
import Navigation from './src/navigation/Navigation';

enableScreens();

LogBox.ignoreAllLogs();

export default function App() {
  const resourcesLoadingComplete = useCachedResources();

  if (resourcesLoadingComplete) {
    return (
      <Navigation />
    );
  } else {
    SplashScreen.preventAutoHideAsync();
    return null;
  }
}
