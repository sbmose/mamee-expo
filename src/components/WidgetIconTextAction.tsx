import React, {Component} from "react";
import {Image, Text, TouchableOpacity, View} from "react-native";
import {Theme, ThemeStyles} from "../themes/default";


export default class WidgetIconTextAction extends Component <{ navigation: any, label: string, style: any, labelStyle?:any, textStyle?:any, icon: any, text: string, onPress: any  }> {



    componentDidMount(): void {

    }

    constructor(props: any) {
        super(props);
    }


    render() {
        return (
            <View style={[this.props.style,{backgroundColor: Theme.white,flexDirection:'row', borderRadius: 10,marginTop: 10,padding:15}]}>
                <Image source={this.props.icon} style={{width: 32,height: 32}}/>
                <View style={{flexDirection:'column', marginLeft: 10}}>
                    <Text  style={[{fontSize: 18, fontWeight: 'normal', color: Theme.black, marginTop: 2, marginRight: 15, flex: 1, flexWrap: 'wrap'},this.props.labelStyle]}>{this.props.label}</Text>
                    <Text  style={[{fontSize: 12, fontWeight: 'normal', color: Theme.black, marginTop: 2, marginRight: 15, flex: 1, flexWrap: 'wrap'},this.props.textStyle]}>{this.props.text}</Text>
                    <TouchableOpacity onPress={this.props.onPress} style={{backgroundColor: Theme.pink, left: '-10%', width: '98%', marginTop: 20,padding: 20,borderRadius: 5}}>
                        <Text style={{color: Theme.white,textAlign: 'center',fontSize: 16}}>Naplánovať aktivitu do kalendára</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}
