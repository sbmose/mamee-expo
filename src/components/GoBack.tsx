import React, {Component} from "react";
import {Image, Text, TouchableOpacity} from "react-native";
import {Theme} from "../themes/default";

interface GoBackProps {
    label: string,
    style: any,
    onPress: any
}

export default class GoBack extends Component <GoBackProps> {


    componentDidMount(): void {

    }

    constructor(props: any) {
        super(props);
    }

    render() {
        return (
            <TouchableOpacity style={this.props.style} onPress={this.props.onPress}>
                <Image style={{alignSelf: 'flex-start', resizeMode: 'stretch', width: 24, height: 24, padding: 8}}
                       source={require('../../assets/Back.png')}/>
                <Text style={{
                    fontSize: 32,
                    fontWeight: 'bold',
                    color: Theme.black,
                    textAlign: 'center',
                    top: -36
                }}>{this.props.label}</Text>
            </TouchableOpacity>
        );
    }
}
