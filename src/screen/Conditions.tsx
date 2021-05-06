// @ts-ignore
import React, {Component, useState} from 'react';
import {AsyncStorage, Dimensions, Image, SafeAreaView, TouchableOpacity, useColorScheme} from 'react-native';
import {StyleSheet, View, ScrollView, TextInput, Text} from 'react-native';

import {Theme, ThemeStyles} from "../themes/default";




export default class Conditions extends Component<{ navigation: any }> {


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
                <ScrollView>
                    <View style={ThemeStyles.container}>
                        <TouchableOpacity style={[{flexDirection:'row'}]} onPress={
                            () => {
                                this.props.navigation.goBack();
                            }
                        }>
                            <Image source={require('../../assets/Back.png')}/>
                            <Text style={{fontSize: 18,marginLeft: 15,top: -4}}>Podmienky používania aplikácie</Text>
                        </TouchableOpacity>
                        <Text style={{padding: 15}}>
                            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
                        </Text>
                    </View>
                </ScrollView>
            </View>
        );
    }
}
