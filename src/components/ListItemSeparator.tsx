
import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Theme } from '../themes/default';

export const ListItemSeparator = () => {
    return (
        <View
            style={styles.separator}
        />
    );
}

const styles = StyleSheet.create({
    separator: {
        height: 1,
        marginVertical: 20,
        marginHorizontal: 16,
        backgroundColor: Theme.lightGrey
    }
});
