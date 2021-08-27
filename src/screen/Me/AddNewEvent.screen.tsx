// @ts-ignore
import React from 'react';
import { SafeAreaView, View, StyleSheet } from 'react-native';
import { ThemeStyles } from "../../themes/default";
import ListItemInput from '../../components/ListItemInput';
import { Controller, useForm } from 'react-hook-form';

export default function AddNewEventScreen({ navigation }: any) {
    const { handleSubmit, control, errors, setValue, getValues, formState: { isValid } } = useForm({ mode: "onChange", reValidateMode: "onChange" });

    return (
        <SafeAreaView style={ThemeStyles.safeAreaContainer}>
            <View style={styles.container}>
                <View style={[ThemeStyles.cardContainer, { paddingVertical: 0 }]}>
                    <Controller
                        name="title"
                        defaultValue=""
                        control={control}
                        rules={{
                            required: { value: true, message: "Meno je vyžadované" }
                        }}
                        render={({ onChange, value }: any) => (
                            <ListItemInput
                                label="Názov"
                                value={value}
                                onChangeText={(text: string) => onChange(text)}
                                error={errors.title}
                                errorText={errors?.title?.message} />
                        )}
                    />
                    <Controller
                        name="date"
                        defaultValue=""
                        control={control}
                        rules={{
                            required: { value: true, message: "Meno je vyžadované" }
                        }}
                        render={({ onChange, value }: any) => (
                            <ListItemInput
                                label="Dátum"
                                value={value}
                                onChangeText={(text: string) => onChange(text)}
                                error={errors.date}
                                errorText={errors?.date?.message} />
                        )}
                    />
                    <Controller
                        name="time"
                        defaultValue=""
                        control={control}
                        rules={{
                            required: { value: true, message: "Meno je vyžadované" }
                        }}
                        render={({ onChange, value }: any) => (
                            <ListItemInput
                                label="Čas"
                                value={value}
                                onChangeText={(text: string) => onChange(text)}
                                error={errors.time}
                                errorText={errors?.time?.message} />
                        )}
                    />
                    <Controller
                        name="note"
                        defaultValue=""
                        control={control}
                        rules={{
                            required: { value: true, message: "Meno je vyžadované" }
                        }}
                        render={({ onChange, value }: any) => (
                            <ListItemInput
                                label="Poznámky"
                                noBorder={true}
                                value={value}
                                onChangeText={(text: string) => onChange(text)}
                                error={errors.note}
                                errorText={errors?.note?.message} />
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
