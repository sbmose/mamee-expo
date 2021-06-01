import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Theme, ThemeStyles } from '../../themes/default';
import { CHILD_STACK, DASHBOARD_STACK, ME_STACK } from '../ScreenNames';
import { Image } from 'react-native';
import DashboardStack from './Dashboard.stack';
import MeStack from './Me.stack';
import ChildStack from './Child.stack';

const BottomTab = createBottomTabNavigator();

export default function AppStack() {

    return (
        <BottomTab.Navigator
            lazy={false}
            initialRouteName={DASHBOARD_STACK}
            tabBarOptions={{
                activeTintColor: Theme.pink,
                showLabel: true,
                style: ThemeStyles.bottomNavigation,
                labelStyle: ThemeStyles.tabLabelStyle,
                labelPosition: 'below-icon'
            }}>
            <BottomTab.Screen
                name={DASHBOARD_STACK}
                component={DashboardStack}
                options={{
                    tabBarLabel: 'Domov',
                    tabBarIcon: ({ color, size }) => (
                        <Image source={require('../../../assets/domov.png')} style={ThemeStyles.tabIconStyle} tintColor={color} />
                    ),
                }} />
            <BottomTab.Screen
                name={ME_STACK}
                component={MeStack}
                options={{
                    tabBarLabel: 'Ja',
                    tabBarIcon: ({ color, size }) => (
                        <Image source={require('../../../assets/mother.png')} style={ThemeStyles.tabIconStyle} tintColor={color} />
                    ),
                }} />
            <BottomTab.Screen
                name={CHILD_STACK}
                component={ChildStack}
                options={{
                    tabBarLabel: 'Dieťa',
                    tabBarIcon: ({ color, size }) => (
                        <Image source={require('../../../assets/baby.png')} style={ThemeStyles.tabIconStyle} tintColor={color} />
                    ),
                }} />
        </BottomTab.Navigator>
    );
}