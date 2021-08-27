import React, { useState } from 'react';
import moment from "moment";
import {
    StyleSheet,
    SafeAreaView,
    View,
    Text
} from 'react-native';
import { Theme, ThemeStyles } from '../../themes/default';

export default function BirthPlanScreen({ navigation }: any) {

    return (
        <SafeAreaView style={ThemeStyles.safeAreaContainer}>
            <View style={styles.container}>
                <Text style={[ThemeStyles.infoTextSmall, { paddingHorizontal: 16 }]}>Začni písať alebo pomocou ikony fotoaparátu vpravo hore odfoť svoj rukou napísaný plán.</Text>
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
    }
});
