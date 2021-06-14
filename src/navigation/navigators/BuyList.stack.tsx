import React from "react";
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { BuyListTabStack } from "../Navigation.config";
import { topTabBarOptions } from "../GlobalNavigationOptions";

const Tab = createMaterialTopTabNavigator();

export default function BuyListStack() {

    return (
        <Tab.Navigator
            tabBarOptions={{ ...topTabBarOptions }} >
            <Tab.Screen
                name={BuyListTabStack.BUY_LIST_TAB_ONE_SCREEN.name}
                component={BuyListTabStack.BUY_LIST_TAB_ONE_SCREEN.component}
                options={{ title: BuyListTabStack.BUY_LIST_TAB_ONE_SCREEN.title }}
            />
            <Tab.Screen
                name={BuyListTabStack.BUY_LIST_TAB_TWO_SCREEN.name}
                component={BuyListTabStack.BUY_LIST_TAB_TWO_SCREEN.component}
                options={{ title: BuyListTabStack.BUY_LIST_TAB_TWO_SCREEN.title }}
            />
        </Tab.Navigator>
    )
}