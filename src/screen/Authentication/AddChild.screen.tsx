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
import { addChild } from '../../store/actions/ProfileActions';
import { AuthStackConfig } from '../../navigation/Navigation.config';
import RadioButton from '../../components/RadioButton';

export default function AddChildScreen({ navigation }: any) {
    const { handleSubmit, control, errors, setValue, getValues, formState: { isValid } } = useForm({ mode: "onChange", reValidateMode: "onChange" });
    const [showDatePicker, setShowDatePicker] = useState(false);
    const [sex, setSex] = useState("FEMALE");
    const dispatch = useDispatch();

    const onSubmit = async (data: any) => {
        let success: any = await dispatch(addChild({ ...data, sex: sex }));
        setValue("name", "");
        setValue("dateOfBirth", "");
        setSex("FEMALE");
        success && navigation.navigate(AuthStackConfig.MY_CHILDREN_SCREEN.name);
    }

    const handleChangeDate = (date: any) => {
        setValue("dateOfBirth", moment(date).format("D/M/YYYY"), { shouldValidate: true });
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
                    <Text style={ThemeStyles.bigHeader}>Údaje o deťoch</Text>
                    <Text style={[ThemeStyles.infoTextMedium, { marginBottom: 30 }]}>
                        <Text>Aplikácia nie je iba o tebe, ale aj o tvojich deťoch. Užitočné informácie z ich života si budeš môcť uložiť v aplikácii a sledovať tvoje povinnosti, resp. ukladať zážitky priamo v aplikácii.</Text>
                    </Text>
                    <Controller
                        name="name"
                        defaultValue=""
                        control={control}
                        rules={{
                            required: { value: true, message: "Meno je vyžadované" }
                        }}
                        render={({ onChange, value }: any) => (
                            <FloatingInput
                                label="Meno"
                                value={value}
                                style={styles.input}
                                onChangeText={(text: string) => onChange(text)}
                                error={errors.name}
                                errorText={errors?.name?.message} />
                        )}
                    />
                    <Controller
                        name="dateOfBirth"
                        defaultValue=""
                        control={control}
                        rules={{
                            required: { value: true, message: "Dátum je vyžadován" }
                        }}
                        render={({ onChange, value }: any) => (
                            <FloatingInput
                                label="Dátum narodenia"
                                value={value}
                                style={styles.input}
                                onChangeText={null}
                                error={errors.dateOfBirth}
                                errorText={errors?.dateOfBirth?.message}
                                onFocus={() => setShowDatePicker(true)}
                                onBlur={() => setShowDatePicker(false)}
                                forceFocused={showDatePicker} />
                        )}
                    />
                    <View style={styles.radionButtonsContainer}>
                        <RadioButton
                            label="Dievča"
                            checked={sex === "FEMALE"}
                            onPress={() => setSex("FEMALE")} />
                        <RadioButton
                            style={{ marginLeft: 16 }}
                            label="Chlapec"
                            checked={sex === "MALE"}
                            onPress={() => setSex("MALE")} />
                    </View>
                    <MainButton
                        label="Pridať"
                        style={styles.buttonContainer}
                        onPress={handleSubmit(onSubmit)}
                        disabled={!isValid} />
                    <ProgressBar progress={75} />
                    {showDatePicker && <DateTimePicker
                        style={styles.datepicker}
                        testID="dateTimePicker"
                        maximumDate={new Date()}
                        minimumDate={new Date(1950, 0, 1)}
                        locale="sk-SK"
                        neutralButtonLabel="clear"
                        value={getValues("dateOfBirth") ? moment(getValues("dateOfBirth"), "D/M/YYYY").toDate() : new Date()}
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
        justifyContent: "flex-end"
    },
    buttonContainer: {
        marginBottom: 20
    },
    infoTextContainer: {
        flexDirection: "row",
        justifyContent: "flex-start"
    },
    radionButtonsContainer: {
        flexDirection: "row",
        justifyContent: "flex-start",
        marginBottom: 16,
    },
    input: {
        marginBottom: 16
    },
    datepicker: {
        bottom: 0
    }
});
