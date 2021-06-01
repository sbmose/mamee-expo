import * as React from 'react';
import * as SplashScreen from 'expo-splash-screen';
import { Root } from "native-base";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { SafeAreaProvider, initialWindowMetrics } from 'react-native-safe-area-context';
import { useSelector } from 'react-redux';
import { APP_STACK, AUTH_STACK } from './ScreenNames';
import AuthStack from './navigators/Auth.stack';
import AppStack from './navigators/App.stack';

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
                    <RootNavigator />
                </NavigationContainer>
            </SafeAreaProvider>
        </Root>
    );
}

const RootStack = createStackNavigator();

function RootNavigator() {
    const { auth } = useSelector((state: any) => state.profile);

    return (
        <RootStack.Navigator headerMode="none">
            {auth.loggedIn ?
                <RootStack.Screen
                    name={APP_STACK}
                    component={AppStack} />
                :
                <RootStack.Screen
                    name={AUTH_STACK}
                    component={AuthStack} />
            }
        </RootStack.Navigator>
    );

}
