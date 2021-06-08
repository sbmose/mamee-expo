import React from 'react';
import {
    StyleSheet,
    SafeAreaView,
    View
} from 'react-native';
import { Theme, ThemeStyles } from '../../themes/default';
import { AuthStackConfig } from '../../navigation/Navigation.config';
import CardItemInput from '../../components/CardItemInput';
import { useSelector } from 'react-redux';

export default function EmailConfirmationScreen({ navigation }: any) {
    const anonymEmail = useSelector((state: any) => {
        let email = state.profile.auth.email;
        let prefix = email.split("@")[0];
        let sufix = email.split("@")[1];

        prefix = prefix.charAt(0) + "*".repeat(prefix.length - 1);
        return prefix + "@" + sufix;
    })

    return (
        <SafeAreaView style={ThemeStyles.safeAreaContainer}>
            <View style={styles.container}>
                <CardItemInput
                    image={require('../../../assets/info.png')}
                    header={"Na e-mailovú adresu " + anonymEmail + " sme ti poslali overovací kód."}
                />

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
