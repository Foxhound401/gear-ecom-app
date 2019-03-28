import React, {Component} from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import nekopara from '../../../../media/gameImage/nekoparaSlider1.jpg';
import stardew from '../../../../media/gameImage/stardewValleySlider.jpg';
import fallout4 from '../../../../media/gameImage/fallout4Slider.png';
import Swiper from 'react-native-swiper';

const url = 'http://10.82.139.8:5000/images/';
const {height} = Dimensions.get('window');

export default class Collection extends Component {
  render() {
    let {sliders} = this.props;
    const {wrapper, textStyle, imageStyle, row1} = styles;
    return (
      <View style={{height: height / 3}}>
        <Swiper autoplay={true}>
          {sliders &&
            sliders.map(e => (
              <TouchableOpacity
                style={wrapper}
                onPress={() =>
                  this.props.navigation.navigate('DetailView', {details: e})
                }
                key={e.productID}>
                <Image
                  source={{uri: `${url}${e.productID}Slider.jpg`}}
                  style={imageStyle}
                />
              </TouchableOpacity>
            ))}
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
    shadowOffset: {width: 0, height: 3},
    shadowOpacity: 0.2,
    paddingTop: 0,
  },
  textStyle: {
    fontSize: 16,
    color: '#AFAEAF',
  },
  imageStyle: {
    flex: 1,
    width: undefined,
    height: undefined,
    resizeMode: 'stretch',
  },
});
