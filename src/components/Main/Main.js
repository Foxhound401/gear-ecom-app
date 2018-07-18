import React, { Component } from 'react';
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native';
import Shop from './Shop/Shop';
import { TabBar } from '../Route/Route';

export default class Main extends Component {

    render() {

        const { navigation } = this.props;

        return (
            <TabBar />
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        paddingHorizontal: 10
    },
    button: {
        alignItems: 'center',
        backgroundColor: '#DDDDDD',
        padding: 10
    },
});
