import React, { useState } from 'react';
import {
    StyleSheet,
    SafeAreaView,
    View
} from 'react-native';
import { Theme, ThemeStyles } from '../../themes/default';
import { AuthStackConfig } from '../../navigation/Navigation.config';
import CardItemInput from '../../components/CardItemInput';
import { useSelector, useDispatch } from 'react-redux';
import { verifyEmail } from '../../store/actions/ProfileActions';
import MainButton from '../../components/MainButton';

export default function EmailVerificationScreen({ navigation }: any) {
    const dispatch = useDispatch();
    const [verificationCode, setVerificationCode] = useState("");
    const [resendCode, setResendCode] = useState(false);
    const anonymEmail = useSelector((state: any) => {
        let email = state.profile.auth.email;
        let prefix = email.split("@")[0];
        let sufix = email.split("@")[1];

        prefix = prefix.charAt(0) + "*".repeat(prefix.length - 1);
        return prefix + "@" + sufix;
    })

    const handleVerifyCode = async (code: string) => {
        setVerificationCode(code);
        if (code.length === 6) {
            let success: any = await dispatch(verifyEmail(code));
            if (success) {
                console.log("Code confirmaiton success", code);
                //snavigation.navigate(AuthStackConfig.EMAIL_CONFIRMATION_SCREEN.name);
            } else {
                console.log("Code confirmaiton failed", code);
                setResendCode(true);
            }
        }
    }

    const handleResendCode = async () => {
        console.log("send new verification code");
        setVerificationCode("");
        setResendCode(false);
    }

    return (
        <SafeAreaView style={ThemeStyles.safeAreaContainer}>
            <View style={styles.container}>
                <CardItemInput
                    image={require('../../../assets/info.png')}
                    header={resendCode ? "Ľutujeme, zadaný kód je nesprávny." : "Na e-mailovú adresu " + anonymEmail + " sme ti poslali overovací kód."}
                    inputBgColor={Theme.white}
                    value={verificationCode}
                    onChangeText={(code: string) => handleVerifyCode(code)}
                />
                {resendCode && (
                    <MainButton
                        label="Odoslať nový kód"
                        style={styles.buttonContainer}
                        onPress={handleResendCode} />
                )}
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
    buttonContainer: {
        marginBottom: 16
    }
});
