import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, Dimensions, TouchableOpacity, ScrollView } from 'react-native';
import bannerImage from '../../../../media/gameImage/nekoparaSlider1.jpg';
import nekoparaItem from '../../../../media/gameImage/nekoparaItem.jpg';
import thangmatloz from '../../../../media/gameImage/thangmatlon.jpg';

const { height, width } = Dimensions.get('window');
export default class Category extends Component {

    constructor(props) {
        super(props);
        this.state = {
            title: "Most Popular",
            gameTitle: "Son Tung matlozzzzzz :))",
            price: "0.00",
            currency: "VND"
        }
    }

    render() {
        const { wrapper, textStyle, imageStyle, scroll, itemSlide, gameTitle, textGameTitle, priceTitle, textPrice, textCurrency } = styles;
        return (
            <View style={wrapper}>
                <Text style={textStyle}>{this.state.title}</Text>
                <ScrollView style={scroll} horizontal={true} showsHorizontalScrollIndicator={false}>
                    <TouchableOpacity style={itemSlide}>
                        <View style={{ flex: 1 }}>
                            <Image source={nekoparaItem} style={imageStyle} />
                        </View>
                        <View style={gameTitle}>
                            <Text style={textGameTitle}>{this.state.gameTitle}</Text>
                        </View>
                        <View style={priceTitle}>
                            <Text style={textPrice}>{this.state.price}</Text>
                            <Text style={textCurrency}>{this.state.currency}</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={itemSlide}>
                        <View style={{ flex: 1 }}>
                            <Image source={thangmatloz} style={imageStyle} />
                        </View>
                        <View style={gameTitle}>
                            <Text style={textGameTitle}>{this.state.gameTitle}</Text>
                        </View>
                        <View style={priceTitle}>
                            <Text style={textPrice}>{this.state.price}</Text>
                            <Text style={textCurrency}>{this.state.currency}</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={itemSlide}>
                        <View style={{ flex: 1 }}>
                            <Image source={thangmatloz} style={imageStyle} />
                        </View>
                        <View style={gameTitle}>
                            <Text style={textGameTitle}>{this.state.gameTitle}</Text>
                        </View>
                        <View style={priceTitle}>
                            <Text style={textPrice}>{this.state.price}</Text>
                            <Text style={textCurrency}>{this.state.currency}</Text>
                        </View>
                    </TouchableOpacity>
                </ScrollView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    wrapper: {
        flex: 0.4,
        shadowColor: '#2E272B',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.2,
        margin: 5,
        marginTop: 0,
        minHeight: height / 2,
    },
    textStyle: {
        fontSize: 20,
        padding: 10,
        paddingBottom: 0,
    },
    imageStyle: {
        flex: 1,
        width: undefined,
        height: undefined,
        resizeMode: "contain",
        minHeight: height / 8,
        marginTop: 20,
        justifyContent: 'space-around',
        alignItems: 'center',
    },
    scroll: {
        flex: 1,
    },
    itemSlide: {
        flex: 1,
        width: undefined,
        height: undefined,
        backgroundColor: '#FFF',
        minWidth: width / 2.3,
        maxWidth: width / 2.3,
        margin: 10,
    },
    gameTitle: {
        flex: 0.2,
        alignItems: 'center',
        padding: 10,
        paddingTop: 5,
        paddingBottom: 0,
    },
    textGameTitle: {
        fontSize: undefined,
    },
    priceTitle: {
        flex: 0.2,
        flexDirection: 'row',
        padding: 10,
        paddingTop: 0,
        paddingBottom: 0,
        marginBottom: 0,
    },
    textPrice: {
        fontSize: 20,
        paddingBottom: 0,
        marginBottom: 0,
        color: "#E87E04",
    },
    textCurrency: {
        color: "#E87E04",
    }
});
