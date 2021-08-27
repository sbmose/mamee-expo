
import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Text, Button } from 'native-base';
import { Theme } from '../themes/default';
import { useNavigation } from '@react-navigation/native';


export default function CardItemButton(props: any) {
    const { label, onPress, noBorder } = props;

    return (
        <View style={[styles.container, noBorder && { borderBottomWidth: 0 }]}>
            <View style={styles.leftContainer}>
                <Text style={styles.label}>{label}</Text>
            </View>
            <View style={styles.rightContainer}>
                <Button style={styles.detailButton} transparent
                    onPress={onPress}>
                    <Text style={styles.buttonText}>Detail</Text>
                </Button>
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
        flex: 2,
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
    detailButton: {
        alignSelf: "flex-end",
    },
    buttonText: {
        fontSize: 16,
        fontWeight: "400",
        lineHeight: 24,
        letterSpacing: 0.2,
        color: Theme.pink
    }
});
