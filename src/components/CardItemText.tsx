
import React from 'react';
import { StyleSheet, Image, View, Text, TouchableOpacity } from 'react-native';
import { Theme } from '../themes/default';
import TabBarIcons from './TabBarIcons';

export default function CardItemText({ header, text, image, iconName, color, onPress }: any) {

    return (
        <TouchableOpacity
            activeOpacity={0.7}
            style={[styles.container]}
            onPress={onPress}>
            <View style={styles.iconContainer}>
                {image && <Image source={image} style={styles.icon} />}
                {iconName && <TabBarIcons name={iconName} color={color || Theme.pink} width={25} height={25} />}
            </View>
            <View style={styles.textContainer}>
                <Text style={styles.header}>{header}</Text>
            </View>
        </TouchableOpacity>
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
        justifyContent: "center",
        alignItems: "flex-start"
    },
    header: {
        fontSize: 14,
        fontWeight: "500",
        color: Theme.black,
        lineHeight: 20,
        letterSpacing: 0.2,

    },
    icon: {
        width: 32,
        height: 32
    }
});
