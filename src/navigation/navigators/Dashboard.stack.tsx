import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { GlobalNavigationOptions } from '../GlobalNavigationOptions';
import { HeaderBigTitle } from '../../components/HeaderBigTitle';
import { DashboardStackConfig } from '../Navigation.config';
import { HeaderProfileImage } from '../../components/HeaderProfileImage';
import { getHeaderOptions } from '../headerOptions';

const Stack = createStackNavigator();

export default function DashboardStack() {
    return (
        <Stack.Navigator initialRouteName={DashboardStackConfig.DASHBOARD_SCREEN.name}>
            <Stack.Screen
                name={DashboardStackConfig.DASHBOARD_SCREEN.name}
                component={DashboardStackConfig.DASHBOARD_SCREEN.component}
                options={{
                    ...GlobalNavigationOptions,
                    headerLeft: () => (<HeaderBigTitle title="Ahoj, Janka" />),
                    headerTitle: "",
                    headerRight: () => (<HeaderProfileImage photo={null} />)
                }}
            />
            <Stack.Screen
                name={DashboardStackConfig.GALLERY_SCREEN.name}
                component={DashboardStackConfig.GALLERY_SCREEN.component}
                options={({ route, navigation }: any) => getHeaderOptions(DashboardStackConfig.GALLERY_SCREEN.title)}
            />
        </Stack.Navigator>
    )
}