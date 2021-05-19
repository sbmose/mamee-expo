import React, {Component} from "react";
import {Image, Text, TouchableOpacity, View} from "react-native";
import {Theme, ThemeStyles} from "../themes/default";


export default class WidgetSunar extends Component <{ navigation: any, time: string, text: string, style: any, icon: any }> {



    componentDidMount(): void {

    }

    constructor(props: any) {
        super(props);
    }


    render() {
        return (
            <View style={[this.props.style,{backgroundColor: Theme.white,flexDirection:'row', borderRadius: 10,marginTop: 10,padding:15}]}>
                <Image source={this.props.icon} style={{width: 32,height: 32, marginTop: 8}}/>
                <View style={{flexDirection:'column', marginLeft: 10}}>
                    <Text  style={{fontSize: 18, fontWeight: 'bold', color: Theme.black, marginRight: 15, flex: 1, flexWrap: 'wrap'}}>{this.props.time}</Text>
                    <Text  style={{fontSize: 16, fontWeight: 'normal', color: Theme.gray, marginRight: 15, flex: 1, flexWrap: 'wrap'}}>{this.props.text}</Text>
                </View>
            </View>
        );
    }
}
