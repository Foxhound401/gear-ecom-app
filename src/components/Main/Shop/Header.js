import React, { Component } from 'react';
import global from '../../global';
import {
    View, Text, TouchableOpacity, Image, Dimensions, TextInput, StyleSheet
} from 'react-native';
import icSearch from '../../../media/appIcon/search0.png'

export default class Header extends Component {
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
            <View style={wrapper}>
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
                        onFocus={(arrProduct) => global.gotoSearch()}
                        onSubmitEditing={this.onSearch.bind(this)}
                    />
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    wrapper: {
        flex: 0.05,
        backgroundColor: '#7BC8C8',
        padding: 5,
        justifyContent: 'space-around'
    },
    row1: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: '#FFF'
    },
    textInput: {
        height: 23,
        backgroundColor: '#FFF',
        paddingLeft: 10,
        paddingVertical: 0,
        flex: 1
    },
    titleStyle: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    titleText: {
        color: '#FFF',
        fontFamily: 'Avenir',
        fontSize: 20,
    },
    iconStyle: { width: 25, height: 25 }
});