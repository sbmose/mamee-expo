import {Image, Text, TouchableOpacity, View} from "react-native";
import {Theme} from "../themes/default";
import React from "react";

interface MenuButtonProps {
    icon: any;
    label: string;
    style: any;
    onPress: any;
}

export default class MenuButton extends React.Component<MenuButtonProps, any> {

    constructor(props: Readonly<any> | any) {
        super(props);
    }


    render() {
        return (<TouchableOpacity style={[{
            backgroundColor: Theme.white,
            flexDirection: 'row',
            borderRadius: 10,
            margin: '2%',
            padding: 15,
            width: '46%',
            aspectRatio: 1,
        }, this.props.style ? this.props.style : {}]} onPress={this.props.onPress}
        >
            <View style={{flexDirection: 'column',flexGrow: 1,flex: 2}}>
            <Image source={this.props.icon} style={{width: 64, height: 64, alignSelf: 'center', marginTop:'20%', marginBottom:'20%'}}/>
            <Text style={{fontSize: 13, color: Theme.black, textAlign: 'center'}}>{this.props.label}</Text>
            </View>
        </TouchableOpacity>);
    }
}