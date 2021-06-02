import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { AuthStackConfig } from '../Navigation.config';

const Profile = createStackNavigator();

export default function AuthStack() {
    return (
        <Profile.Navigator
            headerMode="none"
            initialRouteName={AuthStackConfig.LOGIN_SCREEN.name}>
            <Profile.Screen
                name={AuthStackConfig.LOGIN_SCREEN.name}
                component={AuthStackConfig.LOGIN_SCREEN.component}
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