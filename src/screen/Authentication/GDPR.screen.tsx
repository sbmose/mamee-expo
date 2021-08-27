import React from 'react';
import {
    StyleSheet,
    SafeAreaView,
    View,
    ScrollView
} from 'react-native';
import { Theme, ThemeStyles } from '../../themes/default';
import MainButton from '../../components/MainButton';
import CardItemText from '../../components/CardItemText';
import { AuthStackConfig } from '../../navigation/Navigation.config';
import CardExpand from "../../components/CardExpand";

export default function GDPRScreen({ navigation }: any) {

    return (
        <SafeAreaView style={ThemeStyles.safeAreaContainer}>
            <View style={styles.container}>
                <CardItemText
                    image={require('../../../assets/info.png')}
                    header="Ochrana osobných údajov"
                    text={"Potrebujeme tvoj súhlas s tým, že budeme tvoje údaje spracovávať. Na čo ich potrebujeme?\n\nPrečítaj si celé podmienky."} />
                <CardExpand
                    header="Kompletné podmienky spracovania údajov"
                    text={"text text text text"} />
                <MainButton
                    label="Súhlasím"
                    style={styles.buttonContainer}
                    onPress={() => navigation.navigate(AuthStackConfig.LOGIN_METHOD_SCREEN.name)} />
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
