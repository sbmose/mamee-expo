// @ts-ignore
import React, {Component, createRef} from 'react';
import {AsyncStorage, Image, ScrollView, Text, TextInput, TouchableOpacity, View} from 'react-native';
import {Theme, ThemeStyles} from "../../themes/default";
import styles from "../../styles/authForm";
import {FloatingLabelInput} from 'react-native-floating-label-input';


interface LoginState {
    email: string;
    password: string;
    errorLogin: boolean;
    continue: boolean;
}

export default class Login extends Component<{ navigation: any, onLogin: any }, LoginState> {


    constructor(props: any) {
        super(props);
        this.state = {
            email: "",
            password: "",
            errorLogin: false,
            continue: false
        };
        this._retrieveData = this._retrieveData.bind(this);
        this._storeData = this._storeData.bind(this);

        this._retrieveData();
    }

    _storeData = async () => {
        try {
            await AsyncStorage.setItem(
                '@App:email', this.state.email.trim()
            );
            await AsyncStorage.setItem(
                '@App:password', this.state.password
            );
        } catch (error) {
            // Error saving data
        }
    };


    _retrieveData = async () => {
        try {
            const email = await AsyncStorage.getItem('@App:email');
            const password = await AsyncStorage.getItem('@App:password');
            if (email !== null && password !== null) {
                this.setState({email: email, password: password});
            }
        } catch (error) {
            // Error retrieving data
        }
    };

    async login() {
        let succesfulLogin = true;
        if (succesfulLogin) {
            await this._storeData();
        }

        this.setState(() => ({errorLogin: !succesfulLogin, email: "", password: ""}));
        this.props.onLogin(succesfulLogin);
    }

    async register() {
    }

    async loginFacebook() {
    }

    async loginGoogle() {
    }


    render() {
        return !this.state.continue ? (
            <View style={[ThemeStyles.applicationBackground, styles.container]}>
                <ScrollView>
                    <View style={styles.insideScrollview}>
                        <Image source={require('../../../assets/icon.png')} style={{width: 200, height: 200}}/>
                        <View style={{justifyContent: "flex-start", width: '100%'}}>
                            <Text style={styles.title}>Prihlásiť</Text>
                        </View>
                        <TextInput
                            style={[styles.field, styles.input]}
                            placeholder="Email"
                            placeholderTextColor="#666666"
                            value={this.state.email}
                            onChangeText={text => this.setState({email: text})}/>
                        <TextInput
                            secureTextEntry
                            style={[styles.field, styles.input]}
                            placeholder="Password"
                            placeholderTextColor="#666666"
                            value={this.state.password}
                            onChangeText={text => this.setState({password: text})}/>
                        <TouchableOpacity style={[styles.field, styles.btn, ThemeStyles.ptb1]}
                                          onPress={() => {
                                              this.setState({continue: true})
                                          }}>
                            <Text style={styles.btnText}>Pokračovať</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={[styles.field, styles.btnGoog, ThemeStyles.ptb1]}
                                          onPress={() => this.register()}>
                            <Text style={styles.btnTextBlack}>Nemám účet</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={[styles.field, styles.btnGoog, ThemeStyles.ptb1]}
                                          onPress={() => this.loginGoogle()}>
                            <Text style={styles.btnTextBlack}>Prihlásiť sa cez Google účet</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={[styles.field, styles.btnFb, ThemeStyles.ptb1]}
                                          onPress={() => this.loginFacebook()}>
                            <Text style={styles.btnText}>Prihlási sa cez Facebook</Text>
                        </TouchableOpacity>
                    </View>
                </ScrollView>
            </View>
        ) : (<View style={[ThemeStyles.applicationBackground, styles.container]}>
                <ScrollView>
                    <View style={styles.insideScrollview}>
                        <View                             style={[{
                            width: '100%',
                            marginBottom: 5,
                            marginTop: 5
                        }]}>
                        <FloatingLabelInput
                            style={[{marginBottom: 15,
                                marginTop: 15}]}
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
                        <View                             style={[{
                            width: '100%',
                            marginBottom: 5,
                            marginTop: 5
                        }]}>
                        <FloatingLabelInput

                            label="Heslo"
                            value={this.state.password}
                            staticLabel
                            isPassword={true}
                            hintTextColor={Theme.pink}
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
                        <TouchableOpacity style={[styles.field, styles.btn, ThemeStyles.ptb1]}
                                          onPress={() => this.login()}>
                            <Text style={styles.btnText}>Login</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={[styles.field, styles.btnGoog, ThemeStyles.ptb1]}
                                          onPress={() => this.register()}>
                            <Text style={styles.btnTextBlack}>Nemám účet</Text>
                        </TouchableOpacity>
                    </View>
                </ScrollView>
            </View>
        );

    }
}

