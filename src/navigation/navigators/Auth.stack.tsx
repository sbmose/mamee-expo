import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { AuthStackConfig } from '../Navigation.config';
import { getHeaderOptions } from '../headerOptions';
import { HeaderButton } from '../../components/HeaderButton';
import { Theme } from "../../themes/default";

const Auth = createStackNavigator();

export default function AuthStack() {
    return (
        <Auth.Navigator
            initialRouteName={AuthStackConfig.ABOUT_ME_SCREEN.name}>
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
                name={AuthStackConfig.EMAIL_VERIFICATION_SCREEN.name}
                component={AuthStackConfig.EMAIL_VERIFICATION_SCREEN.component}
                options={{
                    headerShown: false
                }}
            />
            <Auth.Screen
                name={AuthStackConfig.ABOUT_ME_SCREEN.name}
                component={AuthStackConfig.ABOUT_ME_SCREEN.component}
                options={{
                    headerShown: false
                }}
            />
            <Auth.Screen
                name={AuthStackConfig.PICK_CONDITION_SCREEN.name}
                component={AuthStackConfig.PICK_CONDITION_SCREEN.component}
                options={{
                    headerShown: false
                }}
            />
            <Auth.Screen
                name={AuthStackConfig.LAST_PERIOD_SCREEN.name}
                component={AuthStackConfig.LAST_PERIOD_SCREEN.component}
                options={{
                    headerShown: false
                }}
            />
            <Auth.Screen
                name={AuthStackConfig.GDPR_SCREEN.name}
                component={AuthStackConfig.GDPR_SCREEN.component}
                options={{
                    headerShown: false
                }}
            />
            <Auth.Screen
                name={AuthStackConfig.ADD_CHILD.name}
                component={AuthStackConfig.ADD_CHILD.component}
                options={{
                    headerShown: false
                }}
            />
            <Auth.Screen
                name={AuthStackConfig.MY_CHILDREN_SCREEN.name}
                component={AuthStackConfig.MY_CHILDREN_SCREEN.component}
                options={{
                    headerShown: false
                }}
            />
            <Auth.Screen
                name={AuthStackConfig.LOGIN_METHOD_SCREEN.name}
                component={AuthStackConfig.LOGIN_METHOD_SCREEN.component}
                options={{
                    headerShown: false
                }}
            />
            <Auth.Screen
                name={AuthStackConfig.CREATE_PIN_SCREEN.name}
                component={AuthStackConfig.CREATE_PIN_SCREEN.component}
                options={{
                    headerShown: false
                }}
            />
            <Auth.Screen
                name={AuthStackConfig.GRATULATION_SCREEN.name}
                component={AuthStackConfig.GRATULATION_SCREEN.component}
                options={{
                    headerShown: false
                }}
            />
            <Auth.Screen
                name={AuthStackConfig.ENABLE_BIOMETRIC_SCREEN.name}
                component={AuthStackConfig.ENABLE_BIOMETRIC_SCREEN.component}
                options={{
                    headerLeft: () => (<HeaderButton iconName="chevron-back" color={Theme.pink} />),
                    headerTitle: "",
                    headerStyle: {
                        backgroundColor: Theme.appBg
                    }
                }}
            />
        </Auth.Navigator>
    )
}