import React, {Component} from "react";
import {Text, TouchableOpacity, View} from "react-native";
import {Theme} from "../themes/default";

interface GoBackProps {
    labelCancel: string,
    labelFinish: string,
    label: string,
    cancelStyle: any,
    finishStyle: any,
    onCancel: any
    onFinish: any
}

export default class ConfirmCancelNavigation extends Component <GoBackProps> {


    componentDidMount(): void {

    }

    constructor(props: any) {
        super(props);
    }

    render() {
        return (
            <View style={{flexDirection: 'row'}}>
                <TouchableOpacity style={{flex: 0.2}} onPress={this.props.onCancel}>
                    <Text style={[this.props.cancelStyle,{fontSize: 18}]} >{this.props.labelCancel}</Text>
                </TouchableOpacity>
                <Text style={{
                    fontSize: 18,
                    fontWeight: 'normal',
                    color: Theme.black,
                    textAlign: 'center',
                    flex: 0.6
                }}>{this.props.label}</Text>
                <TouchableOpacity style={{flex: 0.2}} onPress={this.props.onFinish}>
                    <Text style={[this.props.finishStyle,{fontSize: 18,}]} >{this.props.labelFinish}</Text>
                </TouchableOpacity>
            </View>
        );
    }
}
