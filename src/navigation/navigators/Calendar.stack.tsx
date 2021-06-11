import React from "react";
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { CalendarTabStack } from "../Navigation.config";

const Tab = createMaterialTopTabNavigator();

export default function CalendarStack() {
    return (
        <Tab.Navigator >
            <Tab.Screen
                name={CalendarTabStack.EVENTS_CALENDAR_SCREEN.name}
                component={CalendarTabStack.EVENTS_CALENDAR_SCREEN.component}
            /* tabBarOptions={} */
            />
            <Tab.Screen
                name={CalendarTabStack.MENSES_CALENDAR_SCREEN.name}
                component={CalendarTabStack.MENSES_CALENDAR_SCREEN.component}
            />
        </Tab.Navigator>
    )
}