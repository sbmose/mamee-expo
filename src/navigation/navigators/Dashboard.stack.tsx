import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import {
    DASHBOARD_SCREEN,
    GALLERY_SCREEN
} from "../ScreenNames";
import { GlobalNavigationOptions } from '../GlobalNavigationOptions';
import Dashboard from "../../screen/Dashboard";
import Gallery from "../../screen/Gallery";

const Stack = createStackNavigator();

export default function DashboardStack() {
    return (
        <Stack.Navigator headerMode="none">
            <Stack.Screen
                name={DASHBOARD_SCREEN}
                component={Dashboard}
            />
            <Stack.Screen
                name={GALLERY_SCREEN}
                component={Gallery}
            />
        </Stack.Navigator>
    )
}