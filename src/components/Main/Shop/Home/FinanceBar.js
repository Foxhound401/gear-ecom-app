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
    render() {
        const { wrapper, container, textStyle, scrollButtonWrapper, textFinance, titleStyle, left, right, scroll, slideButton } = styles;
        return (
            <View style={wrapper}>
                <View style={container}>
                    <View style={left}>
                        <TouchableOpacity onPress={() => this.props.navigation.navigate("AuthenticationScreen")}>
                            <Text style={titleStyle} >Login to see balance</Text>
                            <Text style={textStyle} >0.00 EUR</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={right} >
                        <ScrollView style={scroll} horizontal={true} showsHorizontalScrollIndicator={false}>
                            <TouchableOpacity style={scrollButtonWrapper} onPress={() => this.props.navigation.navigate("Wallet")}>
                                <View style={slideButton}>
                                    {addIcon}
                                </View>
                                <Text style={textFinance}>
                                    Add fund
                                </Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={scrollButtonWrapper}>
                                <View style={slideButton}>
                                    {historyIcon}
                                </View>
                                <Text style={textFinance}>
                                    History
                                </Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={scrollButtonWrapper} onPress={() => this.props.navigation.navigate("Profile")} >
                                <View style={slideButton}>
                                    {profileIcon}
                                </View>
                                <Text style={textFinance}>
                                    Profile
                                </Text>
                            </TouchableOpacity>
                        </ScrollView>
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
        fontSize: 16,
        margin: 10,
        marginBottom: 5,
        color: '#FFF',
    },
    textStyle: {
        fontSize: 20,
        margin: 10,
        color: '#46a8a8',
        marginTop: 0,
    },
    container: {
        flex: 1,
        flexDirection: 'row'
    },
    left: {
        flex: 1,
        backgroundColor: '#7BC8C8'
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
