
import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Theme } from '../themes/default';
import { Ionicons as Icon } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native';

export default function RadioButton(props: any) {
    const { checked, label, onPress, style } = props;

    return (
        <TouchableOpacity
            style={[styles.container, style]}
            activeOpacity={0.7}
            onPress={onPress}>
            <Icon
                size={28}
                name={checked ? "radio-button-on" : "radio-button-off"}
                color={checked ? Theme.pink : Theme.gray}
            />
            <Text style={styles.label}>{label}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "baseline",
        marginVertical: 8
    },
    label: {
        fontSize: 14,
        fontWeight: "500",
        color: Theme.black,
        letterSpacing: 0.2,
        alignSelf: "center",
        marginLeft: 16

    }
});
