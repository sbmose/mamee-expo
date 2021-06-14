// @ts-ignore
import React from 'react';
import { SafeAreaView, View, StyleSheet } from 'react-native';
import { ThemeStyles } from "../../themes/default";
import ListItemInput from '../../components/ListItemInput';
import { Controller, useForm } from 'react-hook-form';

export default function CalculatePeriodScreen({ navigation }: any) {
    const { handleSubmit, control, errors, setValue, getValues, formState: { isValid } } = useForm({ mode: "onChange", reValidateMode: "onChange" });

    return (
        <SafeAreaView style={ThemeStyles.safeAreaContainer}>
            <View style={styles.container}>
                <View style={[ThemeStyles.cardContainer, { paddingVertical: 0 }]}>
                    <Controller
                        name="lastPeriod"
                        defaultValue=""
                        control={control}
                        rules={{
                            required: { value: true, message: "Meno je vyžadované" }
                        }}
                        render={({ onChange, value }: any) => (
                            <ListItemInput
                                label="Začiatok posl. menštruácie"
                                keyboardType={'none'}
                                value={value}
                                onChangeText={(text: string) => onChange(text)}
                                error={errors.lastPeriod}
                                errorText={errors?.lastPeriod?.message} />
                        )}
                    />
                    <Controller
                        name="duration"
                        defaultValue=""
                        control={control}
                        rules={{
                            required: { value: true, message: "Meno je vyžadované" }
                        }}
                        render={({ onChange, value }: any) => (
                            <ListItemInput
                                label="Trvanie menštruácie"
                                value={value}
                                keyboardType={'numeric'}
                                onChangeText={(text: string) => onChange(text)}
                                error={errors.duration}
                                errorText={errors?.duration?.message} />
                        )}
                    />
                    <Controller
                        name="periodInterval"
                        defaultValue=""
                        control={control}
                        rules={{
                            required: { value: true, message: "Meno je vyžadované" }
                        }}
                        render={({ onChange, value }: any) => (
                            <ListItemInput
                                label="Dĺžka menštruačného cyklu"
                                value={value}
                                eyboardType={'numeric'}
                                onChangeText={(text: string) => onChange(text)}
                                error={errors.periodInterval}
                                errorText={errors?.periodInterval?.message} />
                        )}
                    />
                </View>
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
        justifyContent: "flex-start"
    },
})
