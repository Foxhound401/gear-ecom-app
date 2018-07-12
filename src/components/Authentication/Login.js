import React, { Component } from 'react';
import { Text, View, Button, Dimensions, StyleSheet } from 'react-native';
import { createStackNavigator } from 'react-navigation';

const { height, width } = Dimensions.get('window');

export default class Login extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        const { container } = styles;
        return (
            <View style={container}>
                <Text>Login component</Text>
                <Button
                    title="Login Component"
                    onPress={() => this.props.navigation.navigate('Profile')}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create(
    {
        container: {
            width: undefined,
            height: height / 3,
            backgroundColor: 'yellow',
            margin: 20,
            marginTop: 10,
        }
    }
)
