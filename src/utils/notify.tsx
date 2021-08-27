import {Component} from 'react';
import * as React from 'react';
import {Snackbar} from 'react-native-paper';
import {StyleSheet, View, Text} from "react-native";
import {Layout, Theme, ThemeStyles} from "../themes/default";

interface NotifyProps {
    message: string;
    undo?: string;
}

interface NotifyState {
    visible: boolean;
}

export default class Notify extends Component<NotifyProps, NotifyState> {


    constructor(props: any) {
        super(props);
        this.state = {
            visible: false,
        };
    }


    render() {
        const {visible} = this.state;
        return (<Snackbar
                visible={visible}
                onDismiss={() => this.setState({visible: false})}
                duration={Snackbar.DURATION_SHORT}
                style={styles.snackbar}
            >
                <Text>{this.props.message}</Text>
            </Snackbar>
        );
    }
}

let styles = StyleSheet.create({
    snackbar: {
        bottom: Layout.statusBarHeight,
    }
});
