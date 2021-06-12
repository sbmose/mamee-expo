import React from 'react';
import {
    TouchableOpacity,
    StyleSheet,
    Text
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Theme } from '../themes/default';

export function HeaderButtonText({ label, onPress }: any) {
    const navigation: any = useNavigation();

    function handlePress() {
        onPress ? onPress() : navigation.goBack();
    }


    return (
        <TouchableOpacity
            style={styles.headerButton}
            onPress={() => handlePress()}>
            <Text style={styles.text}>{label}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    headerButton: {
        flex: 1,
        overflow: "hidden",
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: "center",
        alignContent: "center",
        paddingHorizontal: 20
    },
    text: {
        fontSize: 16,
        fontWeight: "400",
        letterSpacing: 0.2,
        color: Theme.pink
    }
})
