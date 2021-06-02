import React from 'react';
import {
    StyleSheet,
    View,
    SafeAreaView,
    ScrollView,
    Text
} from 'react-native';
import {
    Thumbnail,
    Button
} from "native-base";
import { Theme, ThemeStyles } from '../themes/default';
import MainButton from '../components/MainButton';
import ListItemCheckBox from '../components/ListItemCheckBox';
import { ListItemSeparator } from '../components/ListItemSeparator';
import ListItemText from '../components/ListItemText';
import ListItemSimple from '../components/ListItemSimple';
import { MeStackConfig } from '../navigation/Navigation.config';

export default function ProfileScreen({ navigation }: any) {

    return (
        <SafeAreaView style={ThemeStyles.safeAreaContainer}>
            <ScrollView style={ThemeStyles.scrollContainer}>
                <View style={styles.headerContainer}>
                    <Thumbnail style={styles.thumbnail} source={require('../../assets/profil.png')} />
                    <Text style={styles.profileName}>Janka</Text>
                    <Text style={styles.profileInfo}>Tehotná, 3. trimester</Text>
                    <Text style={styles.profileEmailandPass}>janka.novakove@email.com</Text>
                    <Text style={styles.profileEmailandPass}>***********</Text>
                    <Button style={styles.changePassBtn} transparent
                        onPress={() => navigation.navigate(MeStackConfig.CHANGE_PASSWORD_SCREEN.name)}>
                        <Text style={styles.changePassBtnText}>Zmeniť heslo</Text>
                    </Button>
                </View>
                <View style={styles.settingsContainer}>
                    <Text style={styles.listHeader}>Tehotenstvo</Text>
                    <MainButton
                        label={"Zdravotné informácie"}
                        style={styles.infoBtnStyle}
                        onPress={() => navigation.navigate(MeStackConfig.HEALTH_INFO_SCREEN.name)} />
                    <ListItemText
                        label="Pohlavie bábätka"
                        value="Dievča"
                        iconName="sex"
                        noBorder={true} />
                    <ListItemText
                        label="Termín porodu"
                        value="19/12/2019"
                        iconName="calendar"
                        noBorder={true} />
                    <ListItemCheckBox
                        label="Bábätko sa už narodilo"
                        iconName="baby"
                        noBorder={true} />

                    <ListItemCheckBox
                        label="Strata tehotenstva"
                        iconName="stratatehotenstva"
                        noBorder={true} />
                    <ListItemSeparator />
                    <Text style={styles.listHeader}>Nastavenia</Text>
                    <ListItemCheckBox
                        label="Notifikácie"
                        iconName="notifikacie"
                        noBorder={true} />
                    <ListItemCheckBox
                        label="Prihlásenie s Touch ID"
                        iconName="otlacok"
                        noBorder={true} />
                    {<ListItemSimple
                        label="Resetovať aplikáciu"
                        iconName="reset_app"
                        noBorder={true} />}
                    <ListItemSimple
                        label="Exportovať všetky dáta"
                        iconName="share"
                        noBorder={true} />
                    <ListItemSimple
                        label="Zdielať dáta"
                        iconName="share"
                        noBorder={true} />
                    <ListItemSeparator />
                    <Text style={styles.listHeader}>Účet</Text>
                    <ListItemText
                        label="Meno:"
                        value="Janka"
                        iconName="mother"
                        noBorder={true} />
                    <ListItemText
                        label="Priezvisko:"
                        value="Nováková"
                        iconName="mother"
                        noBorder={true} />
                    <ListItemText
                        label="E-mail:"
                        value="jana.novakova@email.com"
                        iconName="mother"
                        noBorder={true} />
                    <ListItemText
                        label="Dátum narodenia:"
                        value="27/02/1992"
                        iconName="calendar"
                        noBorder={true} />
                    <ListItemText
                        label="Lokácia:"
                        value="Bratislava, Slovensko"
                        iconName="mother"
                        noBorder={true} />
                </View>
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
        paddingHorizontal: 16,
        fontSize: 18,
        fontWeight: "600",
        lineHeight: 28,
        letterSpacing: 0.1,
        marginBottom: 16
    },
    infoBtnStyle: {
        marginBottom: 24,
        marginHorizontal: 16
    }
});