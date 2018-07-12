import React, { Component } from 'react';
import { Text, View, Button, Dimensions, StyleSheet, TextInput, TouchableOpacity } from 'react-native';

const { height, width } = Dimensions.get('window');

export default class Login extends Component {

    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
        }
    }

    render() {
        const { container, inputStyle, bigButton, buttonText, signUpButton, buttonSinupText } = styles;
        const { email, password } = this.state;
        return (
            <View style={container}>
                <TextInput
                    style={inputStyle}
                    placeholder="E-mail address"
                    value={email}
                    onChangeText={text => this.setState({ email: text })}
                    underlineColorAndroid='transparent'

                />
                <TextInput
                    style={inputStyle}
                    placeholder="Password"
                    value={password}
                    onChangeText={text => this.setState({ password: text })}
                    secureTextEntry
                    underlineColorAndroid='transparent'
                />
                <TouchableOpacity style={bigButton}>
                    <Text style={buttonText}>Log in</Text>
                </TouchableOpacity>

                <TouchableOpacity style={signUpButton}>
                    <Text style={buttonSinupText}>Create GameXC ID</Text>
                </TouchableOpacity>
            </View>
        );
    }
};

const styles = StyleSheet.create(
    {
        container: {
            flex: 1,
            width: undefined,
            height: height / 2,
            margin: 30,
            marginTop: 20,
            backgroundColor: '#FFF',
        },
        inputStyle: {
            height: 50,
            backgroundColor: '#fff',
            borderWidth: 1,
            borderRadius: 2,
            margin: 15,
            padding: 15,
            borderColor: '#ABB7B7',
            marginTop: 0,
        },
        bigButton: {
            marginTop: 15,
            height: 50,
            borderWidth: 1,
            borderColor: '#fff',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#36D7B7',
            borderRadius: 2,
            margin: 15,
        },
        buttonText: {
            fontFamily: 'Avenir',
            fontWeight: 'bold',
            color: "#FFF"
        },
        signUpButton: {
            height: 50,
            margin: 15,
            marginTop: 0,
            borderWidth: 1,
            borderColor: '#fff',
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 2,
            borderWidth: 1,
            borderColor: '#36D7B7'
        },
        buttonSinupText: {
            fontFamily: 'Avenir',
            fontWeight: 'bold',
            color: "#65C6BB"
        }
    }
);
