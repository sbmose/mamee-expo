import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { globalNavigationOptions, getHeaderOptions } from '../GlobalNavigationOptions';
import { ChildStackConfig } from "../Navigation.config";
import { HeaderBigTitle } from '../../components/HeaderBigTitle';
import { HeaderProfileImage } from '../../components/HeaderProfileImage';

const Stack = createStackNavigator();

export default function ChildStack() {
    return (
        <Stack.Navigator >
            <Stack.Screen
                name={ChildStackConfig.CHILD_MENU_SCREEN.name}
                component={ChildStackConfig.CHILD_MENU_SCREEN.component}
                options={{
                    ...globalNavigationOptions,
                    headerLeft: () => (<HeaderBigTitle title="Dieťa" />),
                    headerTitle: "",
                    headerRight: () => (<HeaderProfileImage photo={null} />)
                }}
            />
            <Stack.Screen
                name={ChildStackConfig.FOOD_SCREEN.name}
                component={ChildStackConfig.FOOD_SCREEN.component}
                options={({ route, navigation }: any) => getHeaderOptions(ChildStackConfig.FOOD_SCREEN.title)}
            />
            <Stack.Screen
                name={ChildStackConfig.CHILD_ADMINISTRATION_SCREEN.name}
                component={ChildStackConfig.CHILD_ADMINISTRATION_SCREEN.component}
                options={({ route, navigation }: any) => getHeaderOptions(ChildStackConfig.CHILD_ADMINISTRATION_SCREEN.title)}
            />
            <Stack.Screen
                name={ChildStackConfig.CHILD_PHOTOS_SCREEN.name}
                component={ChildStackConfig.CHILD_PHOTOS_SCREEN.component}
                options={({ route, navigation }: any) => getHeaderOptions(ChildStackConfig.CHILD_PHOTOS_SCREEN.title)}
            />
            <Stack.Screen
                name={ChildStackConfig.DETAIL_CHILD_PHOTOS_SCREEN.name}
                component={ChildStackConfig.DETAIL_CHILD_PHOTOS_SCREEN.component}
                options={({ route, navigation }: any) => getHeaderOptions(ChildStackConfig.DETAIL_CHILD_PHOTOS_SCREEN.title)}
            />
            <Stack.Screen
                name={ChildStackConfig.ACTIVITIES_SCREEN.name}
                component={ChildStackConfig.ACTIVITIES_SCREEN.component}
                options={({ route, navigation }: any) => getHeaderOptions(ChildStackConfig.ACTIVITIES_SCREEN.title)}
            />
        </Stack.Navigator>
    )
}