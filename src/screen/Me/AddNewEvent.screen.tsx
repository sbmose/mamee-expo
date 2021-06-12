// @ts-ignore
import React from 'react';
import { SafeAreaView, View, StyleSheet } from 'react-native';
import { ThemeStyles } from "../../themes/default";

export default function AddNewEventScreen({ navigation }: any) {

    return (
        <SafeAreaView style={ThemeStyles.safeAreaContainer}>
            <View style={styles.container}>

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
