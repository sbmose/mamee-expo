import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import {
    PROFILE_SCREEN,
    HEALTH_INFO_SCREEN
} from "../ScreenNames";
import ProfileScreen from '../../screen/profile/Profile.screen';
import { HeaderButton } from "../../components/HeaderButton";
import HealthInfo from '../../screen/profile/HealthInfo.screen';
import { Theme } from "../../themes/default";

const Profile = createStackNavigator();

export default function ProfileStack() {
    return (
        <Profile.Navigator
            initialRouteName={PROFILE_SCREEN}>
            <Profile.Screen
                name={PROFILE_SCREEN}
                component={ProfileScreen}
                options={{
                    headerLeft: null,
                    headerTitle: "",
                    headerRight: () => (<HeaderButton iconName="close-circle" color={Theme.gray} />)
                }}
            />
            <Profile.Screen
                name={HEALTH_INFO_SCREEN}
                component={HealthInfo}
                options={{
                    headerLeft: () => (<HeaderButton iconName="chevron-back" color={Theme.pink} />),
                    headerTitle: "Zdravotné informácie",
                }}
            />
        </Profile.Navigator>
    )
}