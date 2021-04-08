import {StyleSheet} from "react-native";

const Theme = {
    pink: '#F794A4',
    white: '#ffffff',
    warningColor: 'yellow',
    textColor: 'black',
    blue: '#3B5998',
    black: '#000',
    gray: '#aaa'
};


class Layout {
}

const ThemeStyles = StyleSheet.create({
    ptb1: {
      paddingTop: 0,
      paddingBottom: 0,
        marginTop: 5,
        marginBottom: 5,
    },
    center: {
        alignSelf:  'center'
    },
    italic: {
        fontStyle: 'italic',
    },
    alignTextCenter: {
      textAlign: 'center'
    },
    pb5: {
        paddingBottom: 5,
    },
    inline: {
        flexDirection: "row",
    },
    w50: {
      width: '50%'
    },
    mb20: {
        marginBottom: 20
    },
    mt20: {
        marginTop: 20
    },
    wrapText: {
        width: 0,
        flexGrow: 1,
        marginLeft: 0,
    },
    green: {
        color: '#6dda6e'
    },
    blue: {
        color: '#38bdff'
    },
    red: {
        color: '#dc3545'
    },
    gray: {
        color: '#576168',
    },
    darkGray: {
        color: '#2b3037',
    },
    black: {
        color: '#000000',
    },
    heading1: {
        fontFamily: 'Ubuntu',
        fontSize: 24
    },
    headingName: {
        fontFamily: 'Ubuntu',
        fontSize: 36
    },
    heading2: {
        fontFamily: 'Ubuntu',
        fontSize: 18
    },
    heading3: {
        fontFamily: 'Ubuntu',
        fontSize: 16
    },
    heading4: {
        fontFamily: 'Ubuntu',
        fontSize: 12
    },
    text0_5: {
        fontFamily: 'Roboto',
        fontSize: 30
    },
    text1: {
        fontFamily: 'Roboto',
        fontSize: 22
    },
    text2: {
        fontFamily: 'Roboto',
        fontSize: 18
    },
    text2_5: {
        fontFamily: 'Roboto',
        fontSize: 15
    },
    text3: {
        fontFamily: 'Roboto',
        fontSize: 12
    },
    text4: {
        fontFamily: 'Roboto',
        fontSize: 9
    },
    applicationBackground: {
        backgroundColor: '#F0F0F0'
    },
    tabLabelStyle: {
        marginBottom: '10%'
    },
    topNavigation: {
        height: 100,
        flex: 1,
        backgroundColor: '#ffffff'
    },
    bottomNavigation: {
        height: '10%',
        backgroundColor: '#49606c'
    },
});

export {Theme, Layout, ThemeStyles};

