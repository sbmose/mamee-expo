// @ts-ignore
import React, { Component, useState } from 'react';
import { TouchableOpacity, View } from 'react-native';

import { ThemeStyles } from "../themes/default";
import WidgetIcon from "../components/WidgetIcon";


export default class Bag extends Component<{ navigation: any }> {


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
                <TouchableOpacity onPress={() => this.props.navigation.navigate('BagMother')}>
                    <WidgetIcon navigation={this.props.navigation} text={"Pre matku"} style={{ marginTop: 5 }}
                        icon={require("../../assets/prematku.svg")} />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => this.props.navigation.navigate('BagChild')}>
                    <WidgetIcon navigation={this.props.navigation} text={"Pre dieťa"} style={{ marginTop: 5 }}
                        icon={require("../../assets/predieta.svg")} />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => this.props.navigation.navigate('BagPartner')}>
                    <WidgetIcon navigation={this.props.navigation} text={"Pre partnera"} style={{ marginTop: 5 }}
                        icon={require("../../assets/prepartnera.svg")} />
                </TouchableOpacity>
            </View>
        );
    }
}
