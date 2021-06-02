// @ts-ignore

import React, {Component, useState} from 'react';
import {ScrollView, View} from 'react-native';



import WidgetIcon from "../components/WidgetIcon";
import WidgetIconTextAction from "../components/WidgetIconTextAction";
import { Theme, ThemeStyles } from "../themes/default";
import GoBack from "../components/GoBack";




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
                <GoBack onPress={() => this.props.navigation.navigate('MenuChild')} label={'Aktivity'} style={{}} />
                <ScrollView>
                    <View style={{paddingTop: 20, paddingBottom: 150}}>
                        <WidgetIconTextAction navigation={this.props.navigation}
                                              text={"Dieťa potrebuje pri svojom vývoji rôzne druhy aktivít. Zaručí to jeho správny psychický či fyzický rozvoj."}
                                              style={{}} labelStyle={{fontSize: 16, paddingRight: 15}}
                                              textStyle={{paddingTop: 30, fontSize: 12, paddingRight: 15}}
                                              icon={require('../../assets/info.png')}

                                              label={'Dôležitosť rôznorodých aktivít'} onPress={() => {
                            this.props.navigation.navigate('ActivityAdd')
                        }}/>
                        <WidgetIcon style={{}} navigation={this.props.navigation} text={'Športy'}
                                    icon={require('../../assets/aktivitykruh.png')}/>
                        <WidgetIcon style={{}} navigation={this.props.navigation} text={'Vzdelávanie'}
                                    icon={require('../../assets/aktivitykruh.png')}/>
                    </View>
                </ScrollView>
            </View>
        );
    }
}
