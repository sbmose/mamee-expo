import React from 'react';
import {
    View,
    Text,
    StyleSheet
} from 'react-native';
import { Theme } from '../themes/default';

export function HeaderBigTitle({ title }: any) {

    return (
        <View style={styles.container}>
            <Text style={styles.text}>
                {title}
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        overflow: "hidden",
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: "center",
        alignContent: "center",
        paddingHorizontal: 16
    },
    text: {
        fontSize: 32,
        fontWeight: "600",
        letterSpacing: 0.5,
        color: Theme.black
    },
})
