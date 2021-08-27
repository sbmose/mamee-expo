import { StyleSheet } from "react-native";
import Metrics from './metrics';

const Theme = {
    pink: '#F794A4',
    white: '#ffffff',
    warningColor: 'yellow',
    textColor: 'black',
    blue: '#3B5998',
    black: '#000',
    gray: '#aaa',
    red: '#f00',
    darkGray: '#666',
    appBg: '#F0F0F0',
    green: "#10C971",
    lightgray: '#ddd',
    lightgreen: '#4f4',

    lightGrey: "#e8e8e8"

};


class Layout {
}

const ThemeStyles = StyleSheet.create({
    // Miloš - TODO sjednotit
    safeAreaContainer: {
        ...StyleSheet.absoluteFillObject,
        backgroundColor: Theme.appBg
    },
    scrollContainer: {
        backgroundColor: Theme.appBg,
    },
    innerContainer: {
        flex: 1,
        backgroundColor: Theme.white,
        width: Metrics.WIDTH,
        height: Metrics.HEIGHT
    },
    bigHeader: {
        fontSize: 32,
        lineHeight: 42,
        fontWeight: "600",
        letterSpacing: 0.5,
        color: Theme.black,
        marginBottom: 16
    },
    mediumHeader: {
        fontSize: 24,
        lineHeight: 28,
        fontWeight: "600",
        letterSpacing: 0.1,
        color: Theme.black,
        marginBottom: 16
    },
    infoTextMedium: {
        fontSize: 16,
        lineHeight: 24,
        fontWeight: "500",
        letterSpacing: 0.1,
        color: Theme.darkGray,
        marginBottom: 16
    },
    infoTextSmall: {
        color: Theme.darkGray,
        fontWeight: "500",
        fontSize: 14,
        letterSpacing: 0.2,
        marginBottom: 16
    },
    cardContainer: {
        flexDirection: "column",
        justifyContent: "flex-start",
        padding: 16,
        marginBottom: 16,
        backgroundColor: Theme.white,
        borderRadius: 6
    },
    // End
    imageDashboard: {
        height: 150,
        margin: 5,
        backgroundColor: Theme.white,
        flex: 0.5,
        borderRadius: 15
    },
    dashboardPhotos: {

    },
    statusBoard: {
        backgroundColor: Theme.pink,
        borderRadius: 25,
        height: 200,
        marginTop: 20
    },
    container: {
        paddingTop: 23,
        paddingHorizontal: 16
    },
    welcome: {
        flexDirection: "row",
    },
    today: {
        fontSize: 13,
        color: Theme.gray
    },

    tabIconStyle: {
        width: 24,
        height: 24
    },
    ptb1: {
        paddingTop: 0,
        paddingBottom: 0,
        marginTop: 5,
        marginBottom: 5,
    },
    center: {
        alignSelf: 'center'
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
        marginBottom: '5%'
    },
    topNavigation: {
        height: 100,
        flex: 1,
        backgroundColor: '#ffffff'
    },
    bottomNavigation: {
        height: '8%',
        backgroundColor: Theme.white,
        borderTopColor: Theme.gray,
        borderTopWidth: 1
    },
});

export { Theme, Layout, ThemeStyles };

