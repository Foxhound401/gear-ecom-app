import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, Dimensions, Button, TouchableOpacity, ScrollView } from 'react-native';
import bannerImage from '../../../../media/gameImage/nekoparaSlider1.jpg';
import icSearch from '../../../../media/appIcon/cart.png';

const { width } = Dimensions.get('window');

export default class CategoryBar extends Component {
    render() {
        const { wrapper, container, scroll, slideButton, textStyle } = styles;
        return (
            <View style={wrapper}>
                <View style={container} >
                    <ScrollView style={scroll} horizontal={true} showsHorizontalScrollIndicator={false}>
                        <TouchableOpacity style={slideButton}>
                            <Text style={textStyle}>Action</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={slideButton}>
                            <Text style={textStyle}>Indie</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={slideButton}>
                            <Text style={textStyle}>Open-world</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={slideButton}>
                            <Text style={textStyle}>Co-op</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={slideButton}>
                            <Text style={textStyle}>Anime</Text>
                        </TouchableOpacity>
                    </ScrollView>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    slideButton: {
        flex: 1,
        width: undefined,
        height: undefined,
        backgroundColor: "#57b9b9",
        margin: 8,
        borderRadius: 5,
        justifyContent: 'space-around',
        alignItems: 'center',
        shadowColor: '#2E272B',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 1,
    },
    wrapper: {
        flex: 0.12,
        shadowColor: '#2E272B',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 1,
        marginBottom: 0,
        marginTop: 0,

    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 0,
        shadowColor: '#2E272B',
        shadowOffset: { width: 0, height: 5 },
        shadowOpacity: 1,
    },
    scroll: {
        flex: 1,
    },
    textStyle: {
        fontSize: 15,
        color: '#FFF',
        margin: 10
    },

});
