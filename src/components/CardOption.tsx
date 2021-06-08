
import React from 'react';
import { StyleSheet, TouchableOpacity, Text } from 'react-native';
import { Theme } from '../themes/default';
import { useNavigation } from '@react-navigation/native';
import { MeStackConfig } from '../navigation/Navigation.config';
import TabBarIcons from './TabBarIcons';

export default function CardOption({ checked, iconName, label, onPress }: any) {
    const navigation = useNavigation()

    return (
        <TouchableOpacity
            activeOpacity={0.7}
            style={[styles.container, { backgroundColor: checked ? Theme.pink : Theme.white }]}
            onPress={onPress}>
            <TabBarIcons
                name={iconName}
                color={checked ? Theme.white : Theme.black}
                width={54}
                height={54} />
            <Text style={[styles.label, { color: checked ? Theme.white : Theme.black }]}>{label}</Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: Theme.white,
        margin: 8,
        padding: 36,
        borderRadius: 6
    },
    label: {
        fontSize: 14,
        color: Theme.black,
        lineHeight: 20,
        letterSpacing: 0.2,
        fontWeight: "500",
        marginTop: 16
    },
});
