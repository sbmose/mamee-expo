import {Theme} from "../themes/default";
import {StyleSheet} from 'react-native';

export default StyleSheet.create({
    forgot: {
        color: Theme.textColor,
        fontSize: 14,
    },
    logo: {
        width: 150,
        height: 150,
    },
    title: {
        color: Theme.textColor,
        fontSize: 36,
        textAlign: "left",
        alignSelf: "flex-start",
        justifyContent: "flex-start"
    },
    field: {
        marginTop: 10,
        marginBottom: 10,
        height: 50,
        borderRadius: 5,
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
    },
    input: {
        borderColor: Theme.gray,
        borderWidth: 1,
        paddingHorizontal: 10
    },
    btn: {
        backgroundColor: Theme.pink
    },
    btnFb: {
        backgroundColor: Theme.blue
    },
    btnGoog: {
        backgroundColor: Theme.white
    },
    btnText: {
        color: Theme.white,
    },
    btnTextBlack: {
        color: Theme.textColor,
    },
    warningText: {
        fontSize: 14,
        color: Theme.warningColor
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 50
    },
    insideScrollview: {
        justifyContent: "center",
        flexGrow: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'flex-start'
    }
});
