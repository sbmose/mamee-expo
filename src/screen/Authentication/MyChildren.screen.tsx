import React, { useState } from 'react';
import {
    StyleSheet,
    SafeAreaView,
    View,
    Text
} from 'react-native';
import { Theme, ThemeStyles } from '../../themes/default';
import { useSelector } from 'react-redux';
import MainButton from '../../components/MainButton';
import ProgressBar from '../../components/ProgressBar';
import { AuthStackConfig } from '../../navigation/Navigation.config';
import TransparentButton from '../../components/TransparentButton';
import CardItemText from '../../components/CardItemText';

export default function MyChildrenScreen({ navigation }: any) {
    const { children } = useSelector((state: any) => state.profile.bio)

    return (
        <SafeAreaView style={ThemeStyles.safeAreaContainer}>
            <View style={styles.container}>
                <Text style={ThemeStyles.bigHeader}>Údaje o deťoch</Text>
                <View>
                    {children.map((item: any) => (
                        <CardItemText
                            key={item.name}
                            image={require('../../../assets/babykruh.png')}
                            header={item.name} />
                    ))}
                </View>
                <TransparentButton
                    label="Pridať ďalšie dieťa"
                    textColor={Theme.green}
                    style={styles.addButton}
                    textStyle={styles.addButtonText}
                    onPress={() => navigation.navigate(AuthStackConfig.ADD_CHILD.name)} />
                <MainButton
                    label="Pokračovať"
                    style={styles.buttonContainer}
                    onPress={() => navigation.navigate(AuthStackConfig.LAST_PERIOD_SCREEN.name)} />
                <ProgressBar progress={75} />
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
    addButton: {
        marginBottom: 10
    },
    addButtonText: {
        fontSize: 16,
        fontWeight: "600"
    }
});
