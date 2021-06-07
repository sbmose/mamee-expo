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
import { ListItem, Body, CheckBox } from "native-base";
import TransparentButton from '../../components/TransparentButton';
import { useSelector, useDispatch } from 'react-redux';
import { loginByEmail } from '../../store/actions/ProfileActions';
import { useForm, Controller } from 'react-hook-form';
import { AuthStackConfig } from '../../navigation/Navigation.config';
import { TouchableOpacity } from 'react-native-gesture-handler';

// Screen Styles

export default function RegistrationEmailPassScreen({ navigation }: any) {
    const dispatch = useDispatch();
    const { auth } = useSelector((state: any) => state.profile)
    const EMAIL_REGEX = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const { handleSubmit, control, errors, watch, setValue, formState: { isDirty, isValid, isSubmitted } } = useForm({ mode: "onChange", reValidateMode: "onChange" });
    const password = useRef({});
    password.current = watch("password", "");

    const onSubmit = (data: any) => {
        console.log('onSubmit', data, errors);
        //dispatch(loginByEmail(data.email, data.password));
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
                                    isPassword
                                    onChangeText={(text: string) => onChange(text)}
                                    error={errors.passwordRepeat}
                                    errorText={errors?.passwordRepeat?.message} />
                            )}
                        />
                        <View style={styles.chceckboxContainer}>
                            <Controller
                                name="conditions"
                                defaultValue={false}
                                control={control}
                                rules={{
                                    validate: (value: boolean) => value === true,
                                }}
                                render={({ value, field, onChange }: any) => <CheckBox
                                    checked={value}
                                    color={Theme.pink}
                                    style={styles.checkbox}
                                    onPress={() => onChange(!value)}
                                    {...field}
                                />}
                            />
                            <View style={styles.transparenButtonContainer}>
                                <Text>Súhlasím s </Text>
                                <TransparentButton
                                    label="podmienkami používania aplikácie"
                                    style={{ paddingVertical: 0, margin: 0, alignItems: "center" }} />
                            </View>
                        </View>
                        <MainButton
                            label="Pokračovať"
                            style={styles.buttonContainer}
                            onPress={handleSubmit(onSubmit)}
                            disabled={!isValid} />
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
    }
});