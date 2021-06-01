// @ts-ignore
import React, { Component, useState } from 'react';
import { AsyncStorage, Dimensions, Image, SafeAreaView, TouchableOpacity, useColorScheme } from 'react-native';
import { StyleSheet, View, ScrollView, TextInput, Text } from 'react-native';

import { Theme, ThemeStyles } from "../themes/default";
import GoBack from "../components/GoBack";
import { CHILD_MENU_SCREEN } from '../navigation/ScreenNames';




export default class Activities extends Component<{ navigation: any }> {


    componentDidMount(): void {

    }

    constructor(props: any) {
        super(props);
        this.state = {

        };
    }

    render() {
        return (
            <View style={[ThemeStyles.applicationBackground, ThemeStyles.container]}>
            </View>
        );
    }
}
