
import React from 'react';
import { StyleSheet, Image, View, Text } from 'react-native';
import { Theme } from '../themes/default';
import FloatingInput from './FloatingInput';

export default function CardItemInput(props: any) {
    const { header, image, inputBgColor, onChangeText, value } = props;

    return (
        <View style={styles.container}>
            <View style={styles.headerContainer}>
                <View style={styles.iconContainer}>
                    <Image source={image} style={styles.icon} />
                </View>
                <View style={styles.textContainer}>
                    <Text style={styles.header}>{header}</Text>
                </View>
            </View>
            <View>
                <FloatingInput
                    label="Zadaj kód"
                    bgColor={inputBgColor}
                    value={value}
                    onChangeText={onChangeText} />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "column",
        justifyContent: "flex-start",
        padding: 16,
        marginBottom: 16,
        backgroundColor: Theme.white,
        borderRadius: 6
    },
    headerContainer: {
        flexDirection: "row",
        justifyContent: "flex-start",
        marginBottom: 16
    },
    iconContainer: {
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "flex-start",
        marginRight: 16
    },
    textContainer: {
        flex: 1,
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "flex-start"
    },
    header: {
        fontSize: 12,
        fontWeight: "500",
        color: Theme.black,
        lineHeight: 18,
        letterSpacing: 0.2,
        marginBottom: 16
    },
    text: {
        fontSize: 12,
        fontWeight: "500",
        color: Theme.darkGray,
        lineHeight: 18,
        letterSpacing: 0.2
    },
    icon: {
        width: 32,
        height: 32
    }
});
