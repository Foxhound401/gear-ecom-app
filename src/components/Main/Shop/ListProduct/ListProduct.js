import React, { Component } from 'react';
import { View, Text } from 'react-native';

export default class ListProduct extends Component {
    render() {
        const { navigation } = this.props;
        const itemId = navigation.getParam('itemId', 'NO-ID');
        return (
            <View>
                <Text>ListProduct component item ID {itemId}</Text>
            </View>
        );
    }
}
