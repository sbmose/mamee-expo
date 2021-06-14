import React from "react";
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { HospitalsListTabStack } from "../Navigation.config";
import { topTabBarOptions } from "../GlobalNavigationOptions";

const Tab = createMaterialTopTabNavigator();

export default function HospitalsListStack() {

    return (
        <Tab.Navigator
            tabBarOptions={{ ...topTabBarOptions }} >
            <Tab.Screen
                name={HospitalsListTabStack.HOSPITALS_LIST_TAB_ONE_SCREEN.name}
                component={HospitalsListTabStack.HOSPITALS_LIST_TAB_ONE_SCREEN.component}
                options={{ title: HospitalsListTabStack.HOSPITALS_LIST_TAB_ONE_SCREEN.title }}
            />
            <Tab.Screen
                name={HospitalsListTabStack.HOSPITALS_LIST_TAB_TWO_SCREEN.name}
                component={HospitalsListTabStack.HOSPITALS_LIST_TAB_TWO_SCREEN.component}
                options={{ title: HospitalsListTabStack.HOSPITALS_LIST_TAB_TWO_SCREEN.title }}
            />
            <Tab.Screen
                name={HospitalsListTabStack.HOSPITALS_LIST_TAB_THREE_SCREEN.name}
                component={HospitalsListTabStack.HOSPITALS_LIST_TAB_THREE_SCREEN.component}
                options={{ title: HospitalsListTabStack.HOSPITALS_LIST_TAB_THREE_SCREEN.title }}
            />
        </Tab.Navigator>
    )
}