import React from 'react';
import { StyleSheet, TouchableOpacity, Text, Image, View } from 'react-native';
import { Theme } from '../themes/default';

export default function MainButton(props: any) {
    const { label, style, image, textColor, bgColor, onPress, disabled } = props;

    return (
        <TouchableOpacity
            activeOpacity={0.7}
            onPress={onPress}
            style={[styles.button, style, bgColor && { backgroundColor: bgColor }, disabled && { backgroundColor: Theme.gray }]}
            disabled={disabled} >
            {image && (
                <View style={[styles.imageContainer]}>
                    <Image source={image} resizeMode='contain' style={styles.buttonImage} />
                </View>
            )}
            <View style={[styles.textContainer,]}>
                <Text style={[styles.buttonLabel, textColor && { color: textColor }]}>{label}</Text>
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    button: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "flex-start",
        height: 56,
        backgroundColor: Theme.pink,
        borderRadius: 6,
        marginHorizontal: 0,
        paddingHorizontal: 16
    },
    imageContainer: {
        flexDirection: "column",
        alignItems: "center",
        marginRight: 16
    },
    textContainer: {
        flex: 1,
        flexDirection: "column",
        alignItems: "center"
    },
    buttonImage: {
        width: 25,
        height: 25,
        alignSelf: 'flex-start'
    },
    buttonLabel: {
        fontSize: 16,
        lineHeight: 24,
        letterSpacing: 0.1,
        fontWeight: "600",
        color: Theme.white,
    }
});