// @ts-ignore
import React, {Component,createRef} from 'react';
import {TouchableOpacity} from 'react-native';
import {ScrollView,View, TextInput, Text} from 'react-native';
import {CheckBox} from 'react-native-elements';
import {ThemeStyles} from "../../themes/default";
import AuthService from "../../services/AuthService";
import styles from "../../styles/authForm";
import Notify from "../../utils/notify";
import * as WebBrowser from 'expo-web-browser';

interface RegisterState {
    firstName:string,
    lastName:string,
    email:string,
    telephone:string,
    password:string,
    passwordAgain:string,
    city:string,
    address1:string,
    address2:string,
    zip:string,
    state:string,
    newsletter:boolean,
    errorRegister:boolean
}

export default class Login extends Component<{ navigation: any, onLogin:any}, RegisterState> {

    private successMessage: React.RefObject<Notify>;
    private failedMessage: React.RefObject<Notify>;
    private passwordsDontMatch: React.RefObject<Notify>;

    constructor(props) {
        super(props);
        this.successMessage = createRef();
        this.failedMessage = createRef();
        this.passwordsDontMatch = createRef();
        this.state = {
            firstName:"",
            lastName:"",
            email:"",
            telephone:"",
            password:"",
            passwordAgain:"",
            city:"",
            address1:"",
            address2:"",
            zip:"",
            state:"",
            newsletter:false,
            errorRegister: false
        };
    }

    async register(){
        let {firstName, lastName, email, telephone, password, city, address1, address2, zip, state, newsletter,passwordAgain} = this.state;
        if(password != passwordAgain) {
            this.setState(()=>({errorRegister:true}));
            this.passwordsDontMatch.current.setState({visible: true});
            return;
        }
        let succesfulRegister = await AuthService.getInstance().register(firstName,lastName,email,telephone,password,city,address1,address2,zip,state,newsletter);
        if(succesfulRegister){
            this.props.onLogin(succesfulRegister);
            this.successMessage.current.setState({visible: true});
            this.setState(()=>({errorRegister:!succesfulRegister,firstName:"",lastName:"",email:"",telephone:"",password:"",passwordAgain:"",city:"",address1:"",address2:"",zip:"",state:"",newsletter:false}))
        }else{
            this.failedMessage.current.setState({visible: true});
        }
    }

    _handlePressButtonAsync = async () => {
        let result = await WebBrowser.openBrowserAsync('https://samples.imcobuy.com//customer/registration/');
    };

    render() {
        return (
            <View style={[ThemeStyles.applicationBackground,styles.container]}>
                <ScrollView>
                    <View style={styles.insideScrollview}>
                        <Text style={[ThemeStyles.headingName, ThemeStyles.mb20]}>Registration</Text>
                        <Text style={[ThemeStyles.text2]}>You can finish your registration on our pages by contact form.</Text>
                        <Text style={[ThemeStyles.text2,ThemeStyles.mb20]}>After registration your account has been activated manually.</Text>

                        <TouchableOpacity style={[styles.field,styles.btn]} onPress={()=>this._handlePressButtonAsync()}>
                            <Text style={styles.btnText}>Create account</Text>
                        </TouchableOpacity>
                        <Notify ref={this.successMessage} message={'Registration was successful'} undo="x"/>
                        <Notify ref={this.failedMessage} message={'Something went wrong'} undo="x"/>
                        <Notify ref={this.passwordsDontMatch} message={"Passwords don't match"} undo="x"/>
                    </View>
                </ScrollView>
            </View>
        );
    }
}
