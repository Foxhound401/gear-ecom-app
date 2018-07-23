import React, { Component } from 'react';
import { Text, View, TouchableOpacity, StyleSheet, Image, Dimensions, ScrollView } from 'react-native';
import nekoparaItem from '../../../../media/gameImage/nekoparaItem.jpg';
import fallout4Item from '../../../../media/gameImage/fallout4Slider.png';
import getListGame from '../../../../api/getListGame';

const url = 'http://192.168.0.100:27017/gamexc/images/game/';

export default class ListProduct extends Component {
    constructor(props) {
        super(props);
        this.state = {
            category: [],
            currency: 'USD'
        }
    }

    componentDidMount() {
        const categoryId = this.props.navigation.getParam('category').id;
        getListGame(categoryId)
            .then((responseJSON) => {
                console.log('response ', responseJSON);
                this.setState({ category: responseJSON });
            })
    }

    formatPrice(price) {
        return Number.parseFloat(price).toFixed(2);
    }

    render() {
        const { navigation } = this.props;
        const { containerEmpty, containerItems, cartItem, imageStyle, gameTitle, textPrice, priceTitle, textCurrency, textGameTitle, imageWrapper } = styles;
        const { category, currency } = this.state;
        return (
            <ScrollView style={{ flex: 1 }}>
                {
                    category.length > 0 ?
                        category.map(e => (
                            <View style={containerItems} key={e.id}>
                                <TouchableOpacity style={cartItem} onPress={() => this.props.navigation.navigate('DetailView', { 'game': e })}>
                                    <View style={imageWrapper}>
                                        <Image source={{ uri: `${url}${e.images}` }} style={imageStyle} />
                                    </View>
                                    <View style={{ flex: 1 }}>
                                        <Text style={textGameTitle}>{e.name}</Text>
                                        <View style={priceTitle}>
                                            <Text style={textPrice}>{this.formatPrice(e.price)}</Text>
                                            <Text style={textCurrency}>{currency}</Text>
                                        </View>
                                    </View>
                                </TouchableOpacity>
                            </View>
                        ))
                        :
                        <View>
                            <Text> No records </Text>
                        </View>
                }
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    gameTitle: {
        backgroundColor: 'blue',
    },
    priceTitle: {
        margin: 20,
        flexDirection: 'row',
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

