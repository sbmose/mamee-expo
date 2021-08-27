import React from 'react';
import { SafeAreaView, View, StyleSheet } from 'react-native';
import { ThemeStyles } from "../../themes/default";
import CardItemText from '../../components/CardItemText';
import { MeStackConfig } from '../../navigation/Navigation.config';
import { useDispatch } from 'react-redux';
import { SET_BAG_LIST_TABS_PARAMS } from '../../store/actions/actionTypes';

export default function BagScreen({ navigation }: any) {
    const dispatch = useDispatch();

    return (
        <SafeAreaView style={ThemeStyles.safeAreaContainer}>
            <View style={styles.container}>
                <CardItemText
                    iconName="me"
                    header="Pre matku"
                    onPress={async () => {
                        await dispatch({
                            type: SET_BAG_LIST_TABS_PARAMS,
                            payload: {
                                tabOneTitle: "Na príjem",
                                tabTwoTitle: "Po pôrode"
                            }
                        });
                        navigation.navigate(MeStackConfig.BAG_DETAIL_LIST_SCREEN.name, { title: "Pre dieťa" });
                    }} />
                <CardItemText
                    iconName="child"
                    header="Pre dieťa"
                    onPress={async () => {
                        await dispatch({
                            type: SET_BAG_LIST_TABS_PARAMS,
                            payload: {
                                tabOneTitle: "Po pôrode",
                                tabTwoTitle: "Odchod domov"
                            }
                        });
                        navigation.navigate(MeStackConfig.BAG_DETAIL_LIST_SCREEN.name, { title: "Pre dieťa" })
                    }} />
                <CardItemText
                    iconName="partner"
                    header="Pre partnera"
                    onPress={async () => {
                        await dispatch({
                            type: SET_BAG_LIST_TABS_PARAMS,
                            payload: {
                                tabOneTitle: "Na príjem",
                                tabTwoTitle: "Odchod domov"
                            }
                        });
                        navigation.navigate(MeStackConfig.BAG_DETAIL_LIST_SCREEN.name, { title: "Pre partnera" })
                    }} />
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
})