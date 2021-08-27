import * as React from 'react';
import * as SplashScreen from 'expo-splash-screen';
import { Root } from "native-base";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { SafeAreaProvider, initialWindowMetrics } from 'react-native-safe-area-context';
import { useSelector } from 'react-redux';
import { RootStackConfig } from './Navigation.config';
import useCheckAuth from '../hooks/useCheckAuth';

export default function Navigation({ navigation }: any) {
    const authChecked = useCheckAuth();

    if (authChecked) {
        try {
            SplashScreen.hideAsync();
        } catch (error) {
            console.error("Already hiden Splash", error);
        }

        return (
            <Root>
                <SafeAreaProvider initialMetrics={initialWindowMetrics}>
                    <NavigationContainer>
                        <RootNavigator />
                    </NavigationContainer>
                </SafeAreaProvider>
            </Root>
        );
    } else {
        return null;
    }

    // TODO: Root navigator and screens

}

const RootStack = createStackNavigator();

function RootNavigator() {
    const { auth } = useSelector((state: any) => state.profile);

    return (
        <RootStack.Navigator
            headerMode="none"
            initialRouteName={auth.loggedIn ? RootStackConfig.APP_STACK.name : RootStackConfig.AUTH_STACK.name}>
            {auth.loggedIn ? (
                <RootStack.Screen
                    name={RootStackConfig.APP_STACK.name}
                    component={RootStackConfig.APP_STACK.component} />
            ) : (
                <RootStack.Screen
                    name={RootStackConfig.AUTH_STACK.name}
                    component={RootStackConfig.AUTH_STACK.component} />
            )}


        </RootStack.Navigator>
    );

}
