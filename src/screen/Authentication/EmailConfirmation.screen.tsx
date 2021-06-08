import React from 'react';
import {
    StyleSheet,
    SafeAreaView,
    ScrollView,
    Text,
    View
} from 'react-native';
import { Theme, ThemeStyles } from '../../themes/default';
import MainButton from '../../components/MainButton';
import CardItemText from '../../components/CardItemText';
import { AuthStackConfig } from '../../navigation/Navigation.config';

export default function EmailConfirmationScreen({ navigation }: any) {

    return (
        <SafeAreaView style={ThemeStyles.safeAreaContainer}>
            <View style={styles.container}>
                <CardItemText
                    image={require('../../../assets/info.png')}
                    header="Nemáš sa čoho obávať"
                    text={"Toto je tvoj vlastný denník a do tvojho súkromia nikto neuvidí.\n\nVážime si ho."} />

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
        justifyContent: "center",
    },
    header: {
        fontSize: 32,
        fontWeight: "600",
        letterSpacing: 0.5,
        lineHeight: 42,
        color: Theme.black,
        marginBottom: 30
    },
    imageContainer: {
        width: "100%",
        marginBottom: 30,
        flexDirection: "row",
        justifyContent: "flex-end"
    },
    input: {
        marginBottom: 16
    },
    buttonContainer: {
        marginBottom: 16
    }
});
