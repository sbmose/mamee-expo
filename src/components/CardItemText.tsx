
import React from 'react';
import { StyleSheet, Image, View, Text } from 'react-native';
import { Theme } from '../themes/default';

export default function CardItemText({ header, text, image }: any) {

    return (
        <View style={styles.container}>
            <View style={styles.iconContainer}>
                <Image source={image} style={styles.icon} />
            </View>
            <View style={styles.iconContainer}>
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
        justifyContent: "flex-start",
        alignItems: "flex-start",
        alignContent: "center",
        marginRight: 16
    },
    textContainer: {
        flex: 1,
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "flex-start"
    },
    header: {
        fontSize: 14,
        fontWeight: "500",
        color: Theme.black,
        lineHeight: 20,
        letterSpacing: 0.2,
        paddingTop: 8

    },
    text: {
        fontSize: 12,
        fontWeight: "500",
        color: Theme.darkGray,
        lineHeight: 18,
        letterSpacing: 0.2,
        marginTop: 16
    },
    icon: {
        width: 32,
        height: 32
    }
});
