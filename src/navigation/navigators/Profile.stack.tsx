import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { PROFILE_SCREEN } from "../ScreenNames";
import ProfileScreen from '../../screen/profile/Profile.screen';

const Profile = createStackNavigator();

export default function ProfileStack() {
    return (
        <Profile.Navigator
            /* headerMode="none" */
            initialRouteName={PROFILE_SCREEN}>
            <Profile.Screen
                name={PROFILE_SCREEN}
                component={ProfileScreen}
            />
        </Profile.Navigator>
    )
}