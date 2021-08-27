import React, { useState } from 'react';
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
import RadioButton from '../../components/RadioButton';
import { useDispatch } from 'react-redux';
import { updateAuth } from '../../store/actions/ProfileActions';

export default function LoginMethodScreen({ navigation }: any) {
    const dispatch = useDispatch();
    const [loginMethod, setLoginMethod] = useState("PIN");

    const handleNext = async () => {
        let success: any = await dispatch(updateAuth({ loginMethod: loginMethod }));
        if (success && loginMethod === "PIN") {
            navigation.navigate(AuthStackConfig.CREATE_PIN_SCREEN.name);
        } else {
            navigation.navigate(AuthStackConfig.GRATULATION_SCREEN.name);
        }
    }

    return (
        <SafeAreaView style={ThemeStyles.safeAreaContainer}>
            <View style={styles.container}>
                <CardItemText
                    image={require('../../../assets/info.png')}
                    header="Vyber si, ako sa chceš prihlasovať" />
                <View style={styles.radionButtonsContainer}>
                    <RadioButton
                        label="4 miestny PIN"
                        checked={loginMethod === "PIN"}
                        onPress={() => setLoginMethod("PIN")} />
                    <RadioButton
                        label="Odtlačok prsta / tvárou"
                        checked={loginMethod === "ID"}
                        onPress={() => {
                            setLoginMethod("ID");
                            navigation.navigate(AuthStackConfig.ENABLE_BIOMETRIC_SCREEN.name);
                        }} />
                    <RadioButton
                        label="Bez overovania"
                        checked={loginMethod === "NONE"}
                        onPress={() => setLoginMethod("NONE")} />
                </View>
                <MainButton
                    label="Ďalej"
                    style={styles.buttonContainer}
                    onPress={handleNext} />
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
    radionButtonsContainer: {
        flexDirection: "column",
        justifyContent: "flex-start",
        padding: 16,
        marginBottom: 16,
        backgroundColor: Theme.white,
        borderRadius: 6
    },
    buttonContainer: {
        marginBottom: 16
    }
});
