import React, { useState } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { FloatingLabelInput } from 'react-native-floating-label-input';
import { Theme } from '../themes/default';

export default function FloatingInput(props: any) {
    const { label, isPassword, bgColor, style } = props;
    const [typing, setTyping] = useState("");
    const [showPass, setShowPass] = useState(false);
    const [isFocused, setFocused] = useState(false);

    const togglePassword = (evt: any) => {
        console.log("pass", evt);
        evt.preventDefault();
        setShowPass(!showPass);
    }

    return (
        <View style={style}>
            <FloatingLabelInput
                label={label}
                isPassword={isPassword}
                togglePassword={showPass}
                staticLabel={false}
                value={typing}
                isFocused={isFocused}
                onChangeText={(value: string) => setTyping(value)}
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
        </View>
    );
}