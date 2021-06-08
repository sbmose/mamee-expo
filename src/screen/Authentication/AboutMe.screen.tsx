import React, { useState } from 'react';
import {
    StyleSheet,
    SafeAreaView,
    View
} from 'react-native';
import { Theme, ThemeStyles } from '../../themes/default';
import { AuthStackConfig } from '../../navigation/Navigation.config';
import CardItemInput from '../../components/CardItemInput';
import { useSelector, useDispatch } from 'react-redux';
import { verifyEmail } from '../../store/actions/ProfileActions';
import MainButton from '../../components/MainButton';
import ProgressBar from '../../components/ProgressBar';

export default function AboutMeScreen({ navigation }: any) {
    const dispatch = useDispatch();


    return (
        <SafeAreaView style={ThemeStyles.safeAreaContainer}>
            <View style={styles.container}>
                <ProgressBar progress={25} />
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
        justifyContent: "center",
    },
    buttonContainer: {
        marginBottom: 16
    }
});
