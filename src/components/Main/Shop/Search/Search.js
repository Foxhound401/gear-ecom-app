import React, { Component } from 'react';
import { Text, View, TextInput, StyleSheet } from 'react-native';

export default class Search extends Component {

    constructor(props) {
        super(props);
        this.state = {
            txtSearch: "",
        }
    }

    render() {
        return (
            <View>
                <Text>Search Component</Text>
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
