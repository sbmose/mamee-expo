// @ts-ignore

import React, { Component, useState } from 'react';
import {
    Animated,
    AsyncStorage,
    Dimensions,
    Image,
    Route,
    SafeAreaView,
    TouchableOpacity,
    useColorScheme
} from 'react-native';
import { StyleSheet, View, ScrollView, TextInput, Text } from 'react-native';

import { Theme, ThemeStyles } from "../themes/default";

import { SceneMap, TabView } from "react-native-tab-view";
import Constants from "expo-constants";

const data = {
    'mother': [
        {
            name: 'Základné',
            items: [
                'item1',
                'item2',
                'item3',
                'item4',
                'item5',
                'item6',
                'item7',
                'item8',
                'item9'
            ]
        },
        {
            name: 'Na spanie',
            items: [
                'item1',
                'item2',
                'item3',
                'item4',
                'item5',
                'item6',
                'item7',
                'item8',
                'item9'
            ]
        }
    ],
    'child': [
        {
            name: 'Základné',
            items: [
                'item1',
                'item2',
                'item3',
                'item4',
                'item5',
                'item6',
                'item7',
                'item8',
                'item9'
            ]
        },
        {
            name: 'Na spanie',
            items: [
                'item1',
                'item2',
                'item3',
                'item4',
                'item5',
                'item6',
                'item7',
                'item8',
                'item9'
            ]
        }
    ]
}


interface TabProps {
    items: any[],
}

class Tab extends Component<TabProps, any> {

    constructor(props: TabProps) {
        super(props);
        this.state = {
            favorites: []
        }
        this.toggleFavorite = this.toggleFavorite.bind(this);
    }

    toggleFavorite(index: string) {
        if (this.state.favorites.includes(index)) {
            let favorites = this.state.favorites.filter((i: string) => {
                return i != index
            })
            this.setState({ favorites: favorites });
        } else {
            let favorites = this.state.favorites;
            favorites.push(index);
            this.setState({ favorites: favorites });
        }
    }

    render() {
        return (
            <ScrollView>
                <View style={{ paddingBottom: 150, paddingTop: 20 }}>
                    {this.props.items.map((group: any) => {
                        return (
                            <View key={group.name}>
                                <Text style={{
                                    fontSize: 18,
                                    color: Theme.gray,
                                    fontWeight: 'bold',
                                    padding: 10
                                }}>{group.name}</Text>
                                <View style={{ backgroundColor: Theme.white, borderRadius: 10 }}>
                                    {group.items.map((item: any, index: any) => {
                                        return (<TouchableOpacity onPress={() => {
                                            this.toggleFavorite(group.name + index)
                                        }}>
                                            <View style={{
                                                height: 40,
                                                margin: 10,
                                                flexDirection: 'row',
                                                borderBottomWidth: group.items.length - 1 > index ? 1 : 0,
                                                borderBottomColor: Theme.lightgray
                                            }}>
                                                <Text style={{
                                                    marginTop: 5,
                                                    marginBottom: 5,
                                                    color: Theme.black,
                                                    flex: 0.95
                                                }}>{item}</Text>

                                                <Image style={{
                                                    marginTop: 0, marginBottom: 0,
                                                    width: 32,
                                                    height: 32,
                                                    resizeMode: 'stretch',
                                                }}
                                                    source={this.state.favorites.includes(group.name + index) ? require('../../assets/checked.png') : require('../../assets/unchecked.png')} />
                                            </View>
                                        </TouchableOpacity>
                                        );
                                    })}
                                </View>
                            </View>)
                    })}
                </View>
            </ScrollView>
        );
    }
}

let
    favorites = [];


interface NamesState {
    index: number;
    routes: any;
    favorites: number[];
}

export default class BuyList extends Component<{ navigation: any }, NamesState> {


    componentDidMount(): void {

    }

    constructor(props: any) {
        super(props);
        this.state = {
            index: 0,
            favorites: [],
            routes: [
                { key: 'child', title: 'Dieťa' },
                { key: 'mother', title: 'Matka' },
            ],
        };
    }

    _handleIndexChange = (index: number) => this.setState({ index });

    _renderTabBar = (props: any) => {
        const inputRange = props.navigationState.routes.map((x: Route, i: number) => i);

        return (
            <View style={styles.tabBar}>
                {props.navigationState.routes.map((route: Route, i: number) => {
                    const opacity = props.position.interpolate({
                        inputRange,
                        outputRange: inputRange.map((inputIndex: number) =>
                            inputIndex === i ? 1 : 0.5
                        ),
                    });

                    return (
                        <TouchableOpacity
                            key={'tab' + i}
                            style={[styles.tabItem, {
                                borderBottomWidth: 1,
                                borderBottomColor: this.state.index == i ? Theme.pink : Theme.gray
                            }]}
                            onPress={() => this.setState({ index: i })}>
                            <Animated.Text style={{ opacity }}>{route.title}</Animated.Text>
                        </TouchableOpacity>
                    );
                })}
            </View>
        );
    };

    _renderScene = SceneMap({
        child: () => {
            return (<Tab key={'child'} items={data.child} />);
        },
        mother: () => {
            return (<Tab key={'mother'} items={data.mother} />);
        },
    });

    render() {

        return (
            <View style={[ThemeStyles.applicationBackground, ThemeStyles.container]}>
                <View style={styles.container}>
                    <TabView
                        navigationState={this.state}
                        renderScene={this._renderScene}
                        renderTabBar={this._renderTabBar}
                        onIndexChange={this._handleIndexChange}
                    />
                </View>

            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        height: '100%'
    },
    tabBar: {
        flexDirection: 'row',
        paddingTop: Constants.statusBarHeight,
    },
    tabItem: {
        flex: 1,
        alignItems: 'center',
        padding: 16,
    },
});