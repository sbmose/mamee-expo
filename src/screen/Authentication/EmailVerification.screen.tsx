import React, { useState } from 'react';
import {
    StyleSheet,
    SafeAreaView,
    View,
    Image,
    Text
} from 'react-native';
import { Theme, ThemeStyles } from '../../themes/default';
import { AuthStackConfig } from '../../navigation/Navigation.config';
import { useSelector, useDispatch } from 'react-redux';
import { verifyEmail } from '../../store/actions/ProfileActions';
import MainButton from '../../components/MainButton';
import FloatingInput from '../../components/FloatingInput';

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
                navigation.navigate(AuthStackConfig.ABOUT_ME_SCREEN.name);
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
                <View style={styles.cardContainer}>
                    <View style={styles.headerContainer}>
                        <View style={styles.iconContainer}>
                            <Image source={require('../../../assets/info.png')} style={styles.icon} />
                        </View>
                        <View style={styles.textContainer}>
                            <Text style={styles.header}>{resendCode ? "Ľutujeme, zadaný kód je nesprávny." : "Na e-mailovú adresu " + anonymEmail + " sme ti poslali overovací kód."}</Text>
                        </View>
                    </View>
                    <View>
                        <FloatingInput
                            label="Zadaj kód"
                            bgColor={Theme.white}
                            value={verificationCode}
                            onChangeText={(code: string) => handleVerifyCode(code)} />
                    </View>
                </View>
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
    },
    cardContainer: {
        flexDirection: "column",
        justifyContent: "flex-start",
        padding: 16,
        marginBottom: 16,
        backgroundColor: Theme.white,
        borderRadius: 6
    },
    headerContainer: {
        flexDirection: "row",
        justifyContent: "flex-start",
        marginBottom: 16
    },
    iconContainer: {
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "flex-start",
        marginRight: 16
    },
    textContainer: {
        flex: 1,
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "flex-start"
    },
    header: {
        fontSize: 12,
        fontWeight: "500",
        color: Theme.black,
        lineHeight: 18,
        letterSpacing: 0.2,
        marginBottom: 16
    },
    text: {
        fontSize: 12,
        fontWeight: "500",
        color: Theme.darkGray,
        lineHeight: 18,
        letterSpacing: 0.2
    },
    icon: {
        width: 32,
        height: 32
    }
});
