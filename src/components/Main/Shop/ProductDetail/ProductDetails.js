import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

export default class ProductDetails extends Component {
    render() {

        const { navigation } = this.props;
        const name = navigation.getParam('name');

        return (
            <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
                <Text>
                    Product Details {name}
                </Text>
            </TouchableOpacity>
        );
    }
}