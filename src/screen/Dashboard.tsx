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



export default class Dashboard extends Component<{ navigation: any }> {


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
                    <View style={{paddingBottom: 100}}>
                        <Today day="Streda" date="2. októbra" style={ThemeStyles.today}/>
                        <Welcome navigation={this.props.navigation} name="Janka" photo={require('../../assets/profil.png')} style={ThemeStyles.welcome}/>
                        <StatusBoard navigation={this.props.navigation} message="Si v treťom trimestri tehotenstva" day="202" week="28" style={ThemeStyles.statusBoard}/>
                        <Photos navigation={this.props.navigation} photos={[require('../../assets/fotodash.png')]} style={ThemeStyles.dashboardPhotos}/>
                        <HistoryStatus navigation={this.props.navigation} day="2" weight="64" message="Tvoje bábätko meria 36 centimetrov a váži 1200 gramov, čo je približne tretina odhadovanej pôrodnej hmotnosti. Týždenne narastie o 1 až 2 centimetre. Je shopné pocitovať bolesť a na podnety reaguje podobne ako narodené dieťa."/>

                    </View>
                </ScrollView>
            </View>
        );
    }
}
