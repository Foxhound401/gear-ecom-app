import React, { Component } from 'react';
import Authentication from './Authentication/Authentication';
import ChangeInfor from './ChangeInfo/ChangeInfo';
import Main from './Main/Main';
import OrderHistory from './OrderHistory/OrderHistory';
// eslint-disable-next-line
import { createStackNavigator } from 'react-navigation';

const RootStack = createStackNavigator(
    {
        main: { screen: Main },
        authentication: Authentication,
        changeInfor: ChangeInfor,
        orderHistory: OrderHistory,
    },
    {
        initialRouteName: 'main',
    },
);

export default class App extends Component {
    render() {
        return (
            <RootStack />
        );
    }
}
