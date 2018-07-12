import React, { Component } from 'react';
import { ScrollView, Text, StyleSheet, View } from 'react-native';
import Collection from './Collection';
import Category from './Category';
import FinanceBar from './FinanceBar';
import SearchBar from '../SearchBar';
import CategoryBar from './CategoryBar';


export default class HomeView extends Component {
    render() {

        const { wrapper } = styles;
        return (
            <ScrollView style={wrapper}>
                <Collection navigation={this.props.navigation} />
                <FinanceBar navigation={this.props.navigation} />
                <SearchBar navigation={this.props.navigation} />
                <CategoryBar navigation={this.props.navigation} />
                <Category navigation={this.props.navigation} />
                <Category navigation={this.props.navigation} />
            </ScrollView>

        );
    }
}

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
    }
})