import React from 'react';
import { StyleSheet, View } from 'react-native';
import { CardItem, Text, Input } from 'native-base';
import { Theme } from '../themes/default';

export default function ListItemInput(props: any) {
    const { label, noBorder, bgColor, style, onChangeText, value, error, errorText, onFocus, onBlur, forceFocused, keyboardType } = props;

    return (
        <View style={[styles.container, noBorder && { borderBottomWidth: 0 }]}>
            <View style={styles.leftContainer}>
                <Text style={styles.label}>{label}</Text>
            </View>
            <View style={styles.rightContainer}>
                <Input style={styles.input} value={value} />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        paddingVertical: 16,
        borderBottomWidth: 1,
        borderBottomColor: Theme.lightGrey
    },
    leftContainer: {

    },
    rightContainer: {

    },
    label: {
        fontSize: 16,
        color: Theme.darkGray,
        lineHeight: 24,
        letterSpacing: 0.2
    },
    input: {
        fontSize: 16,
        color: Theme.black,
        lineHeight: 24,
        letterSpacing: 0.2
    }
});
