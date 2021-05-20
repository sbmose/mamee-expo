// @ts-ignore
import React, {Component, useState} from 'react';
import {AsyncStorage, Dimensions, Image, SafeAreaView, TouchableOpacity, useColorScheme} from 'react-native';
import {StyleSheet, View, ScrollView, TextInput, Text} from 'react-native';

import {Theme, ThemeStyles} from "../themes/default";
import GoBack from "../components/GoBack";


const data = {
    "in": [ {
        "name": "Doklady",
        "items": [
            {
                name: "občiansky preukaz"
            },
            {
                name: "tehotenská knižka"
            },
            {
                name: "pôrodný plán (viac kópii)"
            },
            {
                name: "kartička poistenca"
            },
            {
                name: "kópia sobášneho listu\n" +
                    "(prehlásenie o otcovstve)"
            },
            {
                name: "kontakt na pôrodníka"
            },
            {
                name: "kontakt na pediatra"
            }
        ]},
        { "name": "Oblečenie",
        "items": [
            {
                name: "krátka nočná košeľa na pôrod"
            },
            {
                name: "nočná košeľa s\n"+
                "rozopínaním na dojčenie"
            },
            {
                name: "župan značky ECCO"
            },
            {
                name: "ponožky"
            },
            {
                name: "nohavičky"
            },
            {
                name: "veľký a malý uterák"
            },
            {
                name: "pohodlné prezuvky"
            }
        ]},
        {
        "name": "Hygienické potreby",
        "items":[
            {
                name: "hygienické vložky"
            },
            {
                name: "podložky pre inkontinentných"
            },
            {
                name: "telový šampón"
            },
            {
                name: "zubná kefka a pasta"
            },
            {
                name: "šampón na vlasy"
            },
            {
                name: "hrebeň"
            },
            {
                name: "vreckovky"
            },
            {
                name: "pomáda na pery"
            },
            {
                name: "okuliare (nie šošovky)"
            },
            {
                name: "pravidelne užívané lieky"
            },
            {
                name: "miska, príbor, šálka, pohár"
            }
        ]}
    ],
    "out": [
        {


            "name": "Oblečenie",
            "items": [
                {
                    name: ""
                }
            ]
        }
        ]
}

export default class BagMother extends Component<{ navigation: any }> {


    componentDidMount(): void {

    }

    constructor(props:any) {
        super(props);
        this.state = {

        };
    }

    render() {
        return (
            <View style={[ThemeStyles.applicationBackground, ThemeStyles.container]}>
                <GoBack onPress={() => this.props.navigation.navigate('Bag')} label={'Zdravotné informacie'} style={{}}/>
            </View>
        );
    }
}
