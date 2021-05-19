import React from 'react';
import * as SplashScreen from 'expo-splash-screen';
import { enableScreens } from 'react-native-screens';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import AppNavigation from "./src/components/AppNavigation";
import { LogBox } from 'react-native';
import useCachedResources from './src/hooks/useCachedResources';

enableScreens();

LogBox.ignoreAllLogs();

export default function App() {
  const resourcesLoadingComplete = useCachedResources();
  const navigationRef = React.useRef(null);
  const [ready, setReady] = React.useState(false);

  if (resourcesLoadingComplete) {
    return (
      <NavigationContainer ref={navigationRef}
        onReady={() => {
          setReady(true);
        }}>
        {ready ? (<AppNavigation navigation={navigationRef.current} />) : (null)}
      </NavigationContainer>
    );
  } else {
    SplashScreen.preventAutoHideAsync();
    return null;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
