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

export default function EventsCalendarScreen({ navigation }: any) {
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
                    <Text style={ThemeStyles.mediumHeader}>{calendarVisible ? selectedMonth : "Udalosti"}</Text>
                    <TransparentButton
                        label={calendarVisible ? "Zobraziť zoznam" : "Zobraziť kalendár"}
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
                {calendarVisible && <Text style={ThemeStyles.mediumHeader}>{"Udalosti"}</Text>}
                <CardEvent
                    header="Poradňa"
                    text="Dnes, 16:00"
                    color="green" />
                <CardEvent
                    header="Obhliadka pôrodnice"
                    text="28. októbra, 17:00"
                    color="red" />
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
