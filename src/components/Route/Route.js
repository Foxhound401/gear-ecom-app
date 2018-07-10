import React, { Component } from 'react';
import { TouchableOpacity } from 'react-native';
import Authentication from '../Authentication/Authentication';
import ChangeInfor from '../ChangeInfo/ChangeInfo';
import Main from '../Main/Main';
import OrderHistory from '../OrderHistory/OrderHistory';
import Icon from 'react-native-vector-icons/FontAwesome';
import IcoIcon from 'react-native-vector-icons/Ionicons';

// eslint-disable-next-line
import { createStackNavigator, createDrawerNavigator, createBottomTabNavigator } from 'react-navigation';
import Home from '../Main/Shop/Home/Home';
import Search from '../Main/Shop/Search/Search';
import Wallet from '../Main/Shop/Wallet/Wallet';
import Cart from '../Main/Shop/Cart/Cart';
import Profile from '../Main/Shop/Profile/Profile';
import HomeView from '../Main/Shop/Home/HomeView';
import ListProduct from '../Main/Shop/ListProduct/ListProduct';


const homeIcon = (<Icon name='home' size={24} />);
const searchIcon = (<Icon name='search' size={24} />);
const profileIcon = (<Icon name='user' size={24} />);
const cartIcon = (<Icon name='shopping-cart' size={24} />);
const walletIcon = (<Icon name="credit-card" size={24} />);

export const RootStack = createStackNavigator(
    {
        main: {
            screen: Main,
        },
        authentication: Authentication,
        changeInfor: ChangeInfor,
        orderHistory: OrderHistory,
    },
    {
        initialRouteName: 'main',
        headerMode: 'none'

    }
);

export const HomeStack = createStackNavigator(
    {
        HomeView: {
            screen: HomeView,
        },
        ListProduct: {
            screen: ListProduct,
        },
    },
    {
        initialRouteName: 'HomeView',
        headerMode: 'none'
    }
)

export const TabBar = createBottomTabNavigator(
    {
        Home: {
            screen: Wallet,
            navigationOptions: {
                title: "Home",
                tabBarIcon: homeIcon
            }
        },
        Search: {
            screen: Search,
            navigationOptions: {
                title: "Search",
                tabBarIcon: searchIcon,
            },
        },
        Wallet: {
            screen: Wallet,
            navigationOptions: {
                title: "Wallet",
                tabBarIcon: walletIcon
            }
        },
        Cart: {
            screen: Cart,
            navigationOptions: {
                title: "Cart",
                tabBarIcon: cartIcon
            }
        },
        Profile: {
            screen: Profile,
            navigationOptions: {
                title: "Profile",
                tabBarIcon: profileIcon
            }
        },
    },
    {
        initialRouteName: 'Home',
    }
);

