import React, { useRef, useEffect } from 'react';
import {
    StyleSheet,
    SafeAreaView,
    ScrollView,
    Text,
    View
} from 'react-native';
import { Theme, ThemeStyles } from '../../themes/default';
import FloatingInput from '../../components/FloatingInput';
import MainButton from '../../components/MainButton';
import TransparentButton from '../../components/TransparentButton';
import { useSelector, useDispatch } from 'react-redux';
import { loginByEmail } from '../../store/actions/ProfileActions';
import { useForm, Controller } from 'react-hook-form';
import { AuthStackConfig } from '../../navigation/Navigation.config';

// Screen Styles

export default function RegistrationEmailPassScreen({ navigation }: any) {
    const { auth } = useSelector((state: any) => state.profile)
    const dispatch = useDispatch();
    const EMAIL_REGEX = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const { handleSubmit, control, errors, register, watch, setValue, getValues, formState: { isDirty, isValid, isSubmitted } } = useForm({ mode: "onChange" });
    const password = useRef({});
    password.current = watch("password", "");

    const onSubmit = (data: any) => {
        console.log('onSubmit', data, errors);
        dispatch(loginByEmail(data.email, data.password));
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

    console.log("Form state", isDirty, isValid);

    return (
        <SafeAreaView style={ThemeStyles.safeAreaContainer}>
            <ScrollView style={[ThemeStyles.scrollContainer]}>
                <View style={styles.container}>
                    <View>
                        <Text style={styles.header}>Prihlásenie</Text>
                        <Controller
                            name="email"
                            defaultValue=""
                            control={control}
                            rules={{
                                required: { value: true, message: 'Email je vyžadován' },
                                pattern: {
                                    value: EMAIL_REGEX,
                                    message: 'Špatný formát emailu'
                                }
                            }}
                            render={({ onChange, value }: any) => (
                                <FloatingInput
                                    label="E-mail"
                                    value={value}
                                    style={styles.input}
                                    onChangeText={(text: string) => onChange(text)}
                                    error={errors.email}
                                    errorText={errors?.email?.message} />
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
                                    label="Heslo"
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
                                    label="Zopakuj heslo"
                                    value={value}
                                    style={styles.input}
                                    isPassword
                                    onChangeText={(text: string) => onChange(text)}
                                    error={errors.passwordRepeat}
                                    errorText={errors?.passwordRepeat?.message} />
                            )}
                        />
                        <MainButton
                            label="Pokračovať"
                            style={styles.buttonContainer}
                            onPress={handleSubmit(onSubmit)}
                            disabled={!isDirty || !isValid} />
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