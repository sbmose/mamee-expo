import React, {Component} from "react";
import {Text, View} from "react-native";


export default class Name extends Component<{ name: string, date: string, favorite: boolean, style: any }> {


    componentDidMount(): void {

    }

    constructor(props: any) {
        super(props);
    }

    render() {
        return (
            <View>
                <Text style={this.props.style}>{this.props.name}, {this.props.date}</Text>
            </View>
        );
    }
}
