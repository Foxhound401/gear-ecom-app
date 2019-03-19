import React, { Component } from 'react';
import Authentication from '../Authentication/Authentication';
import ChangeInfor from '../ChangeInfo/ChangeInfo';
import Main from '../Main/Main';
import OrderHistory from '../OrderHistory/OrderHistory';
import Icon from 'react-native-vector-icons/FontAwesome';
import IcoIcon from 'react-native-vector-icons/Ionicons';

// eslint-disable-next-line
import { createStackNavigator, createSwitchNavigator, createBottomTabNavigator } from 'react-navigation';
import Search from '../Main/Shop/Search/Search';
import Wallet from '../Main/Shop/Wallet/Wallet';
import Cart from '../Main/Shop/Cart/Cart';
import Profile from '../Main/Profile/Profile';
import HomeView from '../Main/Shop/Home/HomeView';
import ListProduct from '../Main/Shop/ListProduct/ListProduct';
import Login from '../Authentication/Login';
import Signup from '../Authentication/Signup';
import ProductDetails from '../Main/Shop/ProductDetail/ProductDetails';
import Shop from '../Main/Shop/Shop';


const homeIcon = (<Icon name='home' size={24} />);
const searchIcon = (<Icon name='search' size={24} />);
const profileIcon = (<Icon name='user' size={24} />);
const cartIcon = (<Icon name='shopping-cart' size={24} />);
const walletIcon = (<Icon name="credit-card" size={24} />);


export const AuthenticationStack = createSwitchNavigator(
    {
        AuthenticationScreen: {
            screen: Authentication,
        },
    },
    {
        initialRouteName: 'AuthenticationScreen',
        headerMode: 'screen',
    }
);

export const ProfileStack = createStackNavigator(
    {

        Profile: {
            screen: Profile,
            navigationOptions: { header: null },
        },
        AuthenticationStack: { screen: AuthenticationStack }
    },
    {
        initialRouteName: 'Profile',
    }
);

export const HomeStack = createStackNavigator(
    {
        HomeView: {
            screen: Shop,
            navigationOptions: {
                header: null,
            }
        },
        ListView: {
            screen: ListProduct,
        },
        DetailView: {
            screen: ProductDetails,
        },
    },
    {
        initialRouteName: 'HomeView',
        headerMode: 'none',
    }
);

export const TabBar = createBottomTabNavigator(
    {
        Home: {
            screen: HomeStack,
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
        Cart: {
            screen: Cart,
            navigationOptions: {
                title: "Cart",
                tabBarIcon: cartIcon
            }
        },
        Profile: {
            screen: ProfileStack,
            navigationOptions: {
                title: "Profile",
                tabBarIcon: profileIcon,
                headerMode: 'screen'
            }
        },
    },
    {
        initialRouteName: 'Home',
        headerMode: 'none'
    }
);



