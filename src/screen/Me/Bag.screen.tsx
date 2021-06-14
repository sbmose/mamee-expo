// @ts-ignore
import React, { useState } from 'react';
import { SafeAreaView, View, StyleSheet } from 'react-native';
import { ThemeStyles } from "../../themes/default";
import CardItemText from '../../components/CardItemText';

export default function BagScreen({ navigation }: any) {

    return (
        <SafeAreaView style={ThemeStyles.safeAreaContainer}>
            <View style={styles.container}>
                <CardItemText
                    iconName="me"
                    header="Pre matku" />
                <CardItemText
                    iconName="child"
                    header="Pre dieťa" />
                <CardItemText
                    iconName="partner"
                    header="Pre partnera" />
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: "100%",
        padding: 16,
        flexDirection: "column",
        justifyContent: "flex-start"
    },
})