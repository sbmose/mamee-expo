import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import {
    CHILD_MENU_SCREEN,
    FOOD_SCREEN,
    CHILD_PHOTOS_SCREEN,
    DETAIL_CHILD_PHOTOS_SCREEN,
    CHILD_ADMINISTRATION_SCREEN,
    ACTIVITIES_SCREEN
} from "../ScreenNames";
import { GlobalNavigationOptions } from '../GlobalNavigationOptions';
import Child from "../../screen/Child";
import Activities from "../../screen/Activities";
import ChildAdministration from "../../screen/ChildAdministration";
import ChildPhotos from "../../screen/ChildPhotos";
import Food from "../../screen/Food";
import DetailChildPhoto from "../../screen/DetailChildPhoto";



const Stack = createStackNavigator();

export default function ChildStack() {
    return (
        <Stack.Navigator headerMode="none">
            <Stack.Screen
                name={CHILD_MENU_SCREEN}
                component={Child}
            />
            <Stack.Screen
                name={FOOD_SCREEN}
                component={Food}
            />
            <Stack.Screen
                name={CHILD_PHOTOS_SCREEN}
                component={ChildPhotos}
            />
            <Stack.Screen
                name={DETAIL_CHILD_PHOTOS_SCREEN}
                component={DetailChildPhoto}
            />
            <Stack.Screen
                name={CHILD_ADMINISTRATION_SCREEN}
                component={ChildAdministration}
            />
            <Stack.Screen
                name={ACTIVITIES_SCREEN}
                component={Activities}
            />
        </Stack.Navigator>
    )
}