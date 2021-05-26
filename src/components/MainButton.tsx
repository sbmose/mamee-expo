import React from 'react';
import { StyleSheet, TouchableOpacity, Text } from 'react-native';
import { Theme } from '../themes/default';

export default function MainButton({ label, ...props }: any) {
    return (
        <TouchableOpacity
            activeOpacity={0.7}
            style={styles.button}
            {...props} >
            <Text style={styles.buttonLabel}>{label}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    button: {
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: 56,
        backgroundColor: Theme.pink,
        borderRadius: 6
    },
    buttonLabel: {
        fontSize: 16,
        lineHeight: 24,
        letterSpacing: 0.1,
        fontWeight: "600",
        color: Theme.white,
    }
});