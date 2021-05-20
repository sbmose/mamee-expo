// @ts-ignore
import * as React from 'react';
import {Component} from 'react';
import {Animated, Image, Route, ScrollView, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Constants from 'expo-constants';
import {Theme, ThemeStyles} from "../themes/default";
import GoBack from "../components/GoBack";
import {SceneMap, TabView} from "react-native-tab-view";

const hospitals = [
    {
        'region': 'Banskobystrický kraj',
        'name': 'Nemocnica s poliklinikou Brezno',
        'email': 'email@nemocnica.sk',
        'telephone': '+421 123 123 123',
        'primar': 'MUDr. Patrik Ondrejech',
        'address': 'Štefánikova 9, Trnava, Slovensko'
    },
    {
        'region': 'Banskobystrický kraj',
        'name': 'Nemocnica s poliklinikou Brezno',
        'email': 'email@nemocnica.sk',
        'telephone': '+421 123 123 123',
        'primar': 'MUDr. Patrik Ondrejech',
        'address': 'Štefánikova 9, Trnava, Slovensko'
    },
    {
        'region': 'Banskobystrický kraj',
        'name': 'Nemocnica s poliklinikou Brezno',
        'email': 'email@nemocnica.sk',
        'telephone': '+421 123 123 123',
        'primar': 'MUDr. Patrik Ondrejech',
        'address': 'Štefánikova 9, Trnava, Slovensko'
    },
    {
        'region': 'Banskobystrický kraj',
        'name': 'Nemocnica s poliklinikou Brezno',
        'email': 'email@nemocnica.sk',
        'telephone': '+421 123 123 123',
        'primar': 'MUDr. Patrik Ondrejech',
        'address': 'Štefánikova 9, Trnava, Slovensko'
    },
    {
        'region': 'Banskobystrický kraj',
        'name': 'Nemocnica s poliklinikou Brezno',
        'email': 'email@nemocnica.sk',
        'telephone': '+421 123 123 123',
        'primar': 'MUDr. Patrik Ondrejech',
        'address': 'Štefánikova 9, Trnava, Slovensko'
    },
    {
        'region': 'Banskobystrický kraj',
        'name': 'Nemocnica s poliklinikou Brezno',
        'email': 'email@nemocnica.sk',
        'telephone': '+421 123 123 123',
        'primar': 'MUDr. Patrik Ondrejech',
        'address': 'Štefánikova 9, Trnava, Slovensko'
    },
    {
        'region': 'Bratislavský kraj',
        'name': 'Nemocnica s poliklinikou Brezno',
        'email': 'email@nemocnica.sk',
        'telephone': '+421 123 123 123',
        'primar': 'MUDr. Patrik Ondrejech',
        'address': 'Štefánikova 9, Trnava, Slovensko'
    },
    {
        'region': 'Bratislavský kraj',
        'name': 'Nemocnica s poliklinikou Brezno',
        'email': 'email@nemocnica.sk',
        'telephone': '+421 123 123 123',
        'primar': 'MUDr. Patrik Ondrejech',
        'address': 'Štefánikova 9, Trnava, Slovensko'
    },
    {
        'region': 'Bratislavský kraj',
        'name': 'Nemocnica s poliklinikou Brezno',
        'email': 'email@nemocnica.sk',
        'telephone': '+421 123 123 123',
        'primar': 'MUDr. Patrik Ondrejech',
        'address': 'Štefánikova 9, Trnava, Slovensko'
    },
    {
        'region': 'Bratislavský kraj',
        'name': 'Nemocnica s poliklinikou Brezno',
        'email': 'email@nemocnica.sk',
        'telephone': '+421 123 123 123',
        'primar': 'MUDr. Patrik Ondrejech',
        'address': 'Štefánikova 9, Trnava, Slovensko'
    },
    {
        'region': 'Bratislavský kraj',
        'name': 'Nemocnica s poliklinikou Brezno',
        'email': 'email@nemocnica.sk',
        'telephone': '+421 123 123 123',
        'primar': 'MUDr. Patrik Ondrejech',
        'address': 'Štefánikova 9, Trnava, Slovensko'
    },
    {
        'region': 'Bratislavský kraj',
        'name': 'Nemocnica s poliklinikou Brezno',
        'email': 'email@nemocnica.sk',
        'telephone': '+421 123 123 123',
        'primar': 'MUDr. Patrik Ondrejech',
        'address': 'Štefánikova 9, Trnava, Slovensko'
    },
    {
        'region': 'Bratislavský kraj',
        'name': 'Nemocnica s poliklinikou Brezno',
        'email': 'email@nemocnica.sk',
        'telephone': '+421 123 123 123',
        'primar': 'MUDr. Patrik Ondrejech',
        'address': 'Štefánikova 9, Trnava, Slovensko'
    },
]

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

    toggleFavorite(index: number) {
        if (this.state.favorites.includes(index)) {
            let favorites = this.state.favorites.filter((i: number) => {
                return i != index
            })
            this.setState({favorites: favorites});
        } else {
            let favorites = this.state.favorites;
            favorites.push(index);
            this.setState({favorites: favorites});
        }
    }

    render() {
        return (
            <ScrollView>
                <View style={{paddingBottom: 150}}>
                {this.props.items.map((group: any) => {
                    return (
                        <View key={group.region}>
                            <Text style={{
                                fontSize: 18,
                                color: Theme.gray,
                                fontWeight: 'bold',
                                padding: 10
                            }}>{group.region}</Text>
                            <View style={{backgroundColor: Theme.white, borderRadius: 10}}>
                                {group.hospitals.map((hospital: any, index: any) => {
                                    return (<TouchableOpacity onPress={() => {
                                            this.toggleFavorite(group.region + index)
                                        }}>
                                            <View style={{
                                                height: 40,
                                                margin: 10,
                                                flexDirection: 'row',
                                            }}>
                                                <Text style={{
                                                    marginTop: 5,
                                                    marginBottom: 5,
                                                    color: Theme.black,
                                                    flex: 0.95
                                                }}>{hospital.name}</Text>

                                                <Image style={{
                                                    marginTop: 5, marginBottom: 5,
                                                    width: 18,
                                                    height: 18,
                                                    resizeMode: 'stretch',
                                                }}
                                                       source={this.state.favorites.includes(group.region + index) ? require('../../assets/srdcefarebne.png') : require('../../assets/srdcesive.png')}/>
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


class NamesFilter extends Component<any, any> {

}

interface HospitalsState {
    regions: any;
    nearest: any;
    favs: any;
    index: number;
    routes: any;
    favorites: number[];
}

export default class Hospitals extends Component<{ navigation: any }, HospitalsState> {


    componentDidMount(): void {

    }

    constructor(props: any) {
        super(props);
        this.state = {
            regions: this.prepareRegions(),
            nearest: this.prepareNearest(),
            favs: this.prepareFavorites(),
            index: 0,
            favorites: [],
            routes: [
                {key: 'regions', title: 'Kraje'},
                {key: 'nearest', title: 'Najbližšie'},
                {key: 'favorites', title: 'Obľúbené'},
            ],
        };
    }

    prepareRegions() {
        return this.prepareGroups(hospitals);
    }

    prepareGroups(names: any[]) {
        let groups: any[] = [];
        let index = -1;
        let lastRegion = '';
        names.forEach((item) => {
            if (lastRegion == item.region) {
                groups[index].hospitals.push({name: item.name, address: item.address, region: item.region, primar: item.primar, telephone: item.telephone, email: item.email});
            } else {
                index++;
                lastRegion = item.region;
                groups[index] = {
                    region: item.region,
                    hospitals: [{name: item.name, address: item.address, region: item.region, primar: item.primar, telephone: item.telephone, email: item.email}]
                };

            }
        });
        return groups;
    }

    prepareNearest() {
        return this.prepareGroups(hospitals);
    }

    prepareFavorites() {
        return this.prepareGroups(hospitals);
    }

    _handleIndexChange = (index: number) => this.setState({index});

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
                            onPress={() => this.setState({index: i})}>
                            <Animated.Text style={{opacity}}>{route.title}</Animated.Text>
                        </TouchableOpacity>
                    );
                })}
            </View>
        );
    };

    _renderScene = SceneMap({
        regions: () => {
            return (<Tab key={'regions'} items={this.state.regions}/>);
        },
        nearest: () => {
            return (<Tab key={'nearest'} items={this.state.nearest}/>);
        },
        favorites: () => {
            return (<Tab key={'favorites'} items={this.state.favs}/>);
        },
    });

    render() {

        return (
            <View style={[ThemeStyles.applicationBackground, ThemeStyles.container]}>
                <GoBack onPress={() => this.props.navigation.navigate('MenuMe')} label={'Zoznam nemocníc'} style={{}}/>
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