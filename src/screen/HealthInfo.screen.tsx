import React from 'react';
import {
    StyleSheet,
    SafeAreaView,
    ScrollView,
    Text,
    View
} from 'react-native';
import { Theme, ThemeStyles } from '../themes/default';
import ListItemInput from '../components/ListItemInput';
import CardItemButton from '../components/CardItemButton';
// Screen Styles

export default function HealthInfo({ navigation }: any) {
    const mockData = {
        common: [
            {
                label: "Pojišťovňa",
                value: "Dovera"
            },
            {
                label: "Priezvisko za slobodna",
                value: "Nováková"
            },
            {
                label: "Bydlisko",
                value: "Štefánikova 9, Trnava, Slovensko"
            },
            {
                label: "Zamestnanie",
                value: "Účtovníčka"
            },
            {
                label: "Rodné číslo matky",
                value: "123456/1234"
            },
            {
                label: "Gynekológ",
                value: "MUDr. Patrik Ondrejech"
            },
        ],
        previousGravidity: [
            {
                label: "Rok",
                value: "2015"
            },
            {
                label: "Pohlavie",
                value: "Dievča"
            },
            {
                label: "Hmotnosť / dĺžka dieťaťa",
                value: "3,9 kg / 45 cm"
            },
            {
                label: "Komplikácie gravidity",
                value: "Žiadne"
            },
            {
                label: "Komplikácie pôrodu",
                value: "Placenta previa"
            },
        ],
        medicalRecords: [
            {
                label: "Potraty",
            },
            {
                label: "Rodinná anamnéza",
            },
            {
                label: "Osobná anamnéza",
            },
            {
                label: "Alergie",
            },
            {
                label: "Detské ochorenia",
            },
            {
                label: "Poisťovňa",
            }
        ],
        pregnancy: [
            {
                label: "Posledná menštruácia",
                value: "16/05/2019"
            },
            {
                label: "Termín pôrodu",
                value: "19/12/2019"
            },
            {
                label: "Nástup na materskú dov.",
                value: "10/11/2019"
            },
            {
                label: "Výška",
                value: "170 cm"
            },
            {
                label: "Hmotnosť",
                value: "64 kg"
            },
        ]
    }


    return (
        <SafeAreaView style={ThemeStyles.safeAreaContainer}>
            <ScrollView style={[ThemeStyles.scrollContainer, styles.container]}>
                <Text style={styles.listHeader}>Všeobecné</Text>
                <View style={[ThemeStyles.cardContainer, styles.cardContainer]}>
                    {mockData.common.map((item) => (
                        <ListItemInput key={item.value} label={item.label} value={item.value} />
                    )
                    )}
                </View>
                <Text style={styles.listHeader}>Predcházajůce gravidity</Text>
                <View style={[ThemeStyles.cardContainer, styles.cardContainer]}>
                    {mockData.previousGravidity.map((item) => (
                        <ListItemInput key={item.value} label={item.label} value={item.value} />
                    ))}
                </View>
                <Text style={styles.listHeader}>Lekárske záznamy</Text>
                <View style={[ThemeStyles.cardContainer, styles.cardContainer]}>
                    {mockData.medicalRecords.map((item) => (
                        <CardItemButton key={item.label} label={item.label} />
                    ))}
                </View>
                <Text style={styles.listHeader}>Tehotenstvo</Text>
                <View style={[ThemeStyles.cardContainer, styles.cardContainer]}>
                    {mockData.pregnancy.map((item) => (
                        <ListItemInput key={item.value} label={item.label} value={item.value} />
                    ))}
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 16
    },
    cardContainer: {
        paddingVertical: 0
    },
    listHeader: {
        fontSize: 12,
        fontWeight: "500",
        lineHeight: 18,
        letterSpacing: 0.1,
        marginTop: 30,
        marginBottom: 10,
        color: Theme.darkGray
    },
    card: {
        borderRadius: 6,
        borderWidth: 0
    }
});