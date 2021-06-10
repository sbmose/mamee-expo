import React, { useState } from 'react';
import DateTimePicker from '@react-native-community/datetimepicker';
import {
    StyleSheet,
    SafeAreaView,
    View,
    Text,
    KeyboardAvoidingView,
    Platform
} from 'react-native';
import { ThemeStyles } from '../../themes/default';
import { useDispatch } from 'react-redux';
import MainButton from '../../components/MainButton';
import ProgressBar from '../../components/ProgressBar';
import FloatingInput from '../../components/FloatingInput';
import { Controller, useForm } from 'react-hook-form';
import moment from 'moment';
import { updateBio } from '../../store/actions/ProfileActions';
import { AuthStackConfig } from '../../navigation/Navigation.config';

export default function LastPeriodScreen({ navigation }: any) {
    const { handleSubmit, control, errors, setValue, getValues, formState: { isValid } } = useForm({ mode: "onChange", reValidateMode: "onChange" });
    const [showDatePicker, setShowDatePicker] = useState(false);
    const [datePickerType, setDatePickerType]: any = useState(undefined);
    const dispatch = useDispatch();

    const onSubmit = async (data: any) => {
        let success: any = await dispatch(updateBio(data));
        success && navigation.navigate(AuthStackConfig.GDPR_SCREEN.name);
    }

    const handleChangeDate = (date: any) => {
        datePickerType && setValue(datePickerType, moment(date).format("D/M/YYYY"), { shouldValidate: true });
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
                    <Text style={ThemeStyles.bigHeader}>Dátum poslednej menštruácie</Text>
                    <Controller
                        name="startOfLastPeriod"
                        defaultValue=""
                        control={control}
                        rules={{
                            required: { value: true, message: "Dátum je vyžadovaný" }
                        }}
                        render={({ onChange, value }: any) => (
                            <FloatingInput
                                label="Dátum začiatku"
                                keyboardType={'none'}
                                value={value}
                                style={styles.input}
                                onChangeText={(text: string) => onChange(text)}
                                error={errors.startOfLastPeriod}
                                errorText={errors?.startOfLastPeriod?.message}
                                onFocus={() => {
                                    setDatePickerType("startOfLastPeriod");
                                    setShowDatePicker(true);
                                }}
                                onBlur={() => {
                                    setDatePickerType(undefined);
                                    setShowDatePicker(false);
                                }}
                                forceFocused={datePickerType === "startOfLastPeriod"} />
                        )}
                    />
                    <Controller
                        name="endOfLastPeriod"
                        defaultValue=""
                        control={control}
                        rules={{
                            required: { value: true, message: "Dátum je vyžadovaný" }
                        }}
                        render={({ onChange, value }: any) => (
                            <FloatingInput
                                label="Dátum konca"
                                value={value}
                                style={styles.input}
                                onChangeText={null}
                                error={errors.endOfLastPeriod}
                                errorText={errors?.endOfLastPeriod?.message}
                                onFocus={() => {
                                    setDatePickerType("endOfLastPeriod");
                                    setShowDatePicker(true);
                                }}
                                onBlur={() => {
                                    setDatePickerType(undefined);
                                    setShowDatePicker(false);
                                }}
                                forceFocused={datePickerType === "endOfLastPeriod"} />
                        )}
                    />
                    <MainButton
                        label="Registrovať"
                        style={styles.buttonContainer}
                        onPress={handleSubmit(onSubmit)}
                        disabled={!isValid} />
                    <ProgressBar progress={100} />
                    {showDatePicker && <DateTimePicker
                        style={styles.datepicker}
                        testID="dateTimePicker"
                        maximumDate={new Date()}
                        minimumDate={new Date(1950, 0, 1)}
                        locale="sk-SK"
                        neutralButtonLabel="clear"
                        value={(datePickerType && getValues(datePickerType)) ? moment(getValues(datePickerType), "D/M/YYYY").toDate() : new Date()}
                        mode={"date"}
                        is24Hour={true}
                        display="spinner"
                        onChange={(event, date) => handleChangeDate(date)}
                    />}

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
        paddingBottom: 0
    },
    buttonContainer: {
        marginBottom: 20
    },
    infoTextContainer: {
        flexDirection: "row",
        justifyContent: "flex-start"
    },
    input: {
        marginBottom: 16
    },
    datepicker: {
        bottom: 0
    }
});
