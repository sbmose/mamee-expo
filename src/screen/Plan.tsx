// @ts-ignore
import React, {Component, useState} from 'react';
import {AsyncStorage, Dimensions, Image, SafeAreaView, TouchableOpacity, useColorScheme} from 'react-native';
import {StyleSheet, View, ScrollView, TextInput, Text} from 'react-native';

import {Theme, ThemeStyles} from "../themes/default";
import GoBack from "../components/GoBack";
import GoBackPhoto from "../components/GoBackPhoto";




export default class Plan extends Component<{ navigation: any }> {


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
                <GoBackPhoto onPress={() => this.props.navigation.navigate('MenuMe')} label={'Pôrodný plán'} style={{}}/>
                <Text style={{color: Theme.black, fontSize: 12, padding:10, marginTop: 20}}>Začni písať alebo pomocou ikony fotoaparátu vpravo hore odfoť svoj rukou napísaný plán.</Text>
            </View>
        );
    }
}
