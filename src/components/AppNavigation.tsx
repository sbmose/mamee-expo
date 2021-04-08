import React, {Component} from "react";
import Login from "../screen/Authentication/Login";
import ResetPassword from "../screen/Authentication/ResetPassword";
import Register from "../screen/Authentication/Register";
import {createStackNavigator} from "@react-navigation/stack";

interface AppNavigationState {
    loggedIn: boolean
}

const Stack = createStackNavigator();

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
        return this.state.loggedIn ? (null) : (<Stack.Navigator headerMode="none">
            <Stack.Screen name="Login"  component={() => <Login navigation={this.props.navigation}
                                                               onLogin={this.handleLogin}/>}/>
            <Stack.Screen name="Password Reset" component={ResetPassword}/>
            <Stack.Screen name="Register" component={() => <Register navigation={this.props.navigation}
                                                                     onLogin={this.handleLogin} />}/>
        </Stack.Navigator>);
    }
}