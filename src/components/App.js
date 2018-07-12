import React, { Component } from 'react';
import { View } from 'react-native';
import { TabBar, RootStack } from './Route/Route';
// eslint-disable-next-line
import { createStackNavigator, createDrawerNavigator, createBottomTabNavigator } from 'react-navigation';
import Main from './Main/Main';

// eslint-disable-next-line
export default class App extends Component {
    render() {
        return (
            <TabBar />
        );
    }
}
