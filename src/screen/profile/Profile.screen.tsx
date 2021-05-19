import React from 'react';
import {
    StyleSheet,
    View,
    SafeAreaView,
    ScrollView,
    Text
} from 'react-native';
import {
    Container,
    Thumbnail,
    Button
} from "native-base";
import { Theme, ThemeStyles } from '../../themes/default';
// Screen Styles

export default function ProfileScreen({ navigation }: any) {

    return (
        <SafeAreaView style={ThemeStyles.safeAreaContainer}>
            <ScrollView style={ThemeStyles.scrollContainer}>
                <Container style={ThemeStyles.innerContainer}>
                    <View style={styles.headerContainer}>
                        <Thumbnail style={styles.thumbnail} source={require('../../../assets/profil.png')} />
                        <Text style={styles.profileName}>Janka</Text>
                        <Text style={styles.profileInfo}>Tehotná, 3. trimester</Text>
                        <Text style={styles.profileEmailandPass}>janka.novakove@email.com</Text>
                        <Text style={styles.profileEmailandPass}>***********</Text>
                        <Button style={styles.changePassBtn} transparent>
                            <Text style={styles.changePassBtnText}>Zmeniť heslo</Text>
                        </Button>
                    </View>
                    <View style={styles.settingsContainer}>
                        <Text style={styles.listHeader}>Tehotenstvo</Text>
                    </View>
                </Container>
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    headerContainer: {
        alignItems: 'center',
        justifyContent: 'flex-start'
    },
    settingsContainer: {

    },
    thumbnail: {
        width: 150,
        height: 150,
        borderRadius: 150,
        borderWidth: 2,
        borderColor: "#ffffff",
        marginVertical: 10,
    },
    profileName: {
        fontSize: 32,
        fontWeight: '600',
        letterSpacing: 0.5,
        lineHeight: 42,
        color: Theme.black
    },
    profileInfo: {
        fontSize: 12,
        fontWeight: "500",
        letterSpacing: 0.2,
        lineHeight: 18,
        color: Theme.darkGray,
        marginBottom: 30
    },
    profileEmailandPass: {
        fontSize: 16,
        fontWeight: "400",
        letterSpacing: 0.2,
        lineHeight: 24,
        color: Theme.black,
        marginVertical: 5
    },
    changePassBtn: {
        alignSelf: "center",
    },
    changePassBtnText: {
        fontSize: 12,
        fontWeight: "500",
        color: Theme.pink
    },
    listHeader: {
        fontSize: 18,
        fontWeight: "600",
        lineHeight: 28,
        letterSpacing: 0.1
    }
});