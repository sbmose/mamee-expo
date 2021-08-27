import React, {Component} from "react";
import {Image, Text, TouchableOpacity, View} from "react-native";
import {Theme, ThemeStyles} from "../themes/default";


export default class Widget extends Component <{ navigation: any, text: string, style: any }> {



    componentDidMount(): void {

    }

    constructor(props: any) {
        super(props);
    }


    render() {
        return (
            <View style={[this.props.style,{backgroundColor: Theme.white,flexDirection:'row', borderRadius: 10,marginTop: 10,padding:15}]}>
                <Image source={require('../../assets/info.png')} style={{width: 32,height: 32}}/>
                <View style={{flexDirection:'column', marginLeft: 10}}>
                    <Text  style={{fontSize: 12,color: Theme.black, marginRight: 15,flex: 1, flexWrap: 'wrap'}}>{this.props.text}</Text>
                </View>
            </View>
        );
    }
}
