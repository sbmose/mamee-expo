import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import TabBarIcons from '../../components/TabBarIcons';
import { GlobalNavigationOptions } from '../GlobalNavigationOptions';
import { AppTabsConfig } from '../Navigation.config';

const BottomTab = createBottomTabNavigator();

export default function AppStack() {

    return (
        <BottomTab.Navigator
            lazy={false}
            initialRouteName={AppTabsConfig.DASHBOARD_STACK.name}
            tabBarOptions={{

                ...GlobalNavigationOptions
            }}>
            <BottomTab.Screen
                name={AppTabsConfig.DASHBOARD_STACK.name}
                component={AppTabsConfig.DASHBOARD_STACK.component}
                options={{
                    title: AppTabsConfig.DASHBOARD_STACK.title,
                    tabBarIcon: ({ color }) => (<TabBarIcons name={AppTabsConfig.DASHBOARD_STACK.icon} color={color} width={25} height={25} />)
                }} />
            <BottomTab.Screen
                name={AppTabsConfig.ME_STACK.name}
                component={AppTabsConfig.ME_STACK.component}
                options={{
                    title: AppTabsConfig.ME_STACK.title,
                    tabBarIcon: ({ color }) => (<TabBarIcons name={AppTabsConfig.ME_STACK.icon} color={color} width={25} height={25} />)
                }} />
            <BottomTab.Screen
                name={AppTabsConfig.CHILD_STACK.name}
                component={AppTabsConfig.CHILD_STACK.component}
                options={{
                    title: AppTabsConfig.CHILD_STACK.title,
                    tabBarIcon: ({ color }) => (<TabBarIcons name={AppTabsConfig.CHILD_STACK.icon} color={color} width={25} height={25} />)
                }} />
        </BottomTab.Navigator>
    );
}