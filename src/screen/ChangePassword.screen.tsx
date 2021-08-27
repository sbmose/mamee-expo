import React, { useRef } from 'react';
import {
    StyleSheet,
    SafeAreaView,
    KeyboardAvoidingView,
    Text,
    View,
    Platform
} from 'react-native';
import { Theme, ThemeStyles } from '../themes/default';
import FloatingInput from '../components/FloatingInput';
import MainButton from '../components/MainButton';
import { useDispatch } from 'react-redux';
import { useForm, Controller } from 'react-hook-form';
import { AuthStackConfig } from '../navigation/Navigation.config';
import { registerByEmail } from '../store/actions/ProfileActions';
import SvgIcon from '../components/SvgIcons';

export default function ChangePasswordScreen({ navigation }: any) {
    const dispatch = useDispatch();
    const EMAIL_REGEX = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const { handleSubmit, control, errors, watch, formState: { isValid } } = useForm({ mode: "onChange", reValidateMode: "onChange" });
    const password = useRef({});
    password.current = watch("password", "");

    const onSubmit = async (data: any) => {
        let success: any = await dispatch(registerByEmail(data.email, data.password));
        console.log('onSubmit', data, errors, success);
        success && navigation.navigate(AuthStackConfig.EMAIL_VERIFICATION_SCREEN.name);
    }

    return (
        <SafeAreaView style={ThemeStyles.safeAreaContainer}>
            <KeyboardAvoidingView
                behavior={Platform.OS == 'ios' ? 'padding' : null}
                scrollEnabled={false}
                keyboardVerticalOffset={90}
                resetScrollToCoords={{ x: 0, y: 0 }}
                style={{ flex: 1 }}
                enabled>
                <View style={styles.container}>
                    <View style={styles.imageContainer}>
                        <SvgIcon iconName="change_password_image" width={186} height={216} />
                    </View>
                    <Text style={styles.header}>Zmena hesla</Text>
                    <Controller
                        name="oldPassword"
                        defaultValue=""
                        control={control}
                        rules={{
                            required: { value: true, message: 'Heslo je vyžadované' },
                            minLength: {
                                value: 8,
                                message: "Heslo musí mať aspoň 8 znakov"
                            }
                        }}
                        render={({ onChange, value }: any) => (
                            <FloatingInput
                                label="Staré heslo"
                                value={value}
                                style={styles.input}
                                isPassword
                                onChangeText={(text: string) => onChange(text)}
                                error={errors.oldPassword}
                                errorText={errors?.oldPassword?.message} />
                        )}
                    />
                    <Controller
                        name="password"
                        defaultValue=""
                        control={control}
                        rules={{
                            required: { value: true, message: 'Heslo je vyžadované' },
                            minLength: {
                                value: 8,
                                message: "Heslo musí mať aspoň 8 znakov"
                            }
                        }}
                        render={({ onChange, value }: any) => (
                            <FloatingInput
                                label="Nové heslo"
                                value={value}
                                style={styles.input}
                                isPassword
                                onChangeText={(text: string) => onChange(text)}
                                error={errors.password}
                                errorText={errors?.password?.message} />
                        )}
                    />
                    <Controller
                        name="passwordRepeat"
                        defaultValue=""
                        control={control}
                        rules={{
                            required: "Heslo je vyžadované",
                            validate: value => value === password.current || "Heslá sa nezhodujú"
                        }}
                        render={({ onChange, value }: any) => (
                            <FloatingInput
                                label="Zopakovať nové heslo"
                                value={value}
                                style={styles.input}
                                isPassword
                                onChangeText={(text: string) => onChange(text)}
                                error={errors.passwordRepeat}
                                errorText={errors?.passwordRepeat?.message} />
                        )}
                    />
                    <MainButton
                        label="Zmeniť heslo"
                        style={styles.buttonContainer}
                        onPress={handleSubmit(onSubmit)}
                        disabled={!isValid} />
                </View>
            </KeyboardAvoidingView>
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
    },
    transparenButtonContainer: {
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "center",
        marginLeft: 16
    },
    chceckboxContainer: {
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "center",
        padding: 0,
        marginHorizontal: 0,
        marginBottom: 10
    },
    checkbox: {
        padding: 0,
        margin: 0,
        marginRight: 10
    },
    imageContainer: {
        width: "100%",
        marginBottom: 30,
        flexDirection: "row",
        justifyContent: "flex-end"
    },
});