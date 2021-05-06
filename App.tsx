import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import AppNavigation from "./src/components/AppNavigation";
import { LogBox } from 'react-native';
LogBox.ignoreAllLogs();

export default function App() {
    const navigationRef = React.useRef(null);
    const [ready,setReady] = React.useState(false);
  return (
      <NavigationContainer ref={navigationRef}
                           onReady={() => {
                               setReady(true);
                           }}>
          {ready ? (<AppNavigation navigation={navigationRef.current}/>) : (null)}
      </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
