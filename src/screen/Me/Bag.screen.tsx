import React from 'react';
import { SafeAreaView, View, StyleSheet } from 'react-native';
import { ThemeStyles } from "../../themes/default";
import CardItemText from '../../components/CardItemText';
import { MeStackConfig, BagDetailTabStack } from '../../navigation/Navigation.config';

export default function BagScreen({ navigation }: any) {

    return (
        <SafeAreaView style={ThemeStyles.safeAreaContainer}>
            <View style={styles.container}>
                <CardItemText
                    iconName="me"
                    header="Pre matku"
                    onPress={() => navigation.navigate(MeStackConfig.BAG_DETAIL_LIST_SCREEN.name, { title: "Pre dieťa", })} />
                <CardItemText
                    iconName="child"
                    header="Pre dieťa"
                    onPress={() => navigation.navigate(MeStackConfig.BAG_DETAIL_LIST_SCREEN.name, { title: "Pre dieťa" })} />
                <CardItemText
                    iconName="partner"
                    header="Pre partnera"
                    onPress={() => navigation.navigate(MeStackConfig.BAG_DETAIL_LIST_SCREEN.name, { title: "Pre partnera" })} />
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