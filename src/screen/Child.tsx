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
import MenuButton from "../components/MenuButton";
import MeBar from "../components/MeBar";




export default class Child extends Component<{ navigation: any }> {


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
                    <MeBar navigation={this.props.navigation} name="Dieťa" photo={require('../../assets/profil.png')} style={[ThemeStyles.welcome,{padding: 10,marginTop: 15}]}/>
                    <Text style={{fontSize: 14, color: Theme.gray,padding: 10}}>Maroš</Text>
                    <View style={{paddingBottom: 100, flex: 1,
                        flexDirection: 'row',
                        flexWrap: 'wrap',
                        alignItems: 'flex-start' }}>
                        <MenuButton icon={require('../../assets/stravakruh.png')} label={'Strava'}  style={{}} onPress={() => {this.props.navigation.navigate('Food')}}/>
                        <MenuButton icon={require('../../assets/fotkykruh.png')} label={'Fotky'}  style={{}} onPress={() => {this.props.navigation.navigate('ChildPhotos')}}/>
                        <MenuButton icon={require('../../assets/administrativakruh.png')} label={'Administratíva'}  style={{}} onPress={() => {this.props.navigation.navigate('ChildAdministration')}}/>
                        <MenuButton icon={require('../../assets/fotkykruh.png')} label={'Aktivity'}  style={{}} onPress={() => {this.props.navigation.navigate('Activities')}}/>
                    </View>
                </ScrollView>
            </View>
        );
    }
}
