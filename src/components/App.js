import React, { Component } from 'react';
import { View } from 'react-native';
import { TabBar, RootStack } from './Route/Route';
import global from './global';
// eslint-disable-next-line
import { createStackNavigator, createDrawerNavigator, createBottomTabNavigator } from 'react-navigation';
import Main from './Main/Main';

// eslint-disable-next-line
export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: null
        };
        global.onSignIn = this.onSignIn.bind(this);
    }

    onSignIn(user) {
        this.setState({ user });
        console.log('user in app', user);
    }

    render() {
        const { user } = this.state;

        return (
            <TabBar user={user} />
        );
    }
}
