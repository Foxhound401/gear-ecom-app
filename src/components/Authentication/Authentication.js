import React, { Component } from 'react';
import { Text, View, Button, StyleSheet, ScrollView, Image, Dimensions, ImageBackground } from 'react-native';
import backGround from '../../media/gameImage/backgroundImage.jpg';
import Login from './Login';
import Signup from './Signup';

const { height, width } = Dimensions.get('window');
export default class Authentication extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isLogged: true,
        }
    }

    render() {
        const { imageStyle, title } = styles;
        return (
            <ScrollView style={{ flex: 1 }}>
                <View style={{
                    flex: 1, justifyContent: 'center',
                    alignItems: 'center', marginBottom: 15,
                }}>
                    <ImageBackground source={backGround} style={imageStyle}>
                        <Text style={title}>GameXC</Text>
                        <Text style={{ color: '#FFF', fontSize: 9, fontFamily: 'Helvetica-Light' }}>One login to the last Platforms you ever need</Text>
                    </ImageBackground>
                </View>
                {this.state.isLogged ? <Login /> : <Signup />}
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    imageStyle: {
        flex: 1,
        width: width,
        height: undefined,
        minHeight: height / 3,
        opacity: 0.9,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 10,
    },
    title: {
        fontSize: 50,
        fontFamily: 'Helvetica-Light',
        fontWeight: 'bold',
        marginTop: 18,
    }
})
