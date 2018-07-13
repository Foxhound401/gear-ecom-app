import React, { Component } from 'react';
import global from '../../global';
import {
    View, Text, TouchableOpacity, Image, Dimensions, TextInput, StyleSheet
} from 'react-native';
import icSearch from '../../../media/appIcon/search0.png'

const { height } = Dimensions.get('window');

export default class SearchBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            txtSearch: ''
        };
    }

    onSearch() {
        const { txtSearch } = this.state;
        this.setState({ txtSearch: '' });
        console.log("search is working");
    }

    render() {
        const { wrapper, row1, textInput, titleStyle, iconStyle, titleText } = styles;
        return (
            <View style={row1}>
                <TouchableOpacity>
                    <Image style={iconStyle} source={icSearch} />
                </TouchableOpacity>
                <TextInput
                    style={textInput}
                    placeholder="What do you want to buy?"
                    underlineColorAndroid="transparent"
                    value={this.state.txtSearch}
                    onChangeText={(text) => {
                        this.setState({
                            txtSearch: text
                        })
                    }}
                    onFocus={() => {this.props.navigation.navigate('Search')}}
                    onSubmitEditing={this.onSearch.bind(this)}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    wrapper: {
        flex: 0.1,
        backgroundColor: '#7BC8C8',
        padding: 5,
        paddingBottom: 0
    },
    row1: {
        flex: 0.1,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor: '#FFF',
        shadowColor: '#2E272B',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.2,
        margin: 15,
        borderRadius: 3,
        paddingLeft: 15,
        minHeight: height/12,
    },
    textInput: {
        height: 23,
        backgroundColor: '#FFF',
        paddingLeft: 10,
        paddingVertical: 0,
        justifyContent: 'space-around',
        flex: 1,
        shadowColor: '#2E272B',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.2,
    },
    titleStyle: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    titleText: {
        color: '#FFF',
        fontFamily: 'Avenir',
        fontSize: 20,
        shadowColor: '#2E272B',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.2,
    },
    iconStyle: { width: 25, height: 25 }
});