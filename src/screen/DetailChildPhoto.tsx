// @ts-ignore
import React, { Component, useState } from 'react';
import { Image, ScrollView, Text, TouchableOpacity, View } from 'react-native';

import { Theme, ThemeStyles } from "../themes/default";

interface DetailPhotoProps {
    route: any,
    navigation: any,
}



export default class DetailChildPhoto extends Component<DetailPhotoProps> {


    componentDidMount(): void {

    }

    constructor(props: any) {
        super(props);
    }

    render() {
        return (
            <View style={[ThemeStyles.applicationBackground, ThemeStyles.container]}>
                <Image source={this.props.route.params.image} style={{
                    flex: 1,
                    flexDirection: 'column',
                    width: '100%',
                    alignItems: 'flex-start'
                }} />
            </View>
        );
    }
}
