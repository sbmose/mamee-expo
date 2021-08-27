// @ts-ignore
import React, { Component, useState } from 'react';
import { AsyncStorage, Dimensions, Image, SafeAreaView, TouchableOpacity, useColorScheme } from 'react-native';
import { StyleSheet, View, ScrollView, TextInput, Text } from 'react-native';

import { Theme, ThemeStyles } from "../themes/default";
import MenuButton from "../components/MenuButton";
import MeBar from "../components/MeBar";
import { ChildStackConfig } from '../navigation/Navigation.config';

export default function ProfileScreen({ navigation }: any) {

    return (
        <View style={ThemeStyles.applicationBackground}>
            <ScrollView style={[ThemeStyles.container,]}>
                <Text style={{ fontSize: 14, color: Theme.gray, padding: 10 }}>Maroš</Text>
                <View style={{
                    paddingBottom: 100, flex: 1,
                    flexDirection: 'row',
                    flexWrap: 'wrap',
                    alignItems: 'flex-start'
                }}>
                    {Object.entries(ChildStackConfig).map(([key, screen]: any) => {
                        if (screen.menu) {
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
                </View>
            </ScrollView>
        </View>
    );
}
