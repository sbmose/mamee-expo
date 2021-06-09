import React, { useState } from 'react';
import {
    StyleSheet,
    SafeAreaView,
    Text,
    View
} from 'react-native';
import { ThemeStyles } from '../../themes/default';
import ProgressBar from '../../components/ProgressBar';
import CardOption from '../../components/CardOption';
import { useDispatch } from 'react-redux';
import { updateBio } from '../../store/actions/ProfileActions';
import { AuthStackConfig } from '../../navigation/Navigation.config';

export default function PickConditionScreen({ navigation }: any) {
    const dispatch = useDispatch();
    const [condition, setCondition]: any = useState(undefined);

    const handlePickCondition = async (conditionType: any) => {
        setCondition(conditionType);
        let success: any = await dispatch(updateBio({ condition: conditionType }));
        if (success) {
            conditionType === "pregnant" ?
                navigation.navigate(AuthStackConfig.LAST_PERIOD_SCREEN.name)
                :
                navigation.navigate(AuthStackConfig.ADD_CHILD.name)

        }
    }

    return (
        <SafeAreaView style={ThemeStyles.safeAreaContainer}>
            <View style={styles.container}>
                <View style={styles.innerContent}>
                    <Text style={[ThemeStyles.bigHeader, { textAlign: "center" }]}>Si...</Text>
                    <CardOption
                        label="Tehotná"
                        iconName="pregnant"
                        onPress={() => handlePickCondition("pregnant")}
                        checked={condition === "pregnant"} />
                    <CardOption
                        label="Matka"
                        iconName="dummy"
                        onPress={() => handlePickCondition("mother")}
                        checked={condition === "mother"} />
                    <CardOption
                        label="Tehotná matka"
                        iconName="pregnant"
                        onPress={() => handlePickCondition("pregnant_mother")}
                        checked={condition === "pregnant_mother"} />
                </View>
                <ProgressBar style={{ bottom: 0 }} progress={50} />
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: "100%",
        padding: 16,
        paddingBottom: 0,
        flexDirection: "column",
        justifyContent: "flex-end"
    },
    innerContent: {
        flex: 1,
        flexDirection: "column",
        justifyContent: "center"
    }

});
