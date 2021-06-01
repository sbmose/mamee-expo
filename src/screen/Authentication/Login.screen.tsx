import React from 'react';
import {
    StyleSheet,
    SafeAreaView,
    ScrollView,
    Text,
    View
} from 'react-native';
import { Card } from "native-base";
import { Theme, ThemeStyles } from '../../themes/default';
import FloatingInput from '../../components/FloatingInput';
import MainButton from '../../components/MainButton';

// Screen Styles

export default function LoginScreen({ navigation }: any) {

    const handleEmailLogin = () => {
        console.log("handleEmailLogin");
    }

    const handleFacebookLogin = () => {
        console.log("handleFacebookLogin");
    }

    const handleGoogleLogin = () => {
        console.log("handleGoogleLogin");
    }

    const handleCreateAccount = () => {
        console.log("handleCreateAccount");
    }

    return (
        <SafeAreaView style={ThemeStyles.safeAreaContainer}>
            <ScrollView style={[ThemeStyles.scrollContainer]}>
                <View style={styles.container}>
                    <View>
                        <Text style={styles.header}>Prihlásenie</Text>
                        <FloatingInput
                            label="E-mail"
                            style={styles.input} />
                        <FloatingInput
                            label="Heslo"
                            style={styles.input}
                            isPassword />
                        <MainButton
                            label="Pokračovať"
                            style={styles.buttonContainer}
                            onPress={() => handleEmailLogin()} />
                        <MainButton
                            label="Prihlásiť sa cez Google účet"
                            style={styles.buttonContainer}
                            bgColor={Theme.white}
                            textColor={Theme.black}
                            image={require('../../../assets/google.png')}
                            onPress={() => handleGoogleLogin()} />
                        <MainButton
                            label="Prihlásiť sa cez Facebook"
                            style={styles.buttonContainer}
                            bgColor={Theme.blue}
                            textColor={Theme.white}
                            image={require('../../../assets/facebook.png')}
                            onPress={() => handleFacebookLogin()} />
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
        justifyContent: "flex-end",
    },
    header: {
        fontSize: 32,
        fontWeight: "600",
        letterSpacing: 0.5,
        lineHeight: 42,
        color: Theme.black,
        marginBottom: 30
    },
    input: {
        marginBottom: 16
    },
    buttonContainer: {
        marginBottom: 16
    }
});