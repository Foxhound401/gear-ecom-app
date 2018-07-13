import React, { Component } from 'react';
import global from '../../../global';
import {
    View, Text, TouchableOpacity, Image, Dimensions, TextInput, StyleSheet
} from 'react-native';
import icSearch from '../../../../media/appIcon/search0.png'

export default class Search extends Component {
    
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
        margin: 15,
        borderRadius: 3,
        paddingLeft: 15
    },
    textInput: {
        height: 23,
        backgroundColor: '#FFF',
        paddingLeft: 10,
        paddingVertical: 0,
        justifyContent: 'space-around',
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
