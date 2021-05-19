import * as React from 'react';
import * as SplashScreen from 'expo-splash-screen';
import { Root } from "native-base";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { SafeAreaProvider, initialWindowMetrics } from 'react-native-safe-area-context';
import AppNavigation from '../components/AppNavigation';

export default function Navigation({ navigation }: any) {
    const [ready, setReady] = React.useState(false);

    if (ready) {
        try {
            SplashScreen.hideAsync();
        } catch (error) {
            console.error("Already hiden Splash", error);
        }
    }

    // TODO: Root navigator and screens
    return (
        <Root>
            <SafeAreaProvider initialMetrics={initialWindowMetrics}>
                <NavigationContainer onReady={() => {
                    setReady(true);
                }}>
                    <AppNavigation navigation={navigation} />
                </NavigationContainer>
            </SafeAreaProvider>
        </Root>
    );
}

const RootStack = createStackNavigator();

function RootNavigator() {

    return (
        <RootStack.Navigator>

        </RootStack.Navigator>
    );

}
