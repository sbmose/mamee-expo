
import React from 'react';
import { StyleSheet } from 'react-native';
import { CardItem, Text, Left, Body, Button } from 'native-base';
import { Theme } from '../themes/default';
import { HEALTH_INFO_DETAIL_SCREEN } from '../navigation/ScreenNames';
import { useNavigation } from '@react-navigation/native';


export default function CardItemButton({ label }: any) {
    const navigation = useNavigation()

    return (
        <CardItem style={styles.container}>
            <Left>
                <Text style={styles.label}>{label}</Text>
            </Left>
            <Body>
                <Button style={styles.detailButton} transparent
                    onPress={() => navigation.navigate(HEALTH_INFO_DETAIL_SCREEN, { label: label, data: null })}>
                    <Text style={styles.buttonText}>Detail</Text>
                </Button>
            </Body>
        </CardItem>
    );
}

const styles = StyleSheet.create({
    container: {
        borderBottomWidth: 0,
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
    detailButton: {
        alignSelf: "center",
    },
    buttonText: {
        fontSize: 16,
        fontWeight: "400",
        lineHeight: 24,
        letterSpacing: 0.2,
        color: Theme.pink
    }
});
