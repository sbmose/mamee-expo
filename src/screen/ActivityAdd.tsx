// @ts-ignore
import React, {Component, useState} from 'react';
import {AsyncStorage, Dimensions, Image, SafeAreaView, TouchableOpacity, useColorScheme} from 'react-native';
import {StyleSheet, View, ScrollView, TextInput, Text} from 'react-native';

import {Theme, ThemeStyles} from "../themes/default";
import GoBack from "../components/GoBack";
import GoBackPhoto from "../components/GoBackPhoto";
import ConfirmCancelNavigation from "../components/ConfirmCancelNavigation";
import {Input} from "native-base";




export default class ActivityAdd extends Component<{ navigation: any }> {


    componentDidMount(): void {

    }

    constructor(props:any) {
        super(props);
        this.state = {

        };
        this.onFinish = this.onFinish.bind(this);
    }

    onFinish() {
        this.props.navigation.navigate('Activities');
    }

    render() {
        return (
            <View style={[ThemeStyles.applicationBackground, ThemeStyles.container]}>
                <ConfirmCancelNavigation onCancel={() => this.props.navigation.navigate('Activities')} label={'Nová udalosť'}  cancelStyle={{fontSize: 14, color: Theme.pink}} finishStyle={{fontSize: 14, color: Theme.pink}} onFinish={this.onFinish} labelCancel={'Zrušiť'} labelFinish={'Hotovo'}/>
                <View style={{marginTop: 30,backgroundColor: Theme.white, padding: 15, borderRadius:10}}>
                    <View style={{
                        height: 40,
                        margin: 10,
                        flexDirection: 'row',
                        borderBottomWidth:  1 ,
                        borderBottomColor: Theme.lightgray
                    }}>
                        <Text style={{
                            marginTop: 5,
                            marginBottom: 5,
                            color: Theme.black,
                            flex: 0.4
                        }}>Názov</Text>
                        <TextInput selectionColor={Theme.pink} style={{
                            marginTop: 0,
                            marginBottom: 10,
                            color: Theme.black,
                            flex: 0.6,
                            top: 0,
                            fontSize: 16
                        }}/>
                    </View>
                    <View style={{
                        height: 40,
                        margin: 10,
                        flexDirection: 'row',
                        borderBottomWidth:  1 ,
                        borderBottomColor: Theme.lightgray
                    }}>
                        <Text style={{
                            marginTop: 5,
                            marginBottom: 5,
                            color: Theme.black,
                            flex: 0.4
                        }}>Dátum</Text>
                        <TextInput selectionColor={Theme.pink} style={{
                            marginTop: 0,
                            marginBottom: 10,
                            color: Theme.black,
                            flex: 0.6,
                            top: 0,
                            fontSize: 16
                        }}/>
                    </View>
                    <View style={{
                        height: 40,
                        margin: 10,
                        flexDirection: 'row',
                        borderBottomWidth:  1 ,
                        borderBottomColor: Theme.lightgray
                    }}>
                        <Text style={{
                            marginTop: 5,
                            marginBottom: 5,
                            color: Theme.black,
                            flex: 0.4
                        }}>Čas</Text>
                        <TextInput selectionColor={Theme.pink} style={{
                            marginTop: 0,
                            marginBottom: 10,
                            color: Theme.black,
                            flex: 0.6,
                            top: 0,
                            fontSize: 16
                        }}/>
                    </View>
                    <View style={{
                        height: 40,
                        margin: 10,
                        flexDirection: 'row',
                        borderBottomWidth:  0 ,
                        borderBottomColor: Theme.lightgray
                    }}>
                        <Text style={{
                            marginTop: 5,
                            marginBottom: 5,
                            color: Theme.black,
                            flex: 0.4
                        }}>Poznámky</Text>
                        <TextInput selectionColor={Theme.pink} style={{
                            marginTop: 0,
                            marginBottom: 10,
                            color: Theme.black,
                            flex: 0.6,
                            top: 0,
                            fontSize: 16
                        }}/>
                    </View>
                </View>
            </View>
        );
    }
}
