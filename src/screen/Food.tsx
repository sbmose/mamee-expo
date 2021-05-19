// @ts-ignore
import * as React from 'react';
import {Component} from 'react';
import {Animated, Image, Route, ScrollView, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Constants from 'expo-constants';
import {Theme, ThemeStyles} from "../themes/default";
import GoBack from "../components/GoBack";
import {SceneMap, TabView} from "react-native-tab-view";
import Widget from "../components/Widget";
import WidgetFood from "../components/WidgetFood";
import WidgetSunar from "../components/WidgetSunar";


interface TabProps {
    navigation: any
}

class Feed extends Component<TabProps, any> {

    constructor(props: TabProps) {
        super(props);
        this.state = {

        }

    }



    render() {
        return (
            <ScrollView>
                <View>
                    <Widget navigation={this.props.navigation} text={"V tejto sekcii nájdeš informácie, ako kŕmiť" +
                    "svoje dieťa.\nSú tu odporúčané jedlá pre detičky v rôznych fázach vývoja."} style={{marginTop: 20, marginBottom: 20}}/>
                    <View>
                    <Text style={{color: Theme.gray, fontSize: 16,fontWeight: 'bold'}}>Narodenie - 6 mesiacov</Text>
                        <WidgetFood navigation={this.props.navigation} text={"Ovsená kaša s ovocím"} style={{marginTop: 20, marginBottom: 10}} icon={require('../../assets/kasa.png')}/>
                        <WidgetFood navigation={this.props.navigation} text={"Sušené mlieko a krupicová kaša"} style={{marginTop: 10, marginBottom: 20}} icon={require('../../assets/mlieko.png')}/>
                    </View>
                    <View>
                        <Text style={{color: Theme.gray, fontSize: 16,fontWeight: 'bold'}}>6 mesiacov - 1 rok</Text>
                        <WidgetFood navigation={this.props.navigation} text={"Jablkové pyré"} style={{marginTop: 20, marginBottom: 10}} icon={require('../../assets/jablka.png')}/>
                        <WidgetFood navigation={this.props.navigation} text={"Keksíky plnené jogurtom"} style={{marginTop: 10, marginBottom: 20}} icon={require('../../assets/keksiky.png')}/>
                    </View>
                </View>
            </ScrollView>
        );
    }
}

class Sunar extends Component<TabProps, any> {

    constructor(props: TabProps) {
        super(props);
        this.state = {
        }

    }



    render() {
        return (
            <ScrollView>
                <View>
                    <Widget navigation={this.props.navigation} text={"Toto je tvoj záznamník dojčenia dieťatka.\nMôžeš si tu zaznamenávať jeho čas či priebeh."} style={{marginTop: 20, marginBottom: 20}}/>
                    <View>
                        <Text style={{color: Theme.gray, fontSize: 16,fontWeight: 'bold'}}>16. septembra 2019</Text>
                        <WidgetSunar navigation={this.props.navigation} text={"Dojčenie"} time={"9:00"} style={{marginTop: 20, marginBottom: 10}} icon={require('../../assets/stravakruh.png')}/>
                        <WidgetSunar navigation={this.props.navigation} text={"Maroško nechcel jesť"} time={"12:00"} style={{marginTop: 10, marginBottom: 20}} icon={require('../../assets/stravakruh.png')}/>
                    </View>
                    <View>
                        <Text style={{color: Theme.gray, fontSize: 16,fontWeight: 'bold'}}>15. septembra 2019</Text>
                        <WidgetSunar navigation={this.props.navigation} text={"Dojčenie"} time={"9:00"} style={{marginTop: 20, marginBottom: 10}} icon={require('../../assets/stravakruh.png')}/>
                        <WidgetSunar navigation={this.props.navigation} text={"Maroško nechcel jesť"} time={"12:00"} style={{marginTop: 10, marginBottom: 20}} icon={require('../../assets/stravakruh.png')}/>
                    </View>
                </View>
            </ScrollView>
        );
    }
}



interface FoodState {
    index: number;
    routes: any;
}

export default class Food extends Component<{ navigation: any }, FoodState> {


    componentDidMount(): void {

    }

    constructor(props: any) {
        super(props);
        this.state = {

            index: 0,

            routes: [
                {key: 'feed', title: 'Kŕmenie'},
                {key: 'sunar', title: 'Dojčenie'},
            ],
        };
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
        feed: () => {
            return (<Feed key={'feed'} navigation={this.props.navigation}/>);
        },
        sunar: () => {
            return (<Sunar key={'sunar'} navigation={this.props.navigation}/>);
        },
    });

    render() {

        return (
            <View style={[ThemeStyles.applicationBackground, ThemeStyles.container]}>
                <GoBack onPress={() => this.props.navigation.navigate('MenuChild')} label={'Strava'} style={{}}/>
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