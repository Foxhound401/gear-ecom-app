import React, { Component } from 'react';
import { View, Text, Image, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';
import nekopara from '../../../../media/gameImage/nekoparaSlider1.jpg';
import stardew from '../../../../media/gameImage/stardewValleySlider.jpg';
import fallout4 from '../../../../media/gameImage/fallout4Slider.png';
import Swiper from 'react-native-swiper';

const url = 'http://192.168.0.101:27017/gamexc/images/game/'
const { height } = Dimensions.get('window');

export default class Collection extends Component {
    render() {
        const { drawers } = this.props;
        const { wrapper, textStyle, imageStyle, row1 } = styles;
        return (
            <View style={{ height: height / 3 }}>
                <Swiper autoplay={true}>
                    {
                        drawers.map(e =>
                            (
                                <TouchableOpacity style={wrapper} onPress={() => console.log(e.id)} key={e.link} >
                                    <Image source={{ uri: `${url}${e.link}` }} style={imageStyle} />
                                </TouchableOpacity>
                            )
                        )
                    }
                </Swiper>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        backgroundColor: '#FFF',
        shadowColor: '#2E272B',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.2,
        paddingTop: 0,
    },
    textStyle: {
        fontSize: 20,
        color: '#AFAEAF'
    },
    imageStyle: {
        flex: 1,
        width: undefined,
        height: undefined,
        resizeMode: "stretch"
    }
});
