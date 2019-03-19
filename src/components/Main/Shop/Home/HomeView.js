import React, { Component } from 'react';
import { ScrollView, Text, StyleSheet, View } from 'react-native';
import Collection from './Collection';
import Category from './Category';
import FinanceBar from './FinanceBar';
import SearchBar from '../SearchBar';
import CategoryBar from './CategoryBar';
import TopGame from './TopGame.js';


export default class HomeView extends Component {
    
    render() {
        const { navigation, categorys, drawers, topGames, steams, user } = this.props;
        const { wrapper } = styles;
        console.log('Homeview: ', user)
        return (
            <ScrollView style={wrapper}>
                <Collection navigation={navigation} drawers={drawers} />
                <FinanceBar navigation={navigation} user={user} />
                <SearchBar navigation={navigation} />
                <CategoryBar navigation={navigation} categorys={categorys} />
                <TopGame navigation={navigation} topGames={topGames} />
                <Category navigation={navigation} steams={steams} />
            </ScrollView>

        );
    }
}

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
    }
})