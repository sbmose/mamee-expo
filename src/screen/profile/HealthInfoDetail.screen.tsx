import React from 'react';
import {
    StyleSheet,
    View,
    SafeAreaView,
    ScrollView,
    Text
} from 'react-native';
import {

} from "native-base";
import { Theme, ThemeStyles } from '../../themes/default';
// Screen Styles

export default function HealthInfoDetail({ navigation }: any) {

    return (
        <SafeAreaView style={ThemeStyles.safeAreaContainer}>
            <ScrollView style={[ThemeStyles.scrollContainer, styles.container]}>
                <Text style={styles.infoText}>
                    Informácie, ktoré si sem ukladáš, sú v bezpečí. Slúžia najmä na rýchle zdravotné informácie.
</Text>
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 16
    },
    infoText: {
        fontSize: 14,
        lineHeight: 20,
        fontWeight: "500",
        color: Theme.darkGray,
        letterSpacing: 0.2,
        padding: 33
    }
});