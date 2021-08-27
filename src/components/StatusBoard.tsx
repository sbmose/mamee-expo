import React, {Component} from "react";
import {Text, View} from "react-native";
import {Theme} from "../themes/default";


export default class StatusBoard extends Component<{ navigation: any, message: string, day: any, week: string, style: any }> {


    componentDidMount(): void {

    }

    constructor(props: any) {
        super(props);
    }

    render() {
        return (
            <View style={[this.props.style,{padding: 15}]}>
                <Text style={{fontSize: 18,color: Theme.white}}>{this.props.message}</Text>
                <View style={{ flex: 1,
                    justifyContent: 'flex-end',
                    marginTop: 80,flexDirection:'row'}}>
                    <View style={{flex: 1, flexDirection:'column'}}>
                        <Text style={{fontSize: 18,color: Theme.white, textAlign:'left'}}>Deň</Text>
                        <Text style={{fontSize: 28,fontWeight:'bold',color: Theme.white, textAlign:'left'}}>{this.props.day}</Text>
                    </View>
                    <View style={{flex: 1, flexDirection:'column'}}>
                        <Text style={{fontSize: 18,color: Theme.white,textAlign:'right'}}>Týždeň</Text>
                        <Text style={{fontSize: 28,fontWeight:'bold',color: Theme.white,textAlign:'right'}}>{this.props.week}</Text>
                    </View>
                </View>
            </View>
        );
    }
}
