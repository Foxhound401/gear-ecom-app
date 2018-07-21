import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, Dimensions, TouchableOpacity, ScrollView } from 'react-native';
import bannerImage from '../../../../media/gameImage/nekoparaSlider1.jpg';
import nekoparaItem from '../../../../media/gameImage/nekoparaItem.jpg';
import thangmatloz from '../../../../media/gameImage/thangmatlon.jpg';

const { height, width } = Dimensions.get('window');
const url = 'http://192.168.0.101:27017/gamexc/images/game/';

export default class TopGame extends Component {

    constructor(props) {
        super(props);
        this.state = {
            title: "Top Popular Game",
            gameTitle: "Nekopara Vol 1 Key Steam Global",
            price: "0.00",
            currency: "USD",
            bool: false,
        }
    }

    formatPrice(price) {
        return Number.parseFloat(price).toFixed(2);
    }

    render() {
        const { topGames } = this.props;
        const { wrapper, textStyle, imageStyle, scroll, itemSlide,
            gameTitle, textGameTitle, priceTitle, textPrice, textCurrency } = styles;
        return (
            <View style={wrapper}>
                <View style={{ flex: 0.01, flexDirection: 'row', marginBottom: 0 }}>
                    <Text style={textStyle}>{this.state.title}</Text>
                    <TouchableOpacity style={{ flex: 1, justifyContent: 'flex-end', alignItems: 'flex-end' }}>
                        <Text style={{ color: '#22A7F0', margin: 15, fontSize: 17, }}>More</Text>
                    </TouchableOpacity>

                </View>
                <ScrollView style={scroll} horizontal={true} showsHorizontalScrollIndicator={false}>

                    {
                        topGames.map(e => (
                            <TouchableOpacity style={itemSlide} onPress={() => console.log(e.images)} key={e.id} >
                                <View style={{
                                    flex: 1, justifyContent: 'center',
                                    alignItems: 'center', marginBottom: 15
                                }}>
                                    <Image source={{ uri: `${url}${e.images}` }} style={imageStyle} />
                                </View>
                                <View style={gameTitle}>
                                    <Text style={textGameTitle}>{e.title}</Text>
                                </View>
                                <Text style={{ padding: 5, paddingBottom: 0, color: '#BDC3C7' }} >From</Text>
                                <View style={priceTitle}>
                                    <Text style={textPrice}>{this.formatPrice(e.price)}</Text>
                                    <Text style={textCurrency}>{this.state.currency}</Text>
                                </View>
                            </TouchableOpacity>
                        ))
                    }

                    
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
        width: width / 3.5,
        height: height / 4.5,
        resizeMode: "stretch",
        marginTop: 20,
    },
    scroll: {
        flex: 1,
    },
    itemSlide: {
        flex: 1,
        width: undefined,
        height: undefined,
        backgroundColor: '#FFF',
        maxWidth: width / 3,
        minWidth: width / 2.5,
        margin: 10,
        marginTop: 0,

    },
    gameTitle: {
        flex: 0.1,
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
        padding: 15,
        paddingTop: 0,
    },
    textPrice: {
        fontSize: 16,
        color: "#E87E04",
        paddingRight: 2,
        paddingTop: 0,
    },
    textCurrency: {
        fontSize: 10,
        color: "#E87E04",
    }
});
