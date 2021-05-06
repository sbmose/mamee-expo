import React, {Component} from "react";
import {Image, Text, View} from "react-native";
import {ThemeStyles} from "../themes/default";


export default class Welcome extends Component <{ navigation: any,name: string,photo: any,style: any }> {


    componentDidMount(): void {

    }

    constructor(props:any) {
        super(props);
    }

    render() {
        return (
            <View style={this.props.style}>
                <Text style={{flex: 1,fontSize: 32,fontWeight:'bold',top: 5}}>Ahoj, {this.props.name}</Text>
                <Image style={{alignSelf: 'flex-end',resizeMode:'stretch',width: 32,height: 32}}source={this.props.photo}/>
            </View>
        );
    }
}
