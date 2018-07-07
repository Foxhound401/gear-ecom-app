import React, { Component } from 'react';
import { Text, View, Button } from 'react-native';

export default class OrderHistory extends Component {
    render() {
        return (
            <View style={{ flex: 1, backgroundColor: '#AFC1E9' }}>
                <Text>OrderHistory component</Text>
                <Button
                    title="Main Component"
                    onPress={() => this.props.navigation.navigate('main')}
                />
            </View>
        );
    }
}
