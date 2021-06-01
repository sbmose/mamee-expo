// @ts-ignore
import React, { Component, useState } from 'react';
import { Image, ScrollView, Text, TouchableOpacity, View } from 'react-native';

import { Theme, ThemeStyles } from "../themes/default";
import GoBack from "../components/GoBack";

interface PhotosState {
    photos: any[]
}


function Images(props: any) {
    return (
        <View style={{
            flex: 1,
            flexDirection: 'column',
            width: '100%',
            alignItems: 'flex-start'
        }}>
            <Text style={{ fontSize: 18, color: Theme.darkGray, fontWeight: 'bold' }}>{props.date}</Text>
            <View style={{
                flex: 1,
                flexDirection: 'row',
                flexWrap: 'wrap',
                alignItems: 'flex-start'
            }}>
                {props.images.map((image: any) => {
                    return (<TouchableOpacity onPress={() => props.navigation.navigate('DetailPhoto', { title: props.date, image: image })} style={[{
                        flexDirection: 'row',
                        borderRadius: 10,
                        margin: '2%',
                        width: '46%',
                        aspectRatio: 1,
                    }]}><Image style={[{
                        flexDirection: 'row',
                        borderRadius: 10,
                        width: '100%',
                        aspectRatio: 1,
                        backgroundColor: Theme.white,

                    }]} source={image} /></TouchableOpacity>);
                })}
                {props.first ? <TouchableOpacity style={[ThemeStyles.imageDashboard, {
                    alignItems: 'center',
                    justifyContent: 'center'
                }, {
                    backgroundColor: Theme.white,
                    flexDirection: 'column',
                    borderRadius: 10,
                    margin: '2%',
                    padding: 15,
                    width: '46%',
                    aspectRatio: 1,
                    flex: 1
                }]}>
                    <Image source={require('../../assets/addphoto.png')} />
                    <Text style={{ color: Theme.gray, fontSize: 16, marginTop: 10 }}>Pridať fotku</Text>
                </TouchableOpacity> : null}
            </View>
        </View>
    );
}

export default class Photos extends Component<{ navigation: any }, PhotosState> {


    componentDidMount(): void {

    }

    constructor(props: any) {
        super(props);
        this.state = {
            photos: [
                {
                    date: 'Október 2019',
                    images: [require('../../assets/fotodash.png')],
                    first: true
                },
                {
                    date: 'September 2019',
                    images: [require('../../assets/fotodash.png'), require('../../assets/fotodash.png'), require('../../assets/fotodash.png'), require('../../assets/fotodash.png')],
                    first: false
                }
            ],
        };
    }

    render() {
        return (
            <View style={[ThemeStyles.applicationBackground, ThemeStyles.container]}>
                <ScrollView>
                    <View style={{
                        flex: 1,
                        flexDirection: 'column',
                        width: '100%',
                        alignItems: 'flex-start'
                    }}>
                        {this.state.photos.map((record: any) => {
                            return (<Images {...{ ...record, navigation: this.props.navigation }} />);
                        })}
                    </View>
                </ScrollView>
            </View>
        );
    }
}
