
import React from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { ListItem, Text, Left, Body, Right, Switch } from 'native-base';
import { Theme } from '../themes/default';
import SvgIcon from './SvgIcons';


export default function ListItemCheckBox(props: any) {
    const { label, iconName, noBorder } = props;

    return (
        <ListItem icon noBorder={noBorder} style={styles.container}>
            <Left style={{
                paddingHorizontal: 0,
                marginHorizontal: 0
            }}>
                <SvgIcon iconName={iconName} />
            </Left>
            <Body>
                <Text style={styles.label}>{label}</Text>
            </Body>
            <Right>
                <Switch value={false} />
            </Right>
        </ListItem>
    );
}

const styles = StyleSheet.create({
    container: {
        borderBottomWidth: 0,
        paddingHorizontal: 0,
        marginHorizontal: 0
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
    }
});
