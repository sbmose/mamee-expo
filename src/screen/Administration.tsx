// @ts-ignore
import React, { Component, useState } from 'react';
import { AsyncStorage, Dimensions, Image, SafeAreaView, TouchableOpacity, useColorScheme } from 'react-native';
import { StyleSheet, View, ScrollView, TextInput, Text } from 'react-native';


import { Theme, ThemeStyles } from "../themes/default";
import WidgetLink from "../components/WidgetLink";

const data = [
    {
        name: 'Výber mena',
        finished: false,
        text: 'Nárok na peňažnú pomoc v materstve (materské) vám vzniká najskôr v 32. tt (rizikové tehotenstvo) alebo v 34. tt. Na základe tlačiva Sociálnej poisťovne “Žiadosť o materské” (vystaví vám gynekológ na tehotenskej poradni) si môžeťe uplatniť nárok na materské. Ak ste zamestnankyňa – tlačivo si oxeroxujte (na horšie časy) a odovzdajte ho zamestnávateľovi, ktorý ho postúpi na SP. Ak ste SZČO, nezamestnaná, študentka a iné, máte povinnosť odniesť si ho na SP sama. Spolu s registračným listom FO požiadate o vyplácanie materského. Ak máte nárok na materské z viacerých poistení (napr. dobrovoľné poistenie, potrebujete od gynekológa žiadosť pre každé z nich.',
        provider: 'Sociálna poisťovňa'
    },
    {
        name: 'Sociálna poisťovňa: Materské',
        finished: false,
        text: 'Nárok na peňažnú pomoc v materstve (materské) vám vzniká najskôr v 32. tt (rizikové tehotenstvo) alebo v 34. tt. Na základe tlačiva Sociálnej poisťovne “Žiadosť o materské” (vystaví vám gynekológ na tehotenskej poradni) si môžeťe uplatniť nárok na materské. Ak ste zamestnankyňa – tlačivo si oxeroxujte (na horšie časy) a odovzdajte ho zamestnávateľovi, ktorý ho postúpi na SP. Ak ste SZČO, nezamestnaná, študentka a iné, máte povinnosť odniesť si ho na SP sama. Spolu s registračným listom FO požiadate o vyplácanie materského. Ak máte nárok na materské z viacerých poistení (napr. dobrovoľné poistenie, potrebujete od gynekológa žiadosť pre každé z nich.',
        provider: 'Sociálna poisťovňa'
    },
    {
        name: 'Sociálna poisťovňa: II. pilier dôchodkového poistenia',
        finished: false,
        text: 'Nárok na peňažnú pomoc v materstve (materské) vám vzniká najskôr v 32. tt (rizikové tehotenstvo) alebo v 34. tt. Na základe tlačiva Sociálnej poisťovne “Žiadosť o materské” (vystaví vám gynekológ na tehotenskej poradni) si môžeťe uplatniť nárok na materské. Ak ste zamestnankyňa – tlačivo si oxeroxujte (na horšie časy) a odovzdajte ho zamestnávateľovi, ktorý ho postúpi na SP. Ak ste SZČO, nezamestnaná, študentka a iné, máte povinnosť odniesť si ho na SP sama. Spolu s registračným listom FO požiadate o vyplácanie materského. Ak máte nárok na materské z viacerých poistení (napr. dobrovoľné poistenie, potrebujete od gynekológa žiadosť pre každé z nich.',
        provider: 'Sociálna poisťovňa'
    },
    {
        name: 'Odhlásenie rodičovského príspevku',
        finished: false,
        text: 'Nárok na peňažnú pomoc v materstve (materské) vám vzniká najskôr v 32. tt (rizikové tehotenstvo) alebo v 34. tt. Na základe tlačiva Sociálnej poisťovne “Žiadosť o materské” (vystaví vám gynekológ na tehotenskej poradni) si môžeťe uplatniť nárok na materské. Ak ste zamestnankyňa – tlačivo si oxeroxujte (na horšie časy) a odovzdajte ho zamestnávateľovi, ktorý ho postúpi na SP. Ak ste SZČO, nezamestnaná, študentka a iné, máte povinnosť odniesť si ho na SP sama. Spolu s registračným listom FO požiadate o vyplácanie materského. Ak máte nárok na materské z viacerých poistení (napr. dobrovoľné poistenie, potrebujete od gynekológa žiadosť pre každé z nich.',
        provider: 'Sociálna poisťovňa'
    },
    {
        name: 'Ohlásenie odchodu na materskú',
        finished: false,
        text: 'Nárok na peňažnú pomoc v materstve (materské) vám vzniká najskôr v 32. tt (rizikové tehotenstvo) alebo v 34. tt. Na základe tlačiva Sociálnej poisťovne “Žiadosť o materské” (vystaví vám gynekológ na tehotenskej poradni) si môžeťe uplatniť nárok na materské. Ak ste zamestnankyňa – tlačivo si oxeroxujte (na horšie časy) a odovzdajte ho zamestnávateľovi, ktorý ho postúpi na SP. Ak ste SZČO, nezamestnaná, študentka a iné, máte povinnosť odniesť si ho na SP sama. Spolu s registračným listom FO požiadate o vyplácanie materského. Ak máte nárok na materské z viacerých poistení (napr. dobrovoľné poistenie, potrebujete od gynekológa žiadosť pre každé z nich.',
        provider: 'Sociálna poisťovňa'
    },
    {
        name: 'Výber a dohoda s pediatrom',
        finished: false,
        text: 'Nárok na peňažnú pomoc v materstve (materské) vám vzniká najskôr v 32. tt (rizikové tehotenstvo) alebo v 34. tt. Na základe tlačiva Sociálnej poisťovne “Žiadosť o materské” (vystaví vám gynekológ na tehotenskej poradni) si môžeťe uplatniť nárok na materské. Ak ste zamestnankyňa – tlačivo si oxeroxujte (na horšie časy) a odovzdajte ho zamestnávateľovi, ktorý ho postúpi na SP. Ak ste SZČO, nezamestnaná, študentka a iné, máte povinnosť odniesť si ho na SP sama. Spolu s registračným listom FO požiadate o vyplácanie materského. Ak máte nárok na materské z viacerých poistení (napr. dobrovoľné poistenie, potrebujete od gynekológa žiadosť pre každé z nich.',
        provider: 'Sociálna poisťovňa'
    },
    {
        name: 'Výber pôrodnice',
        finished: false,
        text: 'Nárok na peňažnú pomoc v materstve (materské) vám vzniká najskôr v 32. tt (rizikové tehotenstvo) alebo v 34. tt. Na základe tlačiva Sociálnej poisťovne “Žiadosť o materské” (vystaví vám gynekológ na tehotenskej poradni) si môžeťe uplatniť nárok na materské. Ak ste zamestnankyňa – tlačivo si oxeroxujte (na horšie časy) a odovzdajte ho zamestnávateľovi, ktorý ho postúpi na SP. Ak ste SZČO, nezamestnaná, študentka a iné, máte povinnosť odniesť si ho na SP sama. Spolu s registračným listom FO požiadate o vyplácanie materského. Ak máte nárok na materské z viacerých poistení (napr. dobrovoľné poistenie, potrebujete od gynekológa žiadosť pre každé z nich.',
        provider: 'Sociálna poisťovňa'
    },
    {
        name: 'Vyhlásenie o otcovstve',
        finished: false,
        text: 'Nárok na peňažnú pomoc v materstve (materské) vám vzniká najskôr v 32. tt (rizikové tehotenstvo) alebo v 34. tt. Na základe tlačiva Sociálnej poisťovne “Žiadosť o materské” (vystaví vám gynekológ na tehotenskej poradni) si môžeťe uplatniť nárok na materské. Ak ste zamestnankyňa – tlačivo si oxeroxujte (na horšie časy) a odovzdajte ho zamestnávateľovi, ktorý ho postúpi na SP. Ak ste SZČO, nezamestnaná, študentka a iné, máte povinnosť odniesť si ho na SP sama. Spolu s registračným listom FO požiadate o vyplácanie materského. Ak máte nárok na materské z viacerých poistení (napr. dobrovoľné poistenie, potrebujete od gynekológa žiadosť pre každé z nich.',
        provider: 'Sociálna poisťovňa'
    },
    {
        name: 'Určenie otcovstva',
        finished: false,
        text: 'Nárok na peňažnú pomoc v materstve (materské) vám vzniká najskôr v 32. tt (rizikové tehotenstvo) alebo v 34. tt. Na základe tlačiva Sociálnej poisťovne “Žiadosť o materské” (vystaví vám gynekológ na tehotenskej poradni) si môžeťe uplatniť nárok na materské. Ak ste zamestnankyňa – tlačivo si oxeroxujte (na horšie časy) a odovzdajte ho zamestnávateľovi, ktorý ho postúpi na SP. Ak ste SZČO, nezamestnaná, študentka a iné, máte povinnosť odniesť si ho na SP sama. Spolu s registračným listom FO požiadate o vyplácanie materského. Ak máte nárok na materské z viacerých poistení (napr. dobrovoľné poistenie, potrebujete od gynekológa žiadosť pre každé z nich.',
        provider: 'Sociálna poisťovňa'
    },
    {
        name: 'Taška do pôrodnice',
        finished: false,
        text: 'Nárok na peňažnú pomoc v materstve (materské) vám vzniká najskôr v 32. tt (rizikové tehotenstvo) alebo v 34. tt. Na základe tlačiva Sociálnej poisťovne “Žiadosť o materské” (vystaví vám gynekológ na tehotenskej poradni) si môžeťe uplatniť nárok na materské. Ak ste zamestnankyňa – tlačivo si oxeroxujte (na horšie časy) a odovzdajte ho zamestnávateľovi, ktorý ho postúpi na SP. Ak ste SZČO, nezamestnaná, študentka a iné, máte povinnosť odniesť si ho na SP sama. Spolu s registračným listom FO požiadate o vyplácanie materského. Ak máte nárok na materské z viacerých poistení (napr. dobrovoľné poistenie, potrebujete od gynekológa žiadosť pre každé z nich.',
        provider: 'Sociálna poisťovňa'
    }
];


export default class Administration extends Component<{ navigation: any }, any> {


    componentDidMount(): void {

    }

    constructor(props: any) {
        super(props);
        this.state = {
            items: data
        };
        this.toggleDetail = this.toggleDetail.bind(this);
        this.planDetail = this.planDetail.bind(this);
    }

    toggleDetail(index: number) {
        let items = this.state.items;
        this.setState({
            items: items.map((item: any, ind: number) => {
                let i = item;
                if (ind == index) {
                    i.finished = true;
                }
                return i;
            })
        });
        console.log(this.state.items);
        this.props.navigation.navigate('Administration');
    }

    planDetail(index: number) {
        this.props.navigation.navigate('Administration');
    }

    render() {
        return (
            <View style={[ThemeStyles.applicationBackground, ThemeStyles.container]}>
                <ScrollView>
                    <View style={{ marginTop: 30, paddingBottom: 150 }}>
                        <Text style={{ color: Theme.gray, fontWeight: 'bold', paddingBottom: 5, paddingTop: 10 }}>Nevybavené</Text>
                        {this.state.items.map((item: any, index: number) => {
                            return (<WidgetLink text={item.name} style={{}} onPress={() => {
                                this.props.navigation.navigate('AdministrationDetail', { item: item, index: index, onToggle: this.toggleDetail, onPlan: this.planDetail })
                            }} />);
                        })}
                        <Text style={{ color: Theme.gray, fontWeight: 'bold', paddingBottom: 5, paddingTop: 10 }}>Vybavené</Text>
                        {this.state.items.filter((item: any) => { return item.finished; }).map((item: any) => {
                            return (<WidgetLink text={item.name} style={{}} onPress={() => {
                                this.props.navigation.navigate('AdministrationDetail', { item: item, onToggle: this.toggleDetail, onPlan: this.planDetail })
                            }} />);
                        })}
                    </View>
                </ScrollView>
            </View>
        );
    }
}
