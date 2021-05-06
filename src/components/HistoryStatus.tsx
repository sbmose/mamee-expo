import React, {Component} from "react";
import {Text,Image, TouchableOpacity, View} from "react-native";
import {Theme} from "../themes/default";


export  default class HistoryStatus extends Component <{ navigation: any, day: string, weight: string, message: string }> {


    componentDidMount(): void {

    }

    constructor(props: any) {
        super(props);
    }

    render() {
        return (
            <View style={{marginTop: 20}}>
                <Text style={{fontSize: 18, color: Theme.darkGray, fontWeight:'bold'}}>Vyvoj</Text>
                <TouchableOpacity style={{backgroundColor: Theme.white,flexDirection:'row', borderRadius: 10,marginTop: 10,padding:15}}>
                    <Image source={require('../../assets/kalendarkruh.png')} style={{width: 32,height: 32}}/>
                    <View style={{flexDirection:'column', marginLeft: 10}}>
                    <Text style={{fontSize: 16,fontWeight:'bold'}}>Nasledujúcu poradňu máš o {this.props.day} dni</Text>
                    <Text  style={{fontSize: 16,color: Theme.gray}}>Zobraziť kalendár</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity style={{backgroundColor: Theme.white,flexDirection:'row', borderRadius: 10,marginTop: 10,padding:15}}>
                    <Image source={require('../../assets/kalendarkruh.png')} style={{width: 32,height: 32}}/>
                    <View style={{flexDirection:'column', marginLeft: 10}}>
                        <Text style={{fontSize: 16,fontWeight:'bold'}}>Posledná váha - {this.props.weight} kg</Text>
                        <Text  style={{fontSize: 16,color: Theme.gray}}>Pridať novú váhu</Text>
                    </View>
                </TouchableOpacity>
                <View style={{backgroundColor: Theme.white,flexDirection:'row', borderRadius: 10,marginTop: 10,padding:15}}>
                    <Image source={require('../../assets/babykruh.png')} style={{width: 32,height: 32}}/>
                    <View style={{flexDirection:'column', marginLeft: 10}}>
                        <Text style={{fontSize: 16,fontWeight:'bold'}}>Vývoj bábätka</Text>
                        <Text  style={{fontSize: 16, paddingRight: 30}}>{this.props.message}</Text>
                    </View>
                </View>
            </View>
        );
    }
}
