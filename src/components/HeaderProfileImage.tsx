import React from 'react';
import {
    TouchableOpacity,
    StyleSheet,
    Image
} from 'react-native';

export function HeaderProfileImage({ photo }: any) {

    return (
        <TouchableOpacity
            style={styles.headerButton}>
            <Image
                style={styles.image}
                source={require("../../assets/profil.png")} />
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
    image: {
        alignSelf: 'flex-end',
        resizeMode: 'stretch',
        width: 32,
        height: 32
    }
})
