import React from 'react';
import {
    TouchableOpacity,
    StyleSheet
} from 'react-native';
import { Ionicons as Icon } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { Theme } from '../themes/default';

export function HeaderButton({ iconName, color, onPress }: any) {
    const navigation: any = useNavigation();

    function handlePress() {
        onPress ? onPress() : navigation.goBack();
    }


    return (
        <TouchableOpacity
            style={styles.headerButton}
            onPress={() => handlePress()}>
            <Icon
                size={28}
                name={iconName}
                color={color || Theme.pink}
            />
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    headerButton: {
        flex: 1,
        overflow: "hidden",
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: "center",
        alignContent: "center",
        paddingHorizontal: 20
    },
})
