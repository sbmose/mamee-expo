import React, {Component} from "react";
import {Image} from 'react-native';
import Login from "../screen/Authentication/Login";
import ResetPassword from "../screen/Authentication/ResetPassword";
import Register from "../screen/Authentication/Register";
import {createStackNavigator} from "@react-navigation/stack";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import {Theme, ThemeStyles} from "../themes/default";
import Dashboard from "../screen/Dashboard";
import Me from "../screen/Me";
import Child from "../screen/Child";
import Gallery from "../screen/Gallery";
import Conditions from "../screen/Conditions";
import Profile from "../screen/Profile";
import Administration from "../screen/Administration";
import Loss from "../screen/Loss";
import Hospitals from "../screen/Hospitals";
import Names from "../screen/Names";
import BuyList from "../screen/BuyList";
import Bag from "../screen/Bag";
import Plan from "../screen/Plan";
import PSMCalendar from "../screen/PSMCalendar";
import Photos from "../screen/Photos";
import Calendar from "../screen/Calendar";
import Health from "../screen/Health";
import Activities from "../screen/Activities";
import ChildAdministration from "../screen/ChildAdministration";
import ChildPhotos from "../screen/ChildPhotos";
import Food from "../screen/Food";
import Weight from "../screen/Weight";


interface AppNavigationState {
    loggedIn: boolean
}

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function DashboardStack() {
    return (
        <Stack.Navigator headerMode="none">
            <Stack.Screen
                name="Dashboard"
                component={Dashboard}
            />
            <Stack.Screen
                name="Gallery"
                component={Gallery}
            />
        </Stack.Navigator>
    )
}

function MeStack(props: any) {
    return (
        <Stack.Navigator headerMode="none">
            <Stack.Screen
                name="MenuMe"
                component={() => {
                    return (<Me navigation={props.navigation}/>);
                }}
            />
            <Stack.Screen
                name="Profile"
                component= {() => {
            return (<Profile navigation={props.navigation}/>);
            }}
            />
            <Stack.Screen
                name="Weight"
                component= {() => {
                    return (<Weight navigation={props.navigation}/>);
                }}
            />
            <Stack.Screen
                name="Health"
                component= {() => {
                    return (<Health navigation={props.navigation}/>);
                }}
            />
            <Stack.Screen
                name="Calendar"
                component= {() => {
                    return (<Calendar navigation={props.navigation}/>);
                }}
            />
            <Stack.Screen
                name="Photos"
                component= {() => {
                    return (<Photos navigation={props.navigation}/>);
                }}
            />
            <Stack.Screen
                name="PSMCalendar"
                component= {() => {
                    return (<PSMCalendar navigation={props.navigation}/>);
                }}
            />
            <Stack.Screen
                name="Plan"
                component= {() => {
                    return (<Plan navigation={props.navigation}/>);
                }}
            />
            <Stack.Screen
                name="Bag"
                component= {() => {
                    return (<Bag navigation={props.navigation}/>);
                }}
            />
            <Stack.Screen
                name="BuyList"
                component= {() => {
                    return (<BuyList navigation={props.navigation}/>);
                }}
            />
            <Stack.Screen
                name="Names"
                component= {() => {
                    return (<Names navigation={props.navigation}/>);
                }}
            />
            <Stack.Screen
                name="Hospitals"
                component= {() => {
                    return (<Hospitals navigation={props.navigation}/>);
                }}
            />
            <Stack.Screen
                name="Loss"
                component= {() => {
                    return (<Loss navigation={props.navigation}/>);
                }}
            />
            <Stack.Screen
                name="Administration"
                component= {() => {
                    return (<Administration navigation={props.navigation}/>);
                }}
            />
        </Stack.Navigator>
    )
}


function ChildStack(props: any) {
    return (
        <Stack.Navigator headerMode="none">
            <Stack.Screen
                name="MenuChild"
                component={Child}
            />
            <Stack.Screen
                name="Food"
                component= {() => {
                    return (<Food navigation={props.navigation}/>);
                }}
            />
            <Stack.Screen
                name="ChildPhotos"
                component= {() => {
                    return (<ChildPhotos navigation={props.navigation}/>);
                }}
            />
            <Stack.Screen
                name="ChildAdministration"
                component= {() => {
                    return (<ChildAdministration navigation={props.navigation}/>);
                }}
            />
            <Stack.Screen
                name="Activities"
                component= {() => {
                    return (<Activities navigation={props.navigation}/>);
                }}
            />
        </Stack.Navigator>
    )
}

export default class AppNavigation extends Component<{ navigation: any }, AppNavigationState> {

    handleLogin(status: boolean) {
        this.setState({loggedIn: status});
    }



    constructor(props: any) {
        super(props);
        this.handleLogin = this.handleLogin.bind(this);
        this.state = {
            loggedIn: false
        }
    }

    render() {
        return !this.state.loggedIn ? (
            <Stack.Navigator headerMode="none">
                <Stack.Screen name="Login" component={() => {
                    return (<Login navigation={this.props.navigation} onLogin={this.handleLogin}/>)
                }}/>
                <Stack.Screen name="ResetPassword" component={() => {
                    return (<ResetPassword navigation={this.props.navigation}/>)
                }}/>
                <Stack.Screen name="Register" component={() => {
                    return (<Register navigation={this.props.navigation}/>)
                }}/>
                <Stack.Screen name="Conditions" component={() => {
                    return (<Conditions navigation={this.props.navigation}/>)
                }}/>
            </Stack.Navigator>) : (
            <Tab.Navigator
                lazy={false}
                initialRouteName="Dashboard"
                tabBarOptions={{
                    activeTintColor: Theme.pink,
                    showLabel: true,
                    style: ThemeStyles.bottomNavigation,
                    labelStyle: ThemeStyles.tabLabelStyle,
                    labelPosition: 'below-icon'
                }}>
                <Tab.Screen
                    name="Dashboard"
                    component={DashboardStack}
                    options={{
                        tabBarLabel: 'Domov',
                        tabBarIcon: ({ color, size }) => (
                            <Image source={require('../../assets/domov.png')}  style={ThemeStyles.tabIconStyle} tintColor={color}/>
                        ),
                    }}/>
                <Tab.Screen
                    name="Me"
                    component={MeStack}
                    options={{
                        tabBarLabel: 'Ja',
                        tabBarIcon: ({ color, size }) => (
                            <Image source={require('../../assets/mother.png')}  style={ThemeStyles.tabIconStyle} tintColor={color}/>
                        ),
                    }}/>
                <Tab.Screen
                    name="Child"
                    component={ChildStack}
                    options={{
                        tabBarLabel: 'Dieťa',
                        tabBarIcon: ({ color, size }) => (
                            <Image source={require('../../assets/baby.png')}  style={ThemeStyles.tabIconStyle} tintColor={color}/>
                        ),
                    }}/>
            </Tab.Navigator>
        );
    }
}