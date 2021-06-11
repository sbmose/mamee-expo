import React from 'react';
import { StyleSheet } from 'react-native';
import { CardItem, Text, Left, Body, Input } from 'native-base';
import { Theme } from '../themes/default';

export default function ListItemInput(props: any) {
    const { label, value } = props;

    return (
        <CardItem style={styles.container}>
            <Left>
                <Text style={styles.label}>{label}</Text>
            </Left>
            <Body>
                <Input value={value} />
            </Body>
        </CardItem>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 0,
        marginHorizontal: 16,
        borderBottomWidth: 1,
        borderBottomColor: Theme.lightGrey
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
        fontSize: 16,
        color: Theme.darkGray,
        lineHeight: 24,
        letterSpacing: 0.2
    },
    input: {
        fontSize: 16,
        color: Theme.black,
        lineHeight: 24,
        letterSpacing: 0.2
    }
});
