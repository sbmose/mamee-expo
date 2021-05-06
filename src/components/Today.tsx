import React, {Component} from "react";
import {Text, View} from "react-native";


export default class Today extends Component<{ day: string, date: string, style: any }> {


    componentDidMount(): void {

    }

    constructor(props: any) {
        super(props);
    }

    render() {
        return (
            <View>
                <Text style={this.props.style}>{this.props.day}, {this.props.date}</Text>
            </View>
        );
    }
}
