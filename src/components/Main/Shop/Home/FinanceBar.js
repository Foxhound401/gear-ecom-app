import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, Dimensions, Button, TouchableOpacity, ScrollView } from 'react-native';
import bannerImage from '../../../../media/gameImage/nekoparaSlider1.jpg';
import icSearch from '../../../../media/appIcon/cart.png';
import Icon from 'react-native-vector-icons/MaterialIcons';

const addIcon = (<Icon name="add" style={{
    justifyContent: 'space-around',
    color: '#FFF'
}} size={23} />);
const historyIcon = (<Icon name="history" style={{
    justifyContent: 'space-around',
    color: '#FFF'
}} size={23} />);
const profileIcon = (<Icon name="folder-shared" style={{
    justifyContent: 'space-around',
    color: '#FFF'
}} size={23} />);


const { width } = Dimensions.get('window');

export default class FinanceBar extends Component {

    constructor(props) {
        super(props);
    }

    // componentDidUpdate() {
    //     this.setState({
    //         user: this.props.user,
    //     })
    // }

    formatPrice(price) {
        return Number.parseFloat(price).toFixed(2);
    }

    render() {
        const { user } = this.props;
        const { wrapper, container, textStyle, scrollButtonWrapper, textFinance, titleStyle, left, right, scroll, slideButton } = styles;
        return (
            <View style={wrapper}>
                <View style={container}>
                    <View style={left}>
                        <TouchableOpacity onPress={() => this.props.navigation.navigate("AuthenticationScreen")}>
                            <Text style={titleStyle} >Welcome to GameXC</Text>
                            <Text style={textStyle} >Login or sign up</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    scrollButtonWrapper: {
        alignItems: 'center',
    },
    slideButton: {
        width: 45,
        height: 45,
        backgroundColor: "#57b9b9",
        borderRadius: 35,
        justifyContent: 'space-around',
        alignItems: 'center',
        margin: 8,
        marginBottom: 0,
    },
    wrapper: {
        flex: 0.2,
        shadowColor: '#2E272B',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.2,
        paddingTop: 0,
    },
    titleStyle: {
        fontSize: 20,
        margin: 10,
        marginBottom: 5,
        color: '#000000',
        fontWeight: 'bold'
    },
    textStyle: {
        fontSize: 15,
        marginLeft: 50,
        marginBottom: 10,
        color: '#59ABE3',
    },
    container: {
        flex: 1,
        flexDirection: 'row'
    },
    left: {
        flex: 1,
        backgroundColor: '#e6fff9',
        alignItems: 'center'
    },
    right: {
        flex: 1,
        backgroundColor: '#7BC8C8',
        justifyContent: 'space-around',
        alignItems: 'center',
    },
    scroll: {
        flex: 1,
    },
    textFinance: {
        color: '#FFF',
        fontSize: 12,
    }

});
