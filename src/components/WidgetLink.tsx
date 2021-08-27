import React, {Component} from "react";
import {Image, Text, TouchableOpacity, View} from "react-native";
import {Theme, ThemeStyles} from "../themes/default";


export default class WidgetLink extends Component <{ text: string, style: any, onPress: any }> {



    componentDidMount(): void {

    }

    constructor(props: any) {
        super(props);
    }


    render() {
        return (
            <TouchableOpacity onPress={this.props.onPress} style={[{backgroundColor: Theme.white,flexDirection:'row', borderRadius: 10,marginTop: 10,padding:15}]}>
                <View style={[this.props.style,{flexDirection:'row', marginLeft: 10, flex: 1}]}>
                    <Text  style={{fontSize: 12,color: Theme.black, marginRight: 15, flex: 0.99,flexWrap: 'wrap'}}>{this.props.text}</Text>
                    <Text  style={{fontSize: 12,color: Theme.pink, marginRight: 15,flexWrap: 'wrap'}}>Detail</Text>
                </View>
            </TouchableOpacity>
        );
    }
}
