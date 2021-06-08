
import React, { useState } from 'react';
import { StyleSheet, Image, View, Text, TouchableOpacity } from 'react-native';
import { Theme } from '../themes/default';
import { MaterialIcons as Icon } from '@expo/vector-icons';

export default function CardExpand({ header, text }: any) {
    const [expand, setExpand] = useState(false);

    return (
        <TouchableOpacity
            style={styles.container}
            activeOpacity={0.7}
            onPress={() => setExpand(!expand)}>
            <View style={styles.headerContainer}>
                <Text style={styles.header}>{header}</Text>
                <Icon
                    size={28}
                    name={expand ? "keyboard-arrow-up" : "keyboard-arrow-down"}
                    color={Theme.black}
                />
            </View>
            {expand && <View style={styles.expandableContainer}>
                <Text style={styles.text}>{text}</Text>
            </View>}
        </TouchableOpacity>
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
        justifyContent: "center",
        alignItems: "center"
    },
    expandableContainer: {
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "flex-start"
    },
    header: {
        flex: 1,
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
        letterSpacing: 0.2
    },
    icon: {
        width: 32,
        height: 32
    }
});
