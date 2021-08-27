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
import SvgIcon from '../../components/SvgIcons';
import { AuthStackConfig } from '../../navigation/Navigation.config';

export default function RegistrationScreen({ navigation }: any) {

    const handleGoogleRegister = () => {
        console.log("handleGoogleRegister");
    }

    const handleFacegookRegister = () => {
        console.log("handleFacegookRegister");
    }

    return (
        <SafeAreaView style={ThemeStyles.safeAreaContainer}>
            <View style={styles.container}>
                <View>
                    <Text style={styles.header}>{"Nemáš účet?\nRegistruj sa."}</Text>
                    <View style={styles.imageContainer}>
                        <SvgIcon iconName="registration_image" width={189} height={247} />
                    </View>
                    <MainButton
                        label="Poďme na to"
                        style={styles.buttonContainer}
                        onPress={() => navigation.navigate(AuthStackConfig.START_REGISTRATION_SCREEN.name)} />
                    <MainButton
                        label="Registrovať sa cez Google účet"
                        style={styles.buttonContainer}
                        bgColor={Theme.white}
                        textColor={Theme.black}
                        image={require('../../../assets/google.png')}
                        onPress={() => handleGoogleRegister()} />
                    <MainButton
                        label="Registrácia cez Facebook"
                        style={styles.buttonContainer}
                        bgColor={Theme.blue}
                        textColor={Theme.white}
                        image={require('../../../assets/facebook.png')}
                        onPress={() => handleFacegookRegister()} />
                </View>
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
