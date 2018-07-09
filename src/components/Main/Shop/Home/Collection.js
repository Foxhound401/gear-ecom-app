import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';
import bannerImage from '../../../../media/gameImage/nekoparaSlider1.jpg';

const { width } = Dimensions.get('window');

export default class Collection extends Component {
    render() {
        const { wrapper, textStyle, imageStyle } = styles;
        return (
            <View style={wrapper}>
                <Image source={bannerImage} style={imageStyle} />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    wrapper: {
        flex: 0.4,
        backgroundColor: '#FFF',
        shadowColor: '#2E272B',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.2,
        paddingTop: 0
    },
    textStyle: {
        fontSize: 20,
        color: '#AFAEAF'
    },
    imageStyle: {
        flex: 1,
        width: undefined,
        height: undefined,
        resizeMode:"stretch"
    }
});
