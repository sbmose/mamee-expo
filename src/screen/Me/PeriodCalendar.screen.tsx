import React, { useState } from 'react';
import moment from "moment";
import {
    StyleSheet,
    SafeAreaView,
    View,
    Text
} from 'react-native';
import { Theme, ThemeStyles } from '../../themes/default';
import CalendarPicker from 'react-native-calendar-picker';
import TransparentButton from '../../components/TransparentButton';
import CardEvent from '../../components/CardEvent';

export default function PeriodCalendarScreen({ navigation }: any) {
    const MONTHS: Array<string> = ['Január', 'Február', 'Marec', 'Apríl', 'Máj', 'Jún', 'Júl', 'August', 'September', 'Október', 'November', 'December'];
    const [selectedMonth, setSelectedMonth]: string = useState(MONTHS[Number(moment().month())]);
    const [calendarVisible, setCalendarVisible] = useState(true);

    const handleSelectDate = (date: any) => {
        console.log("onDateChange", date);
    }

    const handleChangeMonth = (month: any) => {
        const monthName: string = MONTHS[Number(moment(month).month())]
        setSelectedMonth(monthName);
    }

    return (
        <SafeAreaView style={ThemeStyles.safeAreaContainer}>
            <View style={styles.container}>
                <View style={styles.headerContainer}>
                    <Text style={ThemeStyles.mediumHeader}>{calendarVisible ? selectedMonth : "Cyklus"}</Text>
                    <TransparentButton
                        label={calendarVisible ? "Zobraziť cyklus" : "Zobraziť kalendár"}
                        onPress={() => setCalendarVisible(!calendarVisible)} />
                </View>
                {calendarVisible && (
                    <View style={[ThemeStyles.cardContainer, { marginBottom: 24 }]}>
                        <CalendarPicker
                            onDateChange={handleSelectDate}
                            onMonthChange={handleChangeMonth}
                            selectedDayColor={Theme.pink}
                            selectedDayTextColor={Theme.white}
                            startFromMonday={true}
                            weekdays={['N', 'P', 'U', 'S', 'Š', 'P', 'S']}
                            months={MONTHS}
                            previousTitle="Predchádzajúce"
                            previousTitleStyle={{ marginLeft: 16 }}
                            nextTitleStyle={{ marginRight: 16 }}
                            nextTitle="Ďalšie"
                        />
                    </View>
                )}
                {calendarVisible && <Text style={ThemeStyles.mediumHeader}>{"Cyklus"}</Text>}
                <CardEvent
                    header="Menštruácia"
                    text="15.-19. októbra"
                    color="red" />
                <CardEvent
                    header="Ovulácia"
                    text="25.-28. októbra"
                    color="green" />
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
        justifyContent: "flex-start"
    },
    headerContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignContent: "center",

    }
});
