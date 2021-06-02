// @ts-ignore
<<<<<<< HEAD
import React, {Component, useState} from 'react';
import {Dimensions, ScrollView, Text, TouchableOpacity, View} from 'react-native';
=======
import React, { Component, useState } from 'react';
import { Dimensions, ScrollView, Text, View } from 'react-native';
>>>>>>> e940fca4de51f66a5cb1c33595649ee8cbbac24e

import { Theme, ThemeStyles } from "../themes/default";

import { LineChart } from "react-native-chart-kit";
import WidgetIcon from "../components/WidgetIcon";

const data = [
    {
        weight: 48.5,
        date: "29. 7",
        label: "29. júla 2019"
    },
    {
        weight: 51,
        date: "14. 8",
        label: "14. augusta 2019"
    },
    {
        weight: 53,
        date: "01. 9",
        label: "01. septembra 2019"
    },
    {
        weight: 54,
        date: "16. 9",
        label: "16. septembra 2019"
    },
];

export default class Weight extends Component<{ navigation: any }, any> {


    componentDidMount(): void {

    }

    constructor(props: any) {
        super(props);
        let dates = data.map((e) => {
            return e.date
        });
        let weights = data.map((e) => {
            return e.weight
        });
        let labels = data.map((e) => {
            return e.label
        });

        this.state = {
            dates: dates,
            weights: weights,
            labels: labels
        };
    }


    render() {
        return (
            <View style={[ThemeStyles.applicationBackground, ThemeStyles.container]}>
<<<<<<< HEAD
                <GoBack onPress={() => this.props.navigation.navigate('MenuMe')} label={'Váha'} style={{}}/>

=======
>>>>>>> e940fca4de51f66a5cb1c33595649ee8cbbac24e
                <ScrollView style={{}}>
                    <View style={{ paddingBottom: 50 }}>
                        <Text style={{ fontSize: 22, fontWeight: 'bold', marginBottom: 20 }}>Vývoj váhy</Text>
                        <LineChart
                            data={{
                                labels: this.state.dates,
                                datasets: [
                                    {
                                        data: this.state.weights
                                    }
                                ]
                            }}
                            width={Dimensions.get("window").width - 45} // from react-native
                            height={220}
                            yAxisLabel=""
                            yAxisSuffix=" kg"
                            yAxisInterval={1} // optional, defaults to 1
                            chartConfig={{
                                backgroundColor: Theme.white,
                                decimalPlaces: 2, // optional, defaults to 2dp
                                backgroundGradientFrom: Theme.white,
                                backgroundGradientTo: Theme.white,
                                color: (opacity = 1) => Theme.pink,
                                labelColor: (opacity = 1) => Theme.black,
                                style: {
                                    borderRadius: 16
                                },
                                propsForDots: {
                                    r: "6",
                                    strokeWidth: "2",
                                    stroke: Theme.pink
                                }
                            }}
                            style={{
                                marginVertical: 8,
                                borderRadius: 16,
                            }}
                        />
                        <View>
                            <View style={{paddingTop: 10}}>
                                <TouchableOpacity onPress={()=> {this.props.navigation.navigate('WeightAdd')}} style={{flexDirection: 'row'}}><Text style={{color: Theme.lightgreen, textAlign: "right",flex: 1}}>Pridať záznam</Text></TouchableOpacity>
                            </View>
                            {data.map((item: any) => {
                                return (<View style={{ marginBottom: 20 }}>
                                    <Text style={{
                                        color: Theme.gray,
                                        fontWeight: 'bold',
                                        fontSize: 16
                                    }}>{item.label}</Text>
                                    <WidgetIcon icon={require('../../assets/kalendarkruh.png')}
                                        navigation={this.props.navigation} text={item.weight + " kg"}
                                        style={{}} />
                                </View>);
                            })}
                        </View>
                    </View>
                </ScrollView>
            </View>
        );
    }
}
