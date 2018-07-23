import React, { Component } from 'react';
import { Text, View, TouchableOpacity, StyleSheet, Image, Dimensions, ScrollView } from 'react-native';
import nekoparaItem from '../../../../media/gameImage/nekoparaItem.jpg';
import fallout4Item from '../../../../media/gameImage/fallout4Slider.png';


export default class ListProduct extends Component {
    render() {
        const { navigation } = this.props;
        const itemId = navigation.getParam('itemId', 'NO-ID');
        const { containerEmpty, containerItems, cartItem, imageStyle, gameTitle, textPrice, priceTitle, textCurrency, textGameTitle, imageWrapper } = styles;
        return (
            <ScrollView style={{ flex: 1 }}>
                <View style={containerItems}>
                    <TouchableOpacity style={cartItem} onPress={() => this.props.navigation.navigate('DetailView', { name: 'phuc' })}>
                        <View style={imageWrapper}>
                            <Image source={nekoparaItem} style={imageStyle} />
                        </View>
                        <View style={{ flex: 1 }}>
                            <Text style={textGameTitle}>{this.state.gameTitle}</Text>
                            <View style={priceTitle}>
                                <Text style={textPrice}>{this.state.price}</Text>
                                <Text style={textCurrency}>{this.state.currency}</Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                </View>
                <View style={containerItems}>
                    <TouchableOpacity style={cartItem}>
                        <View style={imageWrapper}>
                            <Image source={fallout4Item} style={imageStyle} />
                        </View>
                        <View style={{ flex: 1 }}>
                            <Text style={textGameTitle}>{this.state.gameTitle}</Text>
                            <View style={priceTitle}>
                                <Text style={textPrice}>{this.state.price}</Text>
                                <Text style={textCurrency}>{this.state.currency}</Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                </View>

            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    gameTitle: {
        backgroundColor: 'blue',
    },
    priceTitle: {
        marginRight: 55,
        flexDirection: 'row',
        justifyContent: 'flex-end',
    },
    textPrice: {
        fontSize: 20,
        color: '#E87E04',
    },
    textCurrency: {
        color: '#E87E04',
    },
    textGameTitle: {
        margin: 10,
        fontSize: 15,
    },
    containerEmpty: {
        flex: 1,
        justifyContent: 'center',
        paddingHorizontal: 10,
        alignItems: 'center',
    },
    containerItems: {
        flex: 1,
    },
    cartItem: {
        flex: 0.45,
        flexDirection: 'row',
        backgroundColor: '#FFF',
        margin: 15,
        marginTop: 10,
    },
    imageStyle: {
        flex: 1,
        width: undefined,
        height: 100,
        minHeight: 100,
        minWidth: 80,
        resizeMode: 'stretch',
    },
    imageWrapper: {
        flex: 0.4,
        margin: 10,
        alignItems: 'center',
    }
});

