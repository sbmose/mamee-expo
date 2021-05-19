import * as React from 'react';
import * as SplashScreen from 'expo-splash-screen';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { SafeAreaProvider, initialWindowMetrics } from 'react-native-safe-area-context';
import AppNavigation from '../components/AppNavigation';

export default function Navigation({ navigation }: any) {
    const [ready, setReady] = React.useState(false);
    const navigationRef = React.useRef(null);

    if (ready) {
        try {
            SplashScreen.hideAsync();
        } catch (error) {
            console.error("Already hiden Splash", error);
        }
    }

    // TODO: Root navigator and screens
    return (
        <SafeAreaProvider initialMetrics={initialWindowMetrics}>
            <NavigationContainer onReady={() => {
                setReady(true);
            }}>
                <AppNavigation navigation={navigationRef.current} />
            </NavigationContainer>
        </SafeAreaProvider>
    );
}

const RootStack = createStackNavigator();

function RootNavigator() {

    return (
        <RootStack.Navigator>

        </RootStack.Navigator>
    );

}
