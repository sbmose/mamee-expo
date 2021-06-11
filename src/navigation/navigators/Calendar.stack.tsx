import React from "react";
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { CalendarTabStack } from "../Navigation.config";
import { topTabBarOptions } from "../GlobalNavigationOptions";

const Tab = createMaterialTopTabNavigator();

export default function CalendarStack() {
    return (
        <Tab.Navigator
            tabBarOptions={{ ...topTabBarOptions }} >
            <Tab.Screen
                name={CalendarTabStack.EVENTS_CALENDAR_SCREEN.name}
                component={CalendarTabStack.EVENTS_CALENDAR_SCREEN.component}
                options={{
                    title: CalendarTabStack.EVENTS_CALENDAR_SCREEN.title,
                }}
            />
            <Tab.Screen
                name={CalendarTabStack.MENSES_CALENDAR_SCREEN.name}
                component={CalendarTabStack.MENSES_CALENDAR_SCREEN.component}
                options={{
                    title: CalendarTabStack.MENSES_CALENDAR_SCREEN.title,
                }}
            />
        </Tab.Navigator>
    )
}