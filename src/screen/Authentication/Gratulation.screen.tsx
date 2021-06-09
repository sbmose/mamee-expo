import React from 'react';
import {
    StyleSheet,
    SafeAreaView,
    View
} from 'react-native';
import { ThemeStyles } from '../../themes/default';
import MainButton from '../../components/MainButton';
import CardItemText from '../../components/CardItemText';
import CardExpand from "../../components/CardExpand";
import { useDispatch } from 'react-redux';
import { finishRegistration } from '../../store/actions/ProfileActions';

export default function GratulationScreen({ navigation }: any) {
    const dispatch = useDispatch();

    return (
        <SafeAreaView style={ThemeStyles.safeAreaContainer}>
            <View style={styles.container}>
                <CardItemText
                    image={require('../../../assets/info.png')}
                    header="Gratulujeme!"
                    text={"Úspešne si zvládla registráciu a môžeš začať s jej používaním.\n\nSi už zvedavá?"} />
                <MainButton
                    label="Poďme na to!"
                    onPress={() => dispatch(finishRegistration())} />
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
