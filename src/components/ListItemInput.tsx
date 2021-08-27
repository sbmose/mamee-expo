import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { Text, Input } from 'native-base';
import { Theme } from '../themes/default';

export default function ListItemInput(props: any) {
    const { label, bgColor, style, onChangeText, value, error, errorText, onFocus, onBlur, forceFocused, keyboardType, noBorder } = props;
    const [isFocused, setFocused] = useState(false);

    return (
        <View style={[styles.container, noBorder && { borderBottomWidth: 0 }]}>
            <View style={styles.leftContainer}>
                <Text style={styles.label}>{label}</Text>
            </View>
            <View style={styles.rightContainer}>
                <Input
                    style={styles.input}
                    value={value}
                    keyboardType={keyboardType}
                    isFocused={forceFocused || isFocused}
                    onChangeText={(value: string) => onChangeText(value)}
                    onFocus={() => {
                        setFocused(!isFocused);
                        onFocus;
                    }}
                    onBlur={() => {
                        setFocused(!isFocused);
                        onBlur;
                    }} />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        paddingVertical: 16,
        borderBottomWidth: 1,
        borderBottomColor: Theme.lightGrey,
        flexDirection: "row",
        justifyContent: "space-between"
    },
    leftContainer: {
        flex: 1,
        flexDirection: "column",
        justifyContent: "center"
    },
    rightContainer: {
        flex: 1,
        flexDirection: "column",
        justifyContent: "center"
    },
    label: {
        fontSize: 16,
        color: Theme.darkGray,
        lineHeight: 24,
        letterSpacing: 0.2
    },
    input: {
        width: "100%",
        fontSize: 16,
        color: Theme.black,
        letterSpacing: 0.2,
    }
});
