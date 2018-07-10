import React, { Component } from 'react';
import { Text, View, TouchableOpacity, StyleSheet, Dimensions, ScrollView, Image } from 'react-native';
import nekoparaItem from '../../../../media/gameImage/nekoparaItem.jpg';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';


const { height, width } = Dimensions.get('window');
export default class Profile extends Component {

    constructor(props) {
        super(props);
    }

    render() {

        const { listMenu, itemSlide, wrapper, textTitle, textLogin, iconUser } = styles;
        return (
            <ScrollView style={{ flex: 1 }}>
                <TouchableOpacity style={itemSlide}>
                    <View style={wrapper} >
                        <Icon name="wheelchair-accessibility" style={iconUser} size={60} />
                        <Text style={textTitle}>
                            Welcome to GamExc
                        </Text>
                        <Text style={textLogin}>Login or sign up</Text>
                    </View>
                </TouchableOpacity>
                <View style={listMenu}>

                </View>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    iconUser: {
        color: '#4DAF7C',
    },
    wrapper: {
        alignItems: 'center',
    },
    listMenu: {
        minHeight: height / 2,
        backgroundColor: 'yellow',
    },
    itemSlide: {
        flex: 1,
        width: undefined,
        height: undefined,
        minHeight: height / 3,
        backgroundColor: '#FFF',
        justifyContent: 'center',
    },
    textTitle: {
        fontSize: 25,
        fontWeight: 'bold',
        color: '#4DAF7C',
    },
    textLogin: {
        fontSize: 15,
        color: '#59ABE3',
    }
});
