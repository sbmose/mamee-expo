import React, {Component} from "react";
import {Text, View} from "react-native";
import {Theme} from "../themes/default";


export default class ContractionMonitor extends Component<{ navigation: any, style: any }> {


    componentDidMount(): void {

    }

    constructor(props: any) {
        super(props);
    }

    render() {
        return (
            <View style={[this.props.style, {padding: 15}]}>
                <Text style={{fontSize: 18, color: Theme.white}}>Monitor kontrakcii</Text>
            </View>
        );
    }
}
