import React from 'react';
import {
    StyleSheet,
    SafeAreaView,
    View
} from 'react-native';
import { ThemeStyles } from '../../themes/default';
import CardItemText from '../../components/CardItemText';

export default function EnableBiometricScreen({ navigation }: any) {

    return (
        <SafeAreaView style={ThemeStyles.safeAreaContainer}>
            <View style={styles.container}>
                <CardItemText
                    image={require('../../../assets/info.png')}
                    header="Prosím, povoľ využívanie biometrickej funkcionality" />
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: "100%",
        padding: 16,
        flexDirection: "column",
        justifyContent: "center",
    }
});
