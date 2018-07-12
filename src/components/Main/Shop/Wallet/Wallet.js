import React, { Component } from 'react';
import { Text, View, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const historyIcon = (<Icon name="history" style={{
    justifyContent: 'space-around',
    color: '#FFF'
}} size={30} />);
const addFund = (<Icon name="add" style={{
    justifyContent: 'space-around',
    color: '#FFF'
}} size={30} />);

export default class Wallet extends Component {

    constructor(props) {
        super(props);
        this.state = {
            price: '0.00',
            currency: 'VND',
        }
    }

    render() {
        const { scrollButtonWrapper, slideButton, textButton, textStyle, priceTitle, textPrice, textCurrency } = styles;

        return (
            <View style={{ flex: 1, backgroundColor: '#22A7F0' }}>
                <View style={{ flex: 0.6, backgroundColor: '#7BC8C8', justifyContent: 'center' }}>
                    <View style={scrollButtonWrapper} >
                        <Text style={textStyle}>
                            Total balance
                        </Text>
                        <View style={priceTitle}>
                            <Text style={textPrice}>{this.state.price}</Text>
                            <Text style={textCurrency}>{this.state.currency}</Text>
                        </View>
                    </View>
                </View>
                <View style={{ flex: 0.4, backgroundColor: '#7BC8C8', justifyContent: 'center' }}>
                    <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                        <TouchableOpacity style={scrollButtonWrapper}>
                            <View style={slideButton}>
                                {historyIcon}
                            </View>
                            <Text style={textButton}>
                                View History
                        </Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={scrollButtonWrapper}>
                            <View style={slideButton}>
                                {addFund}
                            </View>
                            <Text style={textButton}>
                                Add Fund
                        </Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>

        );
    }
}

const styles = StyleSheet.create({
    priceTitle: {
        flexDirection: 'row',
        padding: 10,
    },
    textPrice: {
        fontSize: 50,
        color: '#FFF',
    },
    textCurrency: {
        fontSize: 15,
        color: '#FFF',

    },
    scrollButtonWrapper: {
        alignItems: 'center',
        margin: 20,
    },
    textStyle: {
        fontSize: 20,
        color: '#FFF',
        padding: 10,
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        paddingHorizontal: 10
    },
    button: {
        alignItems: 'center',
        backgroundColor: '#DDDDDD',
        padding: 10
    },
    slideButton: {
        width: 55,
        height: 55,
        backgroundColor: "#57b9b9",
        borderRadius: 35,
        justifyContent: 'space-around',
        alignItems: 'center',
        margin: 8,
        marginBottom: 0,
    },
    textButton: {
        color: '#FFF',
        padding: 10,
        fontSize: 17,
        fontFamily: 'Avenir',
    }
});
