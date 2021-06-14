import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { MeStackConfig } from '../Navigation.config';
import { globalNavigationOptions, getHeaderOptions } from '../GlobalNavigationOptions';
import { Theme } from "../../themes/default";
import { HeaderButton } from '../../components/HeaderButton';
import { HeaderBigTitle } from '../../components/HeaderBigTitle';
import { HeaderProfileImage } from '../../components/HeaderProfileImage';
import { HeaderButtonText } from '../../components/HeaderButtonText';

const Stack = createStackNavigator();

export default function MeStack() {
    return (
        <Stack.Navigator
            initialRouteName={MeStackConfig.ME_MENU_SCREEN.name}>
            <Stack.Screen
                name={MeStackConfig.ME_MENU_SCREEN.name}
                component={MeStackConfig.ME_MENU_SCREEN.component}
                options={{
                    ...globalNavigationOptions,
                    headerLeft: () => (<HeaderBigTitle title="Ja" />),
                    headerTitle: "",
                    headerRight: () => (<HeaderProfileImage photo={null} />)
                }}
            />
            <Stack.Screen
                name={MeStackConfig.HEALTH_SCREEN.name}
                component={MeStackConfig.HEALTH_SCREEN.component}
                options={({ route, navigation }: any) => getHeaderOptions(MeStackConfig.HEALTH_SCREEN.title)}
            />
            <Stack.Screen
                name={MeStackConfig.PROFILE_SCREEN.name}
                component={MeStackConfig.PROFILE_SCREEN.component}
                options={{
                    ...globalNavigationOptions,
                    headerLeft: null,
                    headerTitle: "",
                    headerRight: () => (<HeaderButton iconName="close-circle" color={Theme.gray} />)
                }}
            />
            <Stack.Screen
                name={MeStackConfig.CALENDAR_SCREEN.name}
                component={MeStackConfig.CALENDAR_SCREEN.component}
                options={({ route, navigation }: any) => {
                    const index = route?.state?.index;

                    return {
                        ...getHeaderOptions(MeStackConfig.CALENDAR_SCREEN.title),
                        headerRight: () => (<HeaderButton
                            iconName={index ? "calendar" : "add"}
                            onPress={() => index ?
                                navigation.navigate(MeStackConfig.CALCULATE_PERIOD_SCREEN.name)
                                :
                                navigation.navigate(MeStackConfig.ADD_NEW_EVENT_SCREEN.name)
                            } />)
                    }
                }}
            />
            <Stack.Screen
                name={MeStackConfig.ADD_NEW_EVENT_SCREEN.name}
                component={MeStackConfig.ADD_NEW_EVENT_SCREEN.component}
                options={({ route, navigation }: any) => {
                    return {
                        ...getHeaderOptions(MeStackConfig.ADD_NEW_EVENT_SCREEN.title),
                        headerLeft: () => (<HeaderButtonText label="Zrušiť" />),
                        headerRight: () => (<HeaderButtonText label="Hotovo" onPress={() => console.log("AddEvent")} />)
                    }
                }}
            />
            <Stack.Screen
                name={MeStackConfig.CALCULATE_PERIOD_SCREEN.name}
                component={MeStackConfig.CALCULATE_PERIOD_SCREEN.component}
                options={({ route, navigation }: any) => {
                    return {
                        ...getHeaderOptions(MeStackConfig.CALCULATE_PERIOD_SCREEN.title),
                        headerLeft: () => (<HeaderButtonText label="Zrušiť" />),
                        headerRight: () => (<HeaderButtonText label="Vypočítať" onPress={() => console.log("Calculate cyclus")} />)
                    }
                }}
            />
            <Stack.Screen
                name={MeStackConfig.BIRTH_PLAN_SCREEN.name}
                component={MeStackConfig.BIRTH_PLAN_SCREEN.component}
                options={({ route, navigation }: any) => {
                    return {
                        ...getHeaderOptions(MeStackConfig.BIRTH_PLAN_SCREEN.title),
                        headerRight: () => (<HeaderButton
                            iconName="camera"
                            onPress={() => console.log("Add Photo")}
                        />)
                    }
                }}
            />
            <Stack.Screen
                name={MeStackConfig.HEALTH_INFO_SCREEN.name}
                component={MeStackConfig.HEALTH_INFO_SCREEN.component}
                options={({ route, navigation }: any) => getHeaderOptions(MeStackConfig.HEALTH_INFO_SCREEN.title)}
            />
            <Stack.Screen
                name={MeStackConfig.PHOTOS_SCREEN.name}
                component={MeStackConfig.PHOTOS_SCREEN.component}
                options={({ route, navigation }: any) => getHeaderOptions(MeStackConfig.PHOTOS_SCREEN.title)}
            />
            <Stack.Screen
                name={MeStackConfig.WEIGHT_SCREEN.name}
                component={MeStackConfig.WEIGHT_SCREEN.component}
                options={({ route, navigation }: any) => getHeaderOptions(MeStackConfig.WEIGHT_SCREEN.title)}
            />
            <Stack.Screen
                name={MeStackConfig.PMS_CALENDAR_SCREEN.name}
                component={MeStackConfig.PMS_CALENDAR_SCREEN.component}
                options={({ route, navigation }: any) => {
                    return {
                        ...getHeaderOptions(MeStackConfig.PMS_CALENDAR_SCREEN.title),
                        headerRight: () => (<HeaderButton
                            iconName="calendar"
                            onPress={() => navigation.navigate(MeStackConfig.CALCULATE_PERIOD_SCREEN.name)} />)
                    }
                }}
            />
            <Stack.Screen
                name={MeStackConfig.BAG_SCREEN.name}
                component={MeStackConfig.BAG_SCREEN.component}
                options={({ route, navigation }: any) => getHeaderOptions(MeStackConfig.BAG_SCREEN.title)}
            />
            <Stack.Screen
                name={MeStackConfig.BUY_LIST_SCREEN.name}
                component={MeStackConfig.BUY_LIST_SCREEN.component}
                options={({ route, navigation }: any) => getHeaderOptions(MeStackConfig.BUY_LIST_SCREEN.title)}
            />
            <Stack.Screen
                name={MeStackConfig.NAMES_SCREEN.name}
                component={MeStackConfig.NAMES_SCREEN.component}
                options={({ route, navigation }: any) => getHeaderOptions(MeStackConfig.NAMES_SCREEN.title)}
            />
            <Stack.Screen
                name={MeStackConfig.HOSPITALS_SCREEN.name}
                component={MeStackConfig.HOSPITALS_SCREEN.component}
                options={({ route, navigation }: any) => getHeaderOptions(MeStackConfig.HOSPITALS_SCREEN.title)}
            />
            <Stack.Screen
                name={MeStackConfig.LOSS_SCREEN.name}
                component={MeStackConfig.LOSS_SCREEN.component}
                options={({ route, navigation }: any) => getHeaderOptions(MeStackConfig.LOSS_SCREEN.title)}
            />
            <Stack.Screen
                name={MeStackConfig.ADMINISTRATION_SCREEN.name}
                component={MeStackConfig.ADMINISTRATION_SCREEN.component}
                options={({ route, navigation }: any) => getHeaderOptions(MeStackConfig.ADMINISTRATION_SCREEN.title)}
            />
            <Stack.Screen
                name={MeStackConfig.HEALTH_INFO_DETAIL_SCREEN.name}
                component={MeStackConfig.HEALTH_INFO_DETAIL_SCREEN.component}
                options={({ route, navigation }: any) => getHeaderOptions(MeStackConfig.HEALTH_INFO_DETAIL_SCREEN.title)}
            />
            <Stack.Screen
                name={MeStackConfig.CHANGE_PASSWORD_SCREEN.name}
                component={MeStackConfig.CHANGE_PASSWORD_SCREEN.component}
                options={({ route, navigation }: any) => getHeaderOptions(MeStackConfig.CHANGE_PASSWORD_SCREEN.title)}
            />
            <Stack.Screen
                name={MeStackConfig.DETAIL_PHOTO_SCREEN.name}
                component={MeStackConfig.DETAIL_PHOTO_SCREEN.component}
                options={({ route, navigation }: any) => getHeaderOptions(MeStackConfig.DETAIL_PHOTO_SCREEN.title)}
            />
            <Stack.Screen
                name={MeStackConfig.BAG_MOTHER_SCREEN.name}
                component={MeStackConfig.BAG_MOTHER_SCREEN.component}
                options={({ route, navigation }: any) => getHeaderOptions(MeStackConfig.BAG_MOTHER_SCREEN.title)}
            />
            <Stack.Screen
                name={MeStackConfig.BAG_CHILD_SCREEN.name}
                component={MeStackConfig.BAG_CHILD_SCREEN.component}
                options={({ route, navigation }: any) => getHeaderOptions(MeStackConfig.BAG_CHILD_SCREEN.title)}
            />
            <Stack.Screen
                name={MeStackConfig.BAG_PARTNER_SCREEN.name}
                component={MeStackConfig.BAG_PARTNER_SCREEN.component}
                options={({ route, navigation }: any) => getHeaderOptions(MeStackConfig.BAG_PARTNER_SCREEN.title)}
            />
        </Stack.Navigator>
    )
}