import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { AuthStackConfig } from '../Navigation.config';

const Auth = createStackNavigator();

export default function AuthStack() {
    return (
        <Auth.Navigator
            headerMode="none"
            initialRouteName={AuthStackConfig.LOGIN_SCREEN.name}>
            <Auth.Screen
                name={AuthStackConfig.LOGIN_SCREEN.name}
                component={AuthStackConfig.LOGIN_SCREEN.component}
            />
            <Auth.Screen
                name={AuthStackConfig.REGISTRATION_SCREEN.name}
                component={AuthStackConfig.REGISTRATION_SCREEN.component}
            />
            <Auth.Screen
                name={AuthStackConfig.START_REGISTRATION_SCREEN.name}
                component={AuthStackConfig.START_REGISTRATION_SCREEN.component}
            />
            <Auth.Screen
                name={AuthStackConfig.REGISTRATION_EMAIL_PASS_SCREEN.name}
                component={AuthStackConfig.REGISTRATION_EMAIL_PASS_SCREEN.component}
            />
        </Auth.Navigator>
    )
}