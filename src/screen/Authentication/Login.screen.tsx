import React from 'react';
import {
    StyleSheet,
    SafeAreaView,
    ScrollView,
    Text,
    View,
    KeyboardAvoidingView,
    Platform
} from 'react-native';
import { Theme, ThemeStyles } from '../../themes/default';
import FloatingInput from '../../components/FloatingInput';
import MainButton from '../../components/MainButton';
import TransparentButton from '../../components/TransparentButton';
import { useDispatch } from 'react-redux';
import { loginByEmail } from '../../store/actions/ProfileActions';
import { useForm, Controller } from 'react-hook-form';
import { AuthStackConfig } from '../../navigation/Navigation.config';

export default function LoginScreen({ navigation }: any) {
    //const { auth } = useSelector((state: any) => state.profile)
    const dispatch = useDispatch();
    const EMAIL_REGEX = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const { handleSubmit, control, errors, setValue, formState: { isValid } } = useForm({ mode: "onChange", reValidateMode: "onChange" });

    const onSubmit = (data: any) => {
        console.log('onSubmit', data, errors);
        dispatch(loginByEmail(data.email, data.password));
        setValue("email", "");
        setValue("password", "");
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
            <KeyboardAvoidingView
                behavior={Platform.OS == 'ios' ? 'padding' : null}
                scrollEnabled={false}
                keyboardVerticalOffset={-165}
                resetScrollToCoords={{ x: 0, y: 0 }}
                enabled
                style={styles.keyboard}>
                <View style={styles.container}>
                    <View>
                        <Text style={styles.header}>Prihl??senie</Text>
                        <Controller
                            name="email"
                            defaultValue=""
                            control={control}
                            rules={{
                                required: { value: true, message: 'Email je vy??adov??n' },
                                pattern: {
                                    value: EMAIL_REGEX,
                                    message: '??patn?? form??t emailu'
                                }
                            }}
                            render={({ onChange, value }: any) => (
                                <FloatingInput
                                    label="E-mail"
                                    value={value}
                                    keyboardType="email-address"
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
                                required: { value: true, message: 'Heslo je vy??adov??no' }
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
                        <MainButton
                            label="Pokra??ova??"
                            style={styles.buttonContainer}
                            onPress={handleSubmit(onSubmit)}
                            disabled={!isValid} />
                        <TransparentButton
                            label="Nem??m ????et"
                            textColor={Theme.darkGray}
                            style={styles.buttonContainer}
                            onPress={() => navigation.navigate(AuthStackConfig.REGISTRATION_SCREEN.name)} />
                        <MainButton
                            label="Prihl??si?? sa cez Google ????et"
                            style={styles.buttonContainer}
                            bgColor={Theme.white}
                            textColor={Theme.black}
                            image={require('../../../assets/google.png')}
                            onPress={() => handleGoogleLogin()} />
                        <MainButton
                            label="Prihl??si?? sa cez Facebook"
                            style={styles.buttonContainer}
                            bgColor={Theme.blue}
                            textColor={Theme.white}
                            image={require('../../../assets/facebook.png')}
                            onPress={() => handleFacebookLogin()} />
                    </View>
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
    keyboard: {
        flex: 1
    }
});