import React, { Component } from 'react';
import { Text, View, Button } from 'react-native';

export default class Signup extends Component {
    render() {
        return (
            <View style={{ flex: 1, backgroundColor: '#0FF5C9' }}>
                <Text>Signup component</Text>
                <Button
                    title="Main Component"
                    onPress={() => this.props.navigation.goBack()}
                />
            </View>
        );
    }
}
