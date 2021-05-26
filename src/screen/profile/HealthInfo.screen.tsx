import React from 'react';
import {
    StyleSheet,
    View,
    SafeAreaView,
    ScrollView,
    Text
} from 'react-native';
import {
    Container,
    Thumbnail,
    Button
} from "native-base";
import { Theme, ThemeStyles } from '../../themes/default';
import MainButton from '../../components/MainButton';
import ListItemCheckBox from '../../components/ListItemCheckBox';
import { ListItemSeparator } from '../../components/ListItemSeparator';
import ListItemText from '../../components/ListItemText';
import ListItemSimple from '../../components/ListItemSimple';
// Screen Styles

export default function HealthInfo({ navigation }: any) {

    return (
        <SafeAreaView style={ThemeStyles.safeAreaContainer}>
            <ScrollView style={ThemeStyles.scrollContainer}>

            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    headerContainer: {
        alignItems: 'center',
        justifyContent: 'flex-start'
    },
    settingsContainer: {

    },
    thumbnail: {
        width: 150,
        height: 150,
        borderRadius: 150,
        borderWidth: 2,
        borderColor: "#ffffff",
        marginVertical: 10,
    },
    profileName: {
        fontSize: 32,
        fontWeight: '600',
        letterSpacing: 0.5,
        lineHeight: 42,
        color: Theme.black
    },
    profileInfo: {
        fontSize: 12,
        fontWeight: "500",
        letterSpacing: 0.2,
        lineHeight: 18,
        color: Theme.darkGray,
        marginBottom: 30
    },
    profileEmailandPass: {
        fontSize: 16,
        fontWeight: "400",
        letterSpacing: 0.2,
        lineHeight: 24,
        color: Theme.black,
        marginVertical: 5
    },
    changePassBtn: {
        alignSelf: "center",
    },
    changePassBtnText: {
        fontSize: 12,
        fontWeight: "500",
        color: Theme.pink
    },
    listHeader: {
        paddingHorizontal: 16,
        fontSize: 18,
        fontWeight: "600",
        lineHeight: 28,
        letterSpacing: 0.1,
        marginBottom: 16
    },
    infoBtnStyle: {
        marginBottom: 24
    }
});