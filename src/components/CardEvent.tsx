
import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Theme } from '../themes/default';

export default function CardEvent({ header, text, color }: any) {

    return (
        <View style={styles.container}>
            <View style={styles.iconContainer}>
                <View style={[styles.round, color && { backgroundColor: color }]}></View>
            </View>
            <View style={styles.textContainer}>
                <Text style={styles.header}>{header}</Text>
                {text && <Text style={styles.text}>{text}</Text>}
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        justifyContent: "flex-start",
        padding: 16,
        marginBottom: 16,
        backgroundColor: Theme.white,
        borderRadius: 6
    },
    iconContainer: {
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "flex-start",
        alignContent: "center",
        marginRight: 16
    },
    textContainer: {
        flex: 1,
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "flex-start"
    },
    header: {
        fontSize: 14,
        fontWeight: "500",
        color: Theme.black,
        lineHeight: 20,
        letterSpacing: 0.2

    },
    text: {
        fontSize: 12,
        fontWeight: "500",
        color: Theme.darkGray,
        lineHeight: 18,
        letterSpacing: 0.2,
    },
    round: {
        width: 16,
        height: 16,
        borderRadius: 16,
        backgroundColor: Theme.pink
    },
});
