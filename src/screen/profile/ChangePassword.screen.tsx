import React from 'react';
import {
    StyleSheet,
    View,
    SafeAreaView,
    ScrollView,
    Text
} from 'react-native';
import {

} from "native-base";
import { Theme, ThemeStyles } from '../../themes/default';
import SvgIcon from '../../components/SvgIcons';
import { Container, Header, Content, Form, Item, Input, Label } from 'native-base';
import MainButton from '../../components/MainButton';

export default function ChangePassword({ navigation }: any) {

    return (
        <SafeAreaView style={ThemeStyles.safeAreaContainer}>
            <ScrollView style={[ThemeStyles.scrollContainer, styles.container]}>
                <View style={styles.imageContainer}>
                    <SvgIcon iconName="change_password_image" width={175} height={168} />
                </View>
                <Text style={styles.header}>Zmena hesla</Text>
                <Form style={styles.form}>
                    <Item style={styles.inputContainer}>
                        <Input style={styles.inputText} placeholder="Staré heslo" />
                    </Item>
                    <Item style={styles.inputContainer}>
                        <Input style={styles.inputText} placeholder="Nové heslo" />
                    </Item>
                    <Item style={styles.inputContainer}>
                        <Input style={styles.inputText} placeholder="Zopakovať nové heslo" />
                    </Item>
                </Form>
                <MainButton
                    label="Zmeniť heslo"
                    style={styles.infoBtnStyle} />
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 0
    },
    imageContainer: {
        width: "100%",
        marginBottom: 20,
        flexDirection: "row",
        justifyContent: "center"
    },
    header: {
        fontSize: 32,
        fontWeight: "600",
        letterSpacing: 0.5,
        lineHeight: 42,
        color: Theme.black,
        marginBottom: 30,
        marginLeft: 16
    },
    form: {
        padding: 0
    },
    inputContainer: {
        borderTopWidth: 1,
        borderLeftWidth: 1,
        borderRightWidth: 1,
        borderRadius: 6,
        borderColor: Theme.darkGray,
        paddingHorizontal: 20,
        paddingVertical: 4,
        marginBottom: 16,
        marginRight: 16
    },
    inputText: {
        color: Theme.lightGrey,
        fontSize: 14,
        lineHeight: 20,
        letterSpacing: 0.2,
        margin: 0

    }
});