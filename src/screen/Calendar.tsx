// @ts-ignore
import * as React from 'react';
import { Component } from 'react';
import { Animated, Image, Route, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Constants from 'expo-constants';
import { Theme, ThemeStyles } from "../themes/default";
import GoBack from "../components/GoBack";
import { SceneMap, TabView } from "react-native-tab-view";
import CalendarPicker from 'react-native-calendar-picker';
import { ME_MENU_SCREEN } from '../navigation/ScreenNames';






class Tab extends Component<any, any> {

    constructor(props: any) {
        super(props);
        this.state = {
            selectedStartDate: null,
        };
        this.onDateChange = this.onDateChange.bind(this);
    }

    onDateChange(date: any) {
        this.setState({
            selectedStartDate: date,
        });
    }

    render() {
        const { selectedStartDate } = this.state;
        const startDate = selectedStartDate ? selectedStartDate.toString() : '';
        return (
            <View style={styles.container}>
                <View style={styles.calendar}>
                    <CalendarPicker
                        onDateChange={this.onDateChange}
                        selectedDayColor={Theme.pink}
                        selectedDayTextColor={Theme.white}
                        weekdays={['Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sab', 'Dom']}
                        months={['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro']}
                        previousTitle="Anterior"
                        nextTitle="Próximo"
                    />
                </View>
                <View>
                    <Text>SELECTED DATE:{startDate}</Text>
                </View>
            </View>
        );
    }
}

interface CalendarState {
    index: number;
    routes: any;

}

export default class Calendar extends Component<{ navigation: any }, CalendarState> {


    componentDidMount(): void {

    }

    constructor(props: any) {
        super(props);
        this.state = {

            index: 0,

            routes: [
                { key: 'events', title: 'Udalosti' },
                { key: 'period', title: 'Menštruácia' },
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
        events: () => {
            return (<Tab />);
        },
        period: () => {
            return (<Tab />);
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
    calendar: {
        backgroundColor: Theme.white,
        padding: 10,
    },
    container: {
        height: '100%',
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