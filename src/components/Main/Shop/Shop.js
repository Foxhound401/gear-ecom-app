import React, { Component } from 'react';
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native';
import { TabBar } from '../../Route/Route';
import HomeView from './Home/HomeView';
import initData from '../../../api/initData';
import global from '../../global';

export default class Shop extends Component {

    constructor(props) {
        super(props);
        this.state = {
            categorys: [],
            drawers: [],
            topGames: [],
            steams: [],
            user: null
        };
        global.onSignIn = this.onSignIn.bind(this);
    }

    onSignIn(user) {
        this.setState({ user });
        console.log('user in shop', user);
    }


    componentDidMount() {
        initData()
            .then((responseJson) => {
                const { category, drawer, item, steam } = responseJson;
                this.setState({
                    categorys: category,
                    drawers: drawer,
                    topGames: item,
                    steams: steam
                })
            })
            .catch((error) => {
                console.log(error);
            });
    }

    render() {

        const { navigation } = this.props;
        const { categorys, drawers, topGames, steams, user } = this.state;
        console.log('shop ', user);

        return (
            <View style={{ flex: 1 }}>
                <HomeView navigation={navigation} categorys={categorys} drawers={drawers} topGames={topGames} steams={steams} user={user} />
            </View>

        );
    }
}

const styles = StyleSheet.create({
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
});
