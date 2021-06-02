// @ts-ignore
import React,{Component} from 'react';
import { ScrollView, View } from 'react-native';

import { ThemeStyles } from "../themes/default";
import MenuButton from "../components/MenuButton";
import MeBar from "../components/MeBar";




export default class Me extends Component<{ navigation: any }> {


    componentDidMount(): void {

    }

    constructor(props: any) {
        super(props);
        this.state = {

        };
    }

    render() {
        let navigation = this.props.navigation;

        return (
            <View style={ThemeStyles.applicationBackground}>
                <ScrollView style={[ThemeStyles.container,]}>
                    <MeBar navigation={navigation} name="Ja" photo={require('../../assets/profil.png')} style={[ThemeStyles.welcome, { padding: 10, marginTop: 15 }]} />
                    <View style={{
                        paddingBottom: 100, flex: 1,
                        flexDirection: 'row',
                        flexWrap: 'wrap',
                        alignItems: 'flex-start'
                    }}>
                        <MenuButton icon={require('../../assets/kruh_profil.png')} label={'Môj Profil'} style={{}} onPress={() => { this.props.navigation.navigate(PROFILE_STACK) }} />
                        <MenuButton icon={require('../../assets/zdrav_info-kruh.png')} label={'Zdravotné informácie'} style={{}} onPress={() => { this.props.navigation.navigate('Health') }} />
                        <MenuButton icon={require('../../assets/kalendarkruh.png')} label={'Kalendár'} style={{}} onPress={() => { this.props.navigation.navigate('Calendar') }} />
                        <MenuButton icon={require('../../assets/fotkykruh.png')} label={'Fotky'} style={{}} onPress={() => { this.props.navigation.navigate('Photos') }} />
                        <MenuButton icon={require('../../assets/vahakruh.png')} label={'Váha'} style={{}} onPress={() => { this.props.navigation.navigate('Weight') }} />
                        <MenuButton icon={require('../../assets/kalendarkruh.png')} label={'PSM kalendár'} style={{}} onPress={() => { this.props.navigation.navigate('Calendar',{tab: 'period'}) }} />
                        <MenuButton icon={require('../../assets/porodnyplankruh.png')} label={'Pôrodný plán'} style={{}} onPress={() => { this.props.navigation.navigate('Plan') }} />
                        <MenuButton icon={require('../../assets/kalendarkruh.png')} label={'Taška do pôrodnice'} style={{}} onPress={() => { this.props.navigation.navigate('Bag') }} />
                        <MenuButton icon={require('../../assets/nakupnyzoznamkruh.png')} label={'Nákupný zoznam'} style={{}} onPress={() => { this.props.navigation.navigate('BuyList') }} />
                        <MenuButton icon={require('../../assets/zoznammienkruh.png')} label={'Zoznam mien'} style={{}} onPress={() => { this.props.navigation.navigate('Names') }} />
                        <MenuButton icon={require('../../assets/zoznamporodnickruh.png')} label={'Zoznam pôrodníc'} style={{}} onPress={() => { this.props.navigation.navigate('Hospitals') }} />
                        <MenuButton icon={require('../../assets/stratatehkruh.png')} label={'Strata tehotenstva'} style={{}} onPress={() => { this.props.navigation.navigate(PROFILE_STACK) }} />
                        <MenuButton icon={require('../../assets/administrativakruh.png')} label={'Administratíva'} style={{}} onPress={() => { this.props.navigation.navigate('Administration') }} />
                    </View>
                </ScrollView>
            </View>
        );
    }
}
