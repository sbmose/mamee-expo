import React from "react";
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { topTabBarOptions } from "../GlobalNavigationOptions";
import { NamesListTabStack } from '../Navigation.config';

const Tab = createMaterialTopTabNavigator();

export default function NamesListStack() {

    return (
        <Tab.Navigator
            tabBarOptions={{ ...topTabBarOptions }} >
            <Tab.Screen
                name={NamesListTabStack.NAMES_LIST_TAB_ONE_SCREEN.name}
                component={NamesListTabStack.NAMES_LIST_TAB_ONE_SCREEN.component}
                options={{ title: NamesListTabStack.NAMES_LIST_TAB_ONE_SCREEN.title }}
            />
            <Tab.Screen
                name={NamesListTabStack.NAMES_LIST_TAB_TWO_SCREEN.name}
                component={NamesListTabStack.NAMES_LIST_TAB_TWO_SCREEN.component}
                options={{ title: NamesListTabStack.NAMES_LIST_TAB_TWO_SCREEN.title }}
            />
        </Tab.Navigator>
    )
}