import React from 'react';
import {
    StyleSheet,
    SafeAreaView,
    View
} from 'react-native';
import { ThemeStyles } from '../../themes/default';

export default function MensesCalendarScreen({ navigation }: any) {



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
        justifyContent: "flex-end",
    },
});
