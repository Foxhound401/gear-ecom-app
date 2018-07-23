import React, { Component } from 'react';
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native';
import { TabBar } from '../../Route/Route';
import HomeView from './Home/HomeView';
import global from '../../global';
import initData from '../../../api/initData';

export default class Shop extends Component {

    constructor(props) {
        super(props);
        this.state = {
            categorys: [],
            drawers: [],
            topGames: [],
            steams: [],
        }
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
        const { categorys, drawers, topGames, steams } = this.state;

        return (
            <View style={{ flex: 1 }}>
                <HomeView navigation={navigation} categorys={categorys} drawers={drawers} topGames={topGames} steams={steams} />
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
