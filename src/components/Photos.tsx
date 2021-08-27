import React, { Component } from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { Theme, ThemeStyles } from "../themes/default";
import { DashboardStackConfig } from "../navigation/Navigation.config";

export default class Photos extends Component<{ navigation: any, photos: any[], style: any }> {



    componentDidMount(): void {

    }

    constructor(props: any) {
        super(props);
        this.go2Gallery = this.go2Gallery.bind(this);
    }

    go2Gallery() {
        this.props.navigation.navigate(DashboardStackConfig.GALLERY_SCREEN.name);
    }

    render() {
        return (
            <View style={[this.props.style, { marginTop: 20 }]}>
                <Text style={{ fontSize: 18, color: Theme.darkGray, fontWeight: 'bold' }}>Fotky</Text>
                <View style={{ flexDirection: 'row' }}>
                    {this.props.photos.map((source) => { return (<Image source={source} style={ThemeStyles.imageDashboard} />) })}
                    <TouchableOpacity onPress={this.go2Gallery} style={[ThemeStyles.imageDashboard, {
                        alignItems: 'center',
                        flex: 0.5,
                        justifyContent: 'center'
                    }]}>
                        <Image source={require('../../assets/addphoto.png')} />
                        <Text style={{ color: Theme.gray, fontSize: 16, marginTop: 10 }}>Pridať fotku</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}
