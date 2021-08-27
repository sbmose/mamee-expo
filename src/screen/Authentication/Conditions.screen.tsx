import React from 'react';
import {
    StyleSheet,
    SafeAreaView,
    ScrollView,
    Text,
    View
} from 'react-native';
import { Theme, ThemeStyles } from '../../themes/default';

export default function ConditionsScreen({ navigation }: any) {

    return (
        <SafeAreaView style={ThemeStyles.safeAreaContainer}>
            <ScrollView style={[ThemeStyles.scrollContainer]}>
                <View style={styles.container}>
                    <View>
                        <Text style={styles.conditionsText}>
                            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
                        </Text>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: "100%",
        padding: 16,
        flexDirection: "column",
        justifyContent: "flex-start",
    },
    conditionsText: {
        color: Theme.black,
        fontSize: 14,
        lineHeight: 20,
        letterSpacing: 0.2,
        fontWeight: "400",
        textAlign: "justify"
    }
});
