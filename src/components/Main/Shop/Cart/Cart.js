import React, { Component } from 'react';
import { Text, View, TouchableOpacity, StyleSheet, Image, Dimensions, ScrollView } from 'react-native';
import nekoparaItem from '../../../../media/gameImage/nekoparaItem.jpg';
import fallout4Item from '../../../../media/gameImage/fallout4Slider.png';

const { width, height } = Dimensions.get('window');
export default class Cart extends Component {

    constructor(props) {
        super(props);
        this.state = {
            cartItems: 1,
            gameTitle: 'Nekopara vol 1 Steam Key Global',
            price: '15.00',
            currency: 'USD',
        }
    }

    render() {
        const { containerEmpty, containerItems, cartItem, imageStyle, gameTitle, textPrice, priceTitle, textCurrency, textGameTitle, imageWrapper } = styles;
        return (
            this.state.cartItems === 0 ?
                <View style={containerEmpty}>
                    <Text style={{ color: "#2C3E50", fontSize: 20 }}>Cart is empty</Text>
                    <TouchableOpacity style={{
                        width: 110, height: 40, backgroundColor: "#00B16A",
                        justifyContent: 'center', alignItems: 'center', margin: 20, marginBottom: 10, borderRadius: 5
                    }}>
                        <Text style={{ color: "#FFF", fontSize: 15 }}>Shop now</Text>
                    </TouchableOpacity>
                </View>
                :
                <ScrollView style={{ flex: 1 }}>
                    <View style={containerItems}>
                        <TouchableOpacity style={cartItem}>
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
