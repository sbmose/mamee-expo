// @ts-ignore
import React, { Component, useState } from 'react';
import { ScrollView, TouchableOpacity, View, Text } from 'react-native';

import { Theme, ThemeStyles } from "../themes/default";
import WidgetIcon from "../components/WidgetIcon";


export default class AdministrationDetail extends Component<{ route: any, navigation: any }, any> {


    componentDidMount(): void {

    }

    constructor(props: any) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <View style={[ThemeStyles.applicationBackground, ThemeStyles.container]}>
                <ScrollView>
                    <View style={{ paddingBottom: 150, paddingTop: 30 }}>
                        {!this.props.route.params.item.finished ? null : (
                            <WidgetIcon navigation={this.props.navigation} text={'Vybavené'}
                                style={{}} textStyle={{ fontSize: 16, paddingRight: 15, top: 2 }}
                                icon={require('../../assets/kruhchecked.png')} />
                        )}

                        <Text style={{ color: Theme.gray, fontWeight: 'bold', paddingBottom: 5, paddingTop: 10 }}>Popis dokumentu</Text>
                        <WidgetIcon navigation={this.props.navigation} text={this.props.route.params.item.text}
                            style={{}} textStyle={{ fontSize: 12, paddingRight: 15 }}
                            icon={require('../../assets/info.png')} />
                        <Text style={{ color: Theme.gray, fontWeight: 'bold', paddingBottom: 5, paddingTop: 10 }}>Kde vybavovať?</Text>
                        <WidgetIcon navigation={this.props.navigation} text={this.props.route.params.item.provider}
                            style={{}} textStyle={{ fontSize: 12, paddingRight: 15, top: 5 }}
                            icon={require('../../assets/administrativakruh.png')} />
                        <TouchableOpacity onPress={() => { this.props.route.params.onPlan(this.props.route.params.index) }} style={{ backgroundColor: Theme.pink, marginTop: 20, padding: 20, borderRadius: 5 }}>
                            <Text style={{ color: Theme.white, textAlign: 'center', fontSize: 16 }}>Naplánovať do kalendára</Text>
                        </TouchableOpacity>
                        {this.props.route.params.item.finished ? null : (
                            <TouchableOpacity onPress={() => { this.props.route.params.onToggle(this.props.route.params.index) }} style={{ backgroundColor: Theme.white, marginTop: 20, padding: 20, borderRadius: 5 }}>
                                <Text style={{ color: Theme.lightgreen, textAlign: 'center', fontSize: 16 }}>Označiť ako vybavené</Text>
                            </TouchableOpacity>
                        )}
                    </View>
                </ScrollView>
            </View>
        );
    }
}
