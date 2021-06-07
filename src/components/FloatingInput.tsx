import React, { useState } from 'react';
import { Text, TouchableOpacity, View, StyleSheet } from 'react-native';
import { FloatingLabelInput } from 'react-native-floating-label-input';
import { Theme } from '../themes/default';

export default function FloatingInput(props: any) {
    const { label, isPassword, bgColor, style, onChangeText, value, error, errorText } = props;
    const [showPass, setShowPass] = useState(false);
    const [isFocused, setFocused] = useState(false);

    const togglePassword = (evt: any) => {
        console.log("pass", evt);
        evt.preventDefault();
        setShowPass(!showPass);
    }

    return (
        <View style={[styles.container, style]}>
            <FloatingLabelInput
                label={label}
                isPassword={isPassword}
                togglePassword={showPass}
                staticLabel={false}
                value={value}
                isFocused={isFocused}
                onChangeText={(value: string) => onChangeText(value)}
                onFocus={() => setFocused(!isFocused)}
                onBlur={() => setFocused(!isFocused)}
                customShowPasswordComponent={<TouchableOpacity onPress={(e) => togglePassword(e)}><Text>Ukázať</Text></TouchableOpacity>}
                customHidePasswordComponent={<TouchableOpacity onPress={(e) => togglePassword(e)}><Text>Skryť</Text></TouchableOpacity>}
                containerStyles={{
                    borderWidth: 1,
                    backgroundColor: bgColor || Theme.appBg,
                    borderColor: isFocused ? Theme.pink : Theme.gray,
                    borderRadius: 6,
                    paddingHorizontal: 16,
                    paddingVertical: 16
                }}
                inputStyles={{
                    color: Theme.black,
                    fontSize: 14,
                    letterSpacing: 0.2,
                    fontWeight: "500"
                }}
                labelStyles={{
                    backgroundColor: bgColor || Theme.appBg,
                    paddingHorizontal: 8
                }}
                customLabelStyles={{
                    leftFocused: 4,
                    topFocused: -25,
                    fontSizeBlurred: 14,
                    fontSizeFocused: 12,
                    colorBlurred: Theme.gray,
                    colorFocused: isFocused ? Theme.pink : Theme.gray,
                }}
                {...props}
            />
            {error && <Text style={styles.errorMessage}>{errorText}</Text>}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        height: 60
    },
    errorMessage: {
        alignSelf: "flex-end",
        bottom: 10,
        right: 16,
        fontSize: 12,
        paddingHorizontal: 8,
        color: "red",
        backgroundColor: Theme.appBg
    }
});