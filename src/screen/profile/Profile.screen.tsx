import React from 'react';
import {
    StyleSheet,
    View,
    SafeAreaView,
    ScrollView,
    Text
} from 'react-native';
import { Container } from "native-base";
import { ThemeStyles } from '../../themes/default';
// Screen Styles

export default function ProfileScreen({ navigation }: any) {

    return (
        <SafeAreaView style={ThemeStyles.safeAreaContainer}>
            <ScrollView style={ThemeStyles.scrollContainer}>
                <Container style={ThemeStyles.innerContainer}>
                    <View style={styles.headerContainer}>
                        <Text>Test profil</Text>
                    </View>
                </Container>
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    headerContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});