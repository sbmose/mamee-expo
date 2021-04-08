// @ts-ignore
import React, {Component} from 'react';
import {Image, TouchableOpacity} from 'react-native';
import {View, TextInput, Text, Modal,TouchableHighlight} from 'react-native';
import {ThemeStyles} from "../../themes/default";
import AuthService from "../../services/AuthService";
import styles from "../../styles/authForm";

interface LoginState {
    email:string,
    errorReset:boolean
}

export default class Login extends Component<{ navigation: any }, LoginState> {
    constructor(props) {
        super(props);
        this.state = {
            email:"",
            errorReset: false
        };
    }
    async reset(){
        let succesfulReset = await AuthService.getInstance().resetPassword(this.state.email);
        this.setState(()=>({errorReset:!succesfulReset,email:"",password:""}))
    }
    render() {
        return (
            <View style={[ThemeStyles.applicationBackground,styles.container]}>
                <TextInput  
                    style={[styles.field,styles.input]}
                    placeholder="Email" 
                    placeholderTextColor="#666666"
                    onChangeText={text => this.setState({email:text})}/>
                <TouchableOpacity style={[styles.field,styles.btn]} onPress={()=>this.reset()}>
                    <Text style={styles.btnText}>Obnovit heslo</Text>
                </TouchableOpacity>
                <Text style={styles.warningText}>{this.state.errorReset && "Heslo se nepodařilo obnovit"}</Text>
            </View>
        );
    }
}
