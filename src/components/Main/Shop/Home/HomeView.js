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
        const { navigation, categories, sliders, topProducts, camera, user } = this.props;
        const { wrapper } = styles;
        console.log('Homeview: ', user)
        return (
            <ScrollView style={wrapper}>
                <Collection navigation={navigation} sliders={sliders} />
                <FinanceBar navigation={navigation} user={user} />
                <SearchBar navigation={navigation} />
                <CategoryBar navigation={navigation} categories={categories} />
                <TopGame navigation={navigation} topProducts={topProducts} />
                <Category navigation={navigation} camera={camera} />
            </ScrollView>

        );
    }
}

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
    }
})
