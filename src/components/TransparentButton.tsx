import React from 'react';
import { StyleSheet, Text } from 'react-native';
import { Theme } from '../themes/default';
import {
    Button
} from "native-base";

export default function TransparentButton(props: any) {
    const { label, style, textColor, textStyle, onPress } = props;

    return (
        <Button
            style={[styles.button, style]}
            transparent
            onPress={onPress}>
            <Text style={[styles.text, textStyle, textColor && { color: textColor }]}>{label}</Text>
        </Button>
    );
}

const styles = StyleSheet.create({
    button: {
        alignSelf: "center",
    },
    text: {
        fontSize: 14,
        fontWeight: "400",
        lineHeight: 20,
        letterSpacing: 0.2,
        color: Theme.pink
    },
});