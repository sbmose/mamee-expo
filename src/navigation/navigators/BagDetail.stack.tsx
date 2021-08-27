import React from "react";
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { BagDetailTabStack } from "../Navigation.config";
import { topTabBarOptions } from "../GlobalNavigationOptions";
import { useSelector } from 'react-redux';

const Tab = createMaterialTopTabNavigator();

export default function BagDetailStack() {
    const { bagListTabParams } = useSelector((state: any) => state.ui);

    return (
        <Tab.Navigator
            tabBarOptions={{ ...topTabBarOptions }} >
            <Tab.Screen
                name={BagDetailTabStack.BAG_LIST_TAB_ONE_SCREEN.name}
                component={BagDetailTabStack.BAG_LIST_TAB_ONE_SCREEN.component}
                options={{ title: bagListTabParams.tabOneTitle }}
            />
            <Tab.Screen
                name={BagDetailTabStack.BAG_LIST_TAB_TWO_SCREEN.name}
                component={BagDetailTabStack.BAG_LIST_TAB_TWO_SCREEN.component}
                options={{ title: bagListTabParams.tabTwoTitle }}
            />
        </Tab.Navigator>
    )
}