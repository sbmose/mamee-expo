// @ts-ignore
import React, {Component, useState} from 'react';
import {AsyncStorage, Dimensions, Image, SafeAreaView, TouchableOpacity, useColorScheme} from 'react-native';
import {StyleSheet, View, ScrollView, TextInput, Text} from 'react-native';

import {Theme, ThemeStyles} from "../themes/default";
import Today from "../components/Today";
import Welcome from "../components/Welcome";
import StatusBoard from "../components/StatusBoard";
import Photos from "../components/Photos";
import HistoryStatus from "../components/HistoryStatus";
import GoBack from "../components/GoBack";



export default class Weight extends Component<{ navigation: any }> {


    componentDidMount(): void {

    }

    constructor(props:any) {
        super(props);
        this.state = {

        };
    }

    render() {
        return (
            <View style={ThemeStyles.applicationBackground}>
                <ScrollView style={[ThemeStyles.container,]}>
                    <GoBack onPress={() => this.props.navigation.navigate('MenuMe')}  label={'Váha'} style={{}} />
                    <View style={{paddingBottom: 100}}>

                    </View>
                </ScrollView>
            </View>
        );
    }
}
