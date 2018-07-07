import React, { Component } from 'react';
import { Text, View, Button } from 'react-native';

export default class ChangeInfor extends Component {
    render() {
        return (
            <View style={{ flex: 1, backgroundColor: '#0FC1E9' }}>
                <Text>ChangeInfor component</Text>
                <Button
                    title="Main Component"
                    onPress={() => this.props.navigation.goBack()}
                />
            </View>
        );
    }
}
