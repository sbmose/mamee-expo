
import React from 'react';
import { StyleSheet, View, Animated } from 'react-native';
import { Theme } from '../themes/default';

export default function ProgressBar({ progress }: any) {

    return (
        <View style={styles.container}>
            <View style={styles.progressBar}>
                <Animated.View style={[StyleSheet.absoluteFill, { backgroundColor: Theme.pink, width: progress + "%", borderRadius: 6 }]} />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {},
    progressBar: {
        height: 8,
        width: '100%',
        backgroundColor: 'white',
        borderWidth: 1,
        borderColor: Theme.lightgray,
        borderRadius: 6
    }
});
