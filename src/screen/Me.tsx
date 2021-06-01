// @ts-ignore
import React, { Component, useState } from 'react';
import { ScrollView, View } from 'react-native';

import { ThemeStyles } from "../themes/default";
import MenuButton from "../components/MenuButton";
import MeBar from "../components/MeBar";
import { MeStackConfig } from '../navigation/Navigation.config';


export default function ProfileScreen({ navigation }: any) {

    return (
        <View style={ThemeStyles.applicationBackground}>
            <ScrollView style={[ThemeStyles.container,]}>
                <MeBar navigation={navigation} name="Ja" photo={require('../../assets/profil.png')} style={[ThemeStyles.welcome, { padding: 10, marginTop: 15 }]} />
                <View style={{
                    paddingBottom: 100, flex: 1,
                    flexDirection: 'row',
                    flexWrap: 'wrap',
                    alignItems: 'flex-start'
                }}>
                    {Object.entries(MeStackConfig).map(([key, screen]: any) => {
                        if (screen.menu) {
                            console.log("Menu", key, screen);
                            return (
                                <MenuButton
                                    key={screen.name}
                                    icon={screen.icon}
                                    label={screen.title}
                                    style={{}}
                                    onPress={() => { navigation.navigate(screen.name) }} />
                            )
                        }
                    })}

                    {/* <MenuButton icon={require('../../assets/zdrav_info-kruh.png')} label={'Zdravotné informácie'} style={{}} onPress={() => { navigation.navigate(HEALTH_SCREEN) }} />
                    <MenuButton icon={require('../../assets/kalendarkruh.png')} label={'Kalendár'} style={{}} onPress={() => { navigation.navigate(CALENDAR_SCREEN) }} />
                    <MenuButton icon={require('../../assets/fotkykruh.png')} label={'Fotky'} style={{}} onPress={() => { navigation.navigate(PHOTOS_SCREEN) }} />
                    <MenuButton icon={require('../../assets/vahakruh.png')} label={'Váha'} style={{}} onPress={() => { navigation.navigate(WEIGHT_SCREEN) }} />
                    <MenuButton icon={require('../../assets/kalendarkruh.png')} label={'PSM kalendár'} style={{}} onPress={() => { navigation.navigate('PSMCalendar') }} />
                    <MenuButton icon={require('../../assets/porodnyplankruh.png')} label={'Pôrodný plán'} style={{}} onPress={() => { navigation.navigate('Plan') }} />
                    <MenuButton icon={require('../../assets/kalendarkruh.png')} label={'Taška do pôrodnice'} style={{}} onPress={() => { navigation.navigate('Bag') }} />
                    <MenuButton icon={require('../../assets/nakupnyzoznamkruh.png')} label={'Nákupný zoznam'} style={{}} onPress={() => { navigation.navigate('BuyList') }} />
                    <MenuButton icon={require('../../assets/zoznammienkruh.png')} label={'Zoznam mien'} style={{}} onPress={() => { navigation.navigate('Names') }} />
                    <MenuButton icon={require('../../assets/zoznamporodnickruh.png')} label={'Zoznam pôrodníc'} style={{}} onPress={() => { navigation.navigate('Hospitals') }} />
                    <MenuButton icon={require('../../assets/stratatehkruh.png')} label={'Strata tehotenstva'} style={{}} onPress={() => { navigation.navigate('Loss') }} />
                    <MenuButton icon={require('../../assets/administrativakruh.png')} label={'Administratíva'} style={{}} onPress={() => { navigation.navigate('Administration') }} /> */}
                </View>
            </ScrollView>
        </View>
    );
}
