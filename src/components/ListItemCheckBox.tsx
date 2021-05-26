
import React from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { CheckBox, Text, Body } from 'native-base';
import { SvgXml } from 'react-native-svg';
import { Theme } from '../themes/default';
import SvgIcon from './SvgIcons';


export default function ListItemCheckBox(props: any) {
    const { label } = props;

    return (
        <TouchableOpacity
            style={[styles.container]}
            onPress={() => console.log("Checkbox list item press")}>
            <View style={styles.iconContainer}>
                <SvgIcon iconName="pohlavia" />
            </View>
            <View style={styles.labelContainer}>
                <Text style={styles.label}>{label}</Text>

            </View>
            <CheckBox />
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "flex-start",
        backgroundColor: Theme.appBg
    },
    iconContainer: {
        flexDirection: "column",
        justifyContent: "flex-start",
    },
    labelContainer: {
        flex: 1,
        flexDirection: "column",
        justifyContent: "flex-start",
    },
    label: {

    }
});
