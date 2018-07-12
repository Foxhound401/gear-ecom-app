import React, { Component } from 'react';
import { Text, View, Button, Dimensions, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const { height, width } = Dimensions.get('window');
const backIcon = (<Icon name='ios-arrow-back' size={20} />);

export default class Signup extends Component {

    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            retypePassword: '',
        }
    }

    render() {
        const { container, inputStyle, bigButton, buttonText, signUpButton, buttonSinupText, backButton } = styles;
        const { email, password } = this.state;
        return (
            <View style={container}>
                <TouchableOpacity style={backButton}>
                    {backIcon}
                </TouchableOpacity>
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
                <TextInput
                    style={inputStyle}
                    placeholder="Re-type password"
                    value={password}
                    onChangeText={text => this.setState({ retypePassword: text })}
                    secureTextEntry
                    underlineColorAndroid='transparent'
                />
                <TouchableOpacity style={bigButton}>
                    <Text style={buttonText}>Register</Text>
                </TouchableOpacity>
            </View>
        );
    }
};

const styles = StyleSheet.create(
    {
        backButton: {
            borderWidth: 1,
            borderRadius: 30,
            borderColor: '#ABB7B7',
            width: 40,
            height: 40,
            justifyContent: 'center',
            alignItems: 'center',
            marginLeft: 130,
            margin: 10,
        },
        container: {
            flex: 1,
            width: undefined,
            height: undefined,
            minHeight: height / 3,
            margin: 30,
            marginTop: 10,
            backgroundColor: '#FFF',

        },
        inputStyle: {
            flex: 1,
            minHeight: 50,
            backgroundColor: '#fff',
            borderWidth: 1,
            borderRadius: 2,
            margin: 15,
            padding: 15,
            borderColor: '#ABB7B7',
            marginTop: 10,
        },
        bigButton: {
            marginTop: 20,
            height: 50,
            borderWidth: 1,
            borderColor: '#fff',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: '#36D7B7',
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
            borderWidth: 1,
            borderColor: '#36D7B7'
        },
        buttonSinupText: {
            fontFamily: 'Avenir',
            fontWeight: 'bold',
            color: "#36D7B7"
        }
    }
);
