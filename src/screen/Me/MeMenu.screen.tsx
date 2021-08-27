// @ts-ignore
import React from 'react';
import { ScrollView, View } from 'react-native';
import { ThemeStyles } from "../../themes/default";
import MenuButton from "../../components/MenuButton";
import { MeStackConfig } from '../../navigation/Navigation.config';


export default function MeMenuScreen({ navigation }: any) {

    return (
        <View style={ThemeStyles.applicationBackground}>
            <ScrollView style={[ThemeStyles.container,]}>
                <View style={{
                    paddingBottom: 100, flex: 1,
                    flexDirection: 'row',
                    flexWrap: 'wrap',
                    alignItems: 'flex-start'
                }}>
                    {Object.entries(MeStackConfig).map(([key, screen]: any) => {
                        if (screen.menu) {
                            console.log("Menu", key, screen);
                            return (
                                <MenuButton
                                    key={screen.name}
                                    icon={screen.icon}
                                    label={screen.title}
                                    style={{}}
                                    onPress={() => { navigation.navigate(screen.name) }} />
                            )
                        }
                    })}
                </View>
            </ScrollView>
        </View>
    );
}
