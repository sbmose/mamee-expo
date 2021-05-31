import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import {
    LOGIN_SCREEN
} from "../ScreenNames";
import { GlobalNavigationOptions } from '../GlobalNavigationOptions';
import LoginScreen from '../../screen/Authentication/Login.screen';

const Profile = createStackNavigator();

export default function AuthStack() {
    return (
        <Profile.Navigator
            initialRouteName={LOGIN_SCREEN}>
            <Profile.Screen
                name={LOGIN_SCREEN}
                component={LoginScreen}
                options={{
                    ...GlobalNavigationOptions,
                    headerLeft: null,
                    headerTitle: "",
                    headerRight: null
                }}
            />
            {/* <Profile.Screen
                name={HEALTH_INFO_SCREEN}
                component={HealthInfo}
                options={{
                    ...GlobalNavigationOptions,
                    headerLeft: () => (<HeaderButton iconName="chevron-back" color={Theme.pink} />),
                    headerTitle: "Zdravotné informácie",
                }}
            />
            <Profile.Screen
                name={HEALTH_INFO_DETAIL_SCREEN}
                component={HealthInfoDetail}
                options={({ route, navigation }: any) => ({
                    ...GlobalNavigationOptions,
                    headerLeft: () => (<HeaderButton iconName="chevron-back" color={Theme.pink} />),
                    title: route.params.label,
                    headerRight: () => (<HeaderButton iconName="add" color={Theme.pink} />),
                })}
            />
            <Profile.Screen
                name={CHANGE_PASSWORD_SCREEN}
                component={ChangePassword}
                options={{
                    ...GlobalNavigationOptions,
                    headerLeft: () => (<HeaderButton iconName="chevron-back" color={Theme.pink} />),
                    headerTitle: "",
                }}
            /> */}
        </Profile.Navigator>
    )
}