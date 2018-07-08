import React, { Component } from 'react';
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native';

export default class Search extends Component {

    render() {
        return (
            <View style={{ flex: 1, backgroundColor: '#FFC1E9' }}>
                <View style={{ flex: 0.1, backgroundColor: 'blue' }}>
                    <Text>TopBar</Text>
                </View>
                <Text>Search component</Text>
            </View>
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
