import React, { useState } from 'react';
import DateTimePicker from '@react-native-community/datetimepicker';
import {
    StyleSheet,
    SafeAreaView,
    View,
    Text
} from 'react-native';
import { Theme, ThemeStyles } from '../../themes/default';
import { useDispatch } from 'react-redux';
import MainButton from '../../components/MainButton';
import ProgressBar from '../../components/ProgressBar';
import FloatingInput from '../../components/FloatingInput';
import { Controller, useForm } from 'react-hook-form';
import moment from 'moment';


export default function AboutMeScreen({ navigation }: any) {
    const { handleSubmit, control, errors, setValue, getValues, formState: { isValid, isDirty } } = useForm({ mode: "onChange", reValidateMode: "onChange" });
    const [showDatePicker, setShowDatePicker] = useState(false);
    const dispatch = useDispatch();

    const onSubmit = async (data: any) => {
        //let success: any = await dispatch(registerByEmail(data.email, data.password));
        console.log('onSubmit', data, errors);
        //success && navigation.navigate(AuthStackConfig.EMAIL_VERIFICATION_SCREEN.name);
    }

    const handleChangeDate = (date: any) => {
        setValue("dateOfBirth", moment(date).format("D/M/YYYY"), { shouldValidate: true });
        console.log("date", date, moment(getValues("dateOfBirth"), "D/M/YYYY").toDate());
    }

    console.log("Initial date", isValid)

    return (
        <SafeAreaView style={ThemeStyles.safeAreaContainer}>
            <View style={styles.container}>
                <Text style={ThemeStyles.bigHeader}>Údaje o tebe</Text>
                <Text style={[ThemeStyles.infoTextMedium, { marginBottom: 30 }]}>
                    <Text style={{ color: Theme.pink }}>Gratulujeme!</Text>
                    <Text> Vďaka tomu, že nám o sebe povieš viac, vieme lepšie prispôsobiť obsah aplikácie pre osobnejší a na mieru ušitý zážitok.</Text>
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
                            onBlur={() => setShowDatePicker(false)} />
                    )}
                />
                <MainButton
                    label="Pokračovať"
                    style={styles.buttonContainer}
                    onPress={handleSubmit(onSubmit)}
                    disabled={!isValid} />
                <ProgressBar progress={25} />
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
