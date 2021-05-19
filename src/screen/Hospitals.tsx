// @ts-ignore
import React, {Component, useState} from 'react';
import {AsyncStorage, Dimensions, Image, SafeAreaView, TouchableOpacity, useColorScheme} from 'react-native';
import {StyleSheet, View, ScrollView, TextInput, Text} from 'react-native';

import {Theme, ThemeStyles} from "../themes/default";
import GoBack from "../components/GoBack";




export default class Hospitals extends Component<{ navigation: any }> {


    componentDidMount(): void {

    }

    constructor(props:any) {
        super(props);
        this.state = {

        };
    }

    render() {
        return (
            <View style={[ThemeStyles.applicationBackground, ThemeStyles.container]}>
                <GoBack onPress={() => this.props.navigation.navigate('MenuMe')} label={'Zoznam pôrodníc'} style={{}}/>
            </View>
        );
    }
}
