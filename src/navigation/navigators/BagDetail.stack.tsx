import React from "react";
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { BagDetailTabStack } from "../Navigation.config";
import { topTabBarOptions } from "../GlobalNavigationOptions";

const Tab = createMaterialTopTabNavigator();

export default function BagDetailStack() {
    return (
        <Tab.Navigator
            tabBarOptions={{ ...topTabBarOptions }} >
            <Tab.Screen
                name={BagDetailTabStack.BAG_LIST_TAB_ONE_SCREEN.name}
                component={BagDetailTabStack.BAG_LIST_TAB_ONE_SCREEN.component}
                options={({ route, navigation }: any) => {
                    console.log("route params", route, route.params, navigation);
                    return {
                        title: route?.params?.tabOneTitle || ""
                    }
                }}
            />
            <Tab.Screen
                name={BagDetailTabStack.BAG_LIST_TAB_TWO_SCREEN.name}
                component={BagDetailTabStack.BAG_LIST_TAB_TWO_SCREEN.component}
                options={({ route, navigation }: any) => {
                    return {
                        title: route?.params?.tabTwoTitle || ""
                    }
                }}
            />
        </Tab.Navigator>
    )
}