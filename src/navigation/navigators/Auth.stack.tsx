import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { AuthStackConfig } from '../Navigation.config';
import { getHeaderOptions } from '../headerOptions';

const Auth = createStackNavigator();

export default function AuthStack() {
    return (
        <Auth.Navigator
            initialRouteName={AuthStackConfig.EMAIL_CONFIRMATION_SCREEN.name}>
            <Auth.Screen
                name={AuthStackConfig.LOGIN_SCREEN.name}
                component={AuthStackConfig.LOGIN_SCREEN.component}
                options={{
                    headerShown: false
                }}
            />
            <Auth.Screen
                name={AuthStackConfig.REGISTRATION_SCREEN.name}
                component={AuthStackConfig.REGISTRATION_SCREEN.component}
                options={{
                    headerShown: false
                }}
            />
            <Auth.Screen
                name={AuthStackConfig.START_REGISTRATION_SCREEN.name}
                component={AuthStackConfig.START_REGISTRATION_SCREEN.component}
                options={{
                    headerShown: false
                }}
            />
            <Auth.Screen
                name={AuthStackConfig.REGISTRATION_EMAIL_PASS_SCREEN.name}
                component={AuthStackConfig.REGISTRATION_EMAIL_PASS_SCREEN.component}
                options={{
                    headerShown: false
                }}
            />
            <Auth.Screen
                name={AuthStackConfig.CONDITIONS_SCREEN.name}
                component={AuthStackConfig.CONDITIONS_SCREEN.component}
                options={({ route, navigation }: any) => getHeaderOptions(AuthStackConfig.CONDITIONS_SCREEN.title)}
            />
            <Auth.Screen
                name={AuthStackConfig.EMAIL_CONFIRMATION_SCREEN.name}
                component={AuthStackConfig.EMAIL_CONFIRMATION_SCREEN.component}
                options={{
                    headerShown: false
                }}
            />
        </Auth.Navigator>
    )
}