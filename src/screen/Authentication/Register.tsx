// @ts-ignore
import React, {Component, createRef} from 'react';
import {Image, ScrollView, StyleSheet, Text, TouchableOpacity, View} from 'react-native';

import {Theme, ThemeStyles} from "../../themes/default";

import styles from "../../styles/authForm";

import * as WebBrowser from 'expo-web-browser';
import {FloatingLabelInput} from "react-native-floating-label-input/index";
import {RadioButton} from "react-native-paper";

interface RegisterState {
    step: string | null;
    email: string;
    password: string;
    password2: string;
    agree: boolean;
    pin: string;
}

export default class Register extends Component<{ navigation: any }, RegisterState> {


    constructor(props: any) {
        super(props);
        this.registerGoogle = this.registerGoogle.bind(this);
        this.registerFacebook = this.registerFacebook.bind(this);
        this.handleConditions = this.handleConditions.bind(this);
        this.state = {
            step: null,
            email: '',
            password: '',
            password2: '',
            agree: false,
            pin: ''
        };
    }

    registerFacebook() {

    }

    registerGoogle() {

    }

    handleConditions() {
        this.props.navigation.navigate('Conditions')
    }

    _handlePressButtonAsync = async () => {
        let result = await WebBrowser.openBrowserAsync('');
    };

    render() {
        switch (this.state.step) {
            case 'step1':
                return (<View style={[ThemeStyles.applicationBackground, styles.container]}>
                    <View style={{
                        backgroundColor: Theme.white,
                        flexDirection: 'row',
                        borderRadius: 10,
                        marginTop: 10,
                        padding: 15
                    }}>
                        <Image source={require('../../../assets/info.png')}/>
                        <View style={{flexDirection: 'column', marginLeft: 10}}>
                            <Text style={{fontSize: 16, fontWeight: 'bold'}}>Nemáš sa čoho obávať</Text>
                            <Text style={{fontSize: 16, paddingRight: 30}}>
                                Toto je tvoj vlastný denník a do tvojho súkromia nikto neuvidí.

                                Vážime si ho.
                            </Text>
                        </View>
                    </View>
                    <TouchableOpacity style={[styles.field, styles.btn]}
                                      onPress={() => {
                                          this.setState({step: 'step2'})
                                      }}>
                        <Text style={styles.btnText}>Začať</Text>
                    </TouchableOpacity>
                </View>);
            case 'step2':
                return (<View
                    style={[ThemeStyles.applicationBackground, styles.container, {paddingLeft: 10, paddingRight: 10}]}>
                    <Text style={{fontSize: 24, fontWeight: 'bold'}}>Základné údaje</Text>
                    <View style={{marginTop: 15, width: '100%'}}>
                        <FloatingLabelInput
                            style={[{
                                marginBottom: 15,
                                marginTop: 15
                            }]}
                            label="E-mail"
                            value={this.state.email}
                            staticLabel
                            hintTextColor={'#aaa'}
                            hint="E-mail"
                            containerStyles={{
                                borderWidth: 1,
                                paddingHorizontal: 10,
                                backgroundColor: '#fff',
                                borderColor: Theme.pink,
                                borderRadius: 8,
                                height: 50,


                            }}
                            customLabelStyles={{
                                colorFocused: Theme.pink,
                                fontSizeFocused: 12,
                            }}
                            labelStyles={{
                                backgroundColor: '#fff',
                                paddingHorizontal: 5,
                            }}
                            inputStyles={{
                                color: Theme.black,
                                paddingHorizontal: 10,
                            }}
                            onChangeText={(value: any) => {
                                this.setState({email: value})
                            }}
                        />
                    </View>
                    <View style={{marginTop: 15, width: '100%'}}>
                        <FloatingLabelInput
                            style={[{
                                marginBottom: 15,
                                marginTop: 15
                            }]}
                            label="Heslo"
                            value={this.state.password}
                            staticLabel
                            hintTextColor={'#aaa'}
                            hint="Heslo"
                            containerStyles={{
                                borderWidth: 1,
                                paddingHorizontal: 10,
                                backgroundColor: '#fff',
                                borderColor: Theme.pink,
                                borderRadius: 8,
                                height: 50,


                            }}
                            customLabelStyles={{
                                colorFocused: Theme.pink,
                                fontSizeFocused: 12,
                            }}
                            labelStyles={{
                                backgroundColor: '#fff',
                                paddingHorizontal: 5,
                            }}
                            inputStyles={{
                                color: Theme.black,
                                paddingHorizontal: 10,
                            }}
                            onChangeText={(value: any) => {
                                this.setState({password: value})
                            }}
                        />
                    </View>
                    <View style={{marginTop: 15, width: '100%'}}>
                        <FloatingLabelInput
                            style={[{
                                marginBottom: 15,
                                marginTop: 15
                            }]}
                            label="Zopakuj heslo"
                            value={this.state.password2}
                            staticLabel
                            isPassword={true}
                            hintTextColor={'#aaa'}
                            hint="Zopakuj heslo"
                            containerStyles={{
                                borderWidth: 1,
                                paddingHorizontal: 10,
                                backgroundColor: '#fff',
                                borderColor: Theme.pink,
                                borderRadius: 8,
                                height: 50,


                            }}
                            customLabelStyles={{
                                colorFocused: Theme.pink,
                                fontSizeFocused: 12,
                            }}
                            labelStyles={{
                                backgroundColor: '#fff',
                                paddingHorizontal: 5,
                            }}
                            inputStyles={{
                                color: Theme.black,
                                paddingHorizontal: 10,
                            }}
                            onChangeText={(value: any) => {
                                this.setState({password2: value})
                            }}
                        />
                    </View>
                    <View style={localStyles.rbContainer}><RadioButton.Android
                        color={Theme.pink}
                        onPress={() => {
                            this.setState({
                                agree: !this.state.agree
                            });
                        }}
                        value={""}
                        uncheckedColor={Theme.pink}
                        style={{flex: 0.1, alignSelf: 'flex-start'}}
                        status={this.state.agree ? 'checked' : 'unchecked'}/><Text
                        style={[localStyles.rbContainerLabel, {flex: 0.9, top: -10}]}>Súhlasím s <TouchableOpacity
                        onPress={
                            this.handleConditions
                        }><Text
                        style={[localStyles.rbContainerLabel, {color: Theme.pink, top: 4}]}>podmienkami používania
                        aplikácie</Text></TouchableOpacity>
                    </Text>
                    </View>
                    <TouchableOpacity style={[styles.field, styles.btn]}
                                      onPress={() => {
                                          this.setState({step: 'step3'})
                                      }}>
                        <Text style={styles.btnText}>Pokračovať</Text>
                    </TouchableOpacity>
                </View>);
            case 'step3':
                return (<View style={[ThemeStyles.applicationBackground, styles.container,{padding: 10}]}>
                    <View style={{
                        backgroundColor: Theme.white,
                        flexDirection: 'row',
                        borderRadius: 10,
                        marginTop: 10,
                        padding: 15,
                        width:'100%',
                    }}>
                        <Image source={require('../../../assets/info.png')}/>
                        <View style={{flexGrow:1,flexDirection: 'column', marginLeft: 10}}>
                            {this.state.pin == '' || this.state.pin == '1234' ? (
                                <Text style={{fontSize: 12, fontWeight: 'bold'}}>Na e-mailovú
                                    adresu {this.state.email} sme ti poslali overovací kód.</Text>) : (
                                <Text style={{fontSize: 12, fontWeight: 'bold'}}>Ľutujeme, zadaný kód je <Text style={{
                                    fontSize: 12,
                                    fontWeight: 'bold',
                                    color: Theme.red
                                }}>nesprávny.</Text></Text>)}
                            <View style={{marginTop: 15}}>
                                <FloatingLabelInput
                                    style={[{
                                        marginBottom: 15,
                                        marginTop: 15
                                    }]}
                                    label="Zadaj kód"
                                    staticLabel
                                    value={this.state.pin}
                                    hintTextColor={'#aaa'}
                                    isPassword={true}
                                    hint="Zadaj kód"
                                    containerStyles={{
                                        borderWidth: 1,
                                        paddingHorizontal: 10,
                                        backgroundColor: '#fff',
                                        borderColor: Theme.pink,
                                        borderRadius: 8,
                                        height: 50,
                                    }}
                                    customLabelStyles={{
                                        colorFocused: Theme.pink,
                                        fontSizeFocused: 12,
                                    }}
                                    labelStyles={{
                                        backgroundColor: '#fff',
                                        paddingHorizontal: 5,
                                    }}
                                    inputStyles={{
                                        color: Theme.black,
                                        paddingHorizontal: 10,
                                    }}
                                    onChangeText={(value: any) => {
                                        this.setState({pin: value});
                                    }}
                                />
                            </View>
                            {this.state.pin == '' || this.state.pin == '1234' ? (null) : (
                                <TouchableOpacity style={[styles.field, styles.btn]}
                                                  onPress={() => {

                                                  }}>
                                    <Text style={styles.btnText}>Odoslať nový kód</Text>
                                </TouchableOpacity>)}
                        </View>
                    </View>
                </View>);
            default:
                return (<View style={[ThemeStyles.applicationBackground, styles.container]}>
                    <ScrollView>
                        <View style={styles.insideScrollview}>
                            <Text style={[ThemeStyles.headingName, ThemeStyles.mb20]}>Nemáš účet?
                                Registruj sa.</Text>
                            <Image source={require('../../../assets/register.png')}/>

                            <TouchableOpacity style={[styles.field, styles.btn]}
                                              onPress={() => {
                                                  this.setState({step: 'step1'})
                                              }}>
                                <Text style={styles.btnText}>Poďme na to</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={[styles.field, styles.btnGoog, ThemeStyles.ptb1]}
                                              onPress={() => this.registerGoogle()}>
                                <Image source={require('../../../assets/google.png')} resizeMode='contain'
                                       style={{flex: .4, top: 15, left: 10, alignSelf: 'flex-start'}}/>
                                <Text style={[styles.btnTextBlack, {top: -5, flex: 0.6}]}>Registrovať sa cez
                                    Google</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={[styles.field, styles.btnFb, ThemeStyles.ptb1]}
                                              onPress={() => this.registerFacebook()}>
                                <Image source={require('../../../assets/facebook.png')} resizeMode='contain'
                                       style={{flex: .4, top: 15, left: 10, alignSelf: 'flex-start'}}/>
                                <Text style={[styles.btnText, {top: -5, flex: 0.6}]}>Registrovať sa cez Facebook</Text>

                            </TouchableOpacity>
                        </View>
                    </ScrollView>
                </View>);
        }
    }
}


const localStyles = StyleSheet.create({
    radioButton: {},
    rbContainer: {
        flexDirection: "row",
        alignItems: 'center',
    },
    rbContainerLabel: {
        marginTop: 8
    },
    picker: {
        width: "85%",
        marginBottom: 10,
        marginTop: 10
    },
    pickerLabel: {
        marginBottom: 10,
        marginTop: 20
    },
    backToListIcon: {
        width: 28,
        height: 28,
        tintColor: '#38bdff'
    },
    backToListText: {
        fontSize: 18
    },
    backToListContainer: {
        flexDirection: "row",
        paddingBottom: 15
    }
});
