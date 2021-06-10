import React, { useRef } from 'react';
import {
    StyleSheet,
    SafeAreaView,
    View,
    KeyboardAvoidingView,
    Platform
} from 'react-native';
import { Theme, ThemeStyles } from '../../themes/default';
import { useDispatch } from 'react-redux';
import MainButton from '../../components/MainButton';
import FloatingInput from '../../components/FloatingInput';
import { Controller, useForm } from 'react-hook-form';
import { updateAuth } from '../../store/actions/ProfileActions';
import CardItemText from '../../components/CardItemText';
import { AuthStackConfig } from '../../navigation/Navigation.config';

export default function CreatePinScreen({ navigation }: any) {
    const { handleSubmit, control, errors, watch, formState: { isValid, isDirty } } = useForm({ mode: "onChange", reValidateMode: "onChange" });
    const PIN_PATTERN = /^-?[0-9]\d*\.?\d*$/;
    const pin = useRef({});
    pin.current = watch("pin", "");
    const dispatch = useDispatch();

    const onSubmit = async (data: any) => {
        let success: any = await dispatch(updateAuth({ pin: data.pin }));
        console.log('onSubmit', data, success);
        success && navigation.navigate(AuthStackConfig.GRATULATION_SCREEN.name);
    }

    return (
        <SafeAreaView style={ThemeStyles.safeAreaContainer}>
            <KeyboardAvoidingView
                behavior={Platform.OS == 'ios' ? 'padding' : null}
                scrollEnabled={false}
                resetScrollToCoords={{ x: 0, y: 0 }}
                style={{ flex: 1 }}
                enabled>
                <View style={styles.container}>
                    <CardItemText
                        image={require('../../../assets/info.png')}
                        header="Zadaj 4 miestny PIN" />
                    <View style={styles.inputsContainer}>
                        <Controller
                            name="pin"
                            defaultValue=""
                            control={control}
                            rules={{
                                required: { value: true, message: "PIN je je vyžadovaný" },
                                pattern: {
                                    value: PIN_PATTERN,
                                    message: 'Iba 4 čísla'
                                },
                                minLength: {
                                    value: 4,
                                    message: "Iba 4 čísla"
                                },
                                maxLength: {
                                    value: 4,
                                    message: "Iba 4 čísla"
                                }
                            }}
                            render={({ onChange, value }: any) => (
                                <FloatingInput
                                    label="Zadaj PIN"
                                    value={value}
                                    isPassword
                                    keyboardType="numeric"
                                    bgColor={Theme.white}
                                    style={styles.input}
                                    onChangeText={(text: string) => onChange(text)}
                                    error={errors.pin}
                                    errorText={errors?.pin?.message} />
                            )}
                        />
                        <Controller
                            name="pin_repeat"
                            defaultValue=""
                            control={control}
                            rules={{
                                required: { value: true, message: "PIN je je vyžadovaný" },
                                minLength: {
                                    value: 4,
                                    message: "Iba 4 čísla"
                                },
                                maxLength: {
                                    value: 4,
                                    message: "Iba 4 čísla"
                                },
                                pattern: {
                                    value: PIN_PATTERN,
                                    message: 'Iba 4 čísla'
                                },
                                validate: value => value === pin.current || "PIN sa nezhoduje"
                            }}
                            render={({ onChange, value }: any) => (
                                <FloatingInput
                                    label="Overiť pin"
                                    value={value}
                                    isPassword
                                    keyboardType="numeric"
                                    bgColor={Theme.white}
                                    onChangeText={(text: string) => onChange(text)}
                                    error={errors.pin_repeat}
                                    errorText={errors?.pin_repeat?.message} />
                            )}
                        />
                    </View>
                    <MainButton
                        label="Potvrdiť"
                        onPress={handleSubmit(onSubmit)}
                        disabled={!isDirty || !isValid} />
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
    inputsContainer: {
        flexDirection: "column",
        justifyContent: "flex-start",
        padding: 16,
        marginBottom: 16,
        backgroundColor: Theme.white,
        borderRadius: 6
    },
    input: {
        marginBottom: 16
    }
});
