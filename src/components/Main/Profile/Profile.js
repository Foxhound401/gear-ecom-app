import React, { Component } from 'react';
import { Text, View, TouchableOpacity, StyleSheet, Dimensions, ScrollView, Image } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import saveToken from '../../../api/saveToken';
import global from '../../global';


const { height, width } = Dimensions.get('window');
export default class Profile extends Component {

    constructor(props) {
        super(props);
        this.state = { user: null };
        // global.onSignIn = this.onSignIn.bind(this);
    }

    // onSignIn(user) {
    //     this.setState({ user })
    // }


    getUser() {
        console.log('user prop', this.props.user)
    }

    onSignOut() {
        console.log('goin')
        this.setState({ user: null });
        saveToken('');
        console.log('it work')
    }



    render() {
        const { user } = this.state;
        // console.log('Profile ', user);
        const { icon, container, listText, listMenu, itemSlide, wrapper, textTitle, textLogin, iconUser } = styles;
        return (
            <View style={{ flex: 1 }}>
                <ScrollView style={{ flex: 1 }}>
                    <TouchableOpacity style={itemSlide} onPress={() => this.props.navigation.navigate('AuthenticationScreen', { navigation: this.props.navigation, user: user })}>
                        <View style={wrapper}>
                            <MaterialIcon name="account-circle" style={iconUser} size={60} />
                            <Text style={textTitle}>
                                Welcome to GameXC
                        </Text>
                            <Text style={textLogin}>{user ? user.email : "Login or sign up"}</Text>
                        </View>
                    </TouchableOpacity>
                    <View style={listMenu}>
                        <TouchableOpacity style={container}>
                            <MaterialIcon name="assignment" size={28} style={icon} />
                            <Text style={listText}>My Orders</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={container} onPress={() => { this.onSignOut() }}>
                            <Icon name="md-log-out" size={28} style={icon} />
                            <Text style={listText}>Log out</Text>
                        </TouchableOpacity>
                    </View>
                </ScrollView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        minHeight: height / 9,
        alignItems: 'center',
    },
    listText: {
        fontWeight: '200',
        fontSize: 15,
        marginLeft: 15,
    },
    icon: {
        margin: 10,
    },
    iconUser: {
        alignItems: 'center',
    },
    wrapper: {
        alignItems: 'center',
    },
    listMenu: {
        backgroundColor: '#FFF',
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
    },
    textLogin: {
        fontSize: 15,
        color: '#59ABE3',
    }
});
