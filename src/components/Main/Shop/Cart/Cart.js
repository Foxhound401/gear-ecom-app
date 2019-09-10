import React, {Component} from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  StyleSheet,
  Image,
  Dimensions,
  ScrollView,
} from 'react-native';
import nekoparaItem from '../../../../media/gameImage/nekoparaItem.jpg';
import fallout4Item from '../../../../media/gameImage/fallout4Slider.png';
import {getUserData} from '../../../../api/UserFunction';

const {width, height} = Dimensions.get('window');
export default class Cart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cartItems: 0,
      gameTitle: 'Nekopara vol 1 Steam Key Global',
      price: '15.00',
      currency: 'USD',
      user: null,
    };
    this.onCheckout = this.onCheckout.bind(this);
    this.formatPrice = this.formatPrice.bind(this);
  }

  formatPrice(price) {
    return Number.parseFloat(price).toFixed(2);
  }

  getTotal() {}

  onCheckout() {
    getUserData().then(res => {
      console.log('userData in cart: ' + res);
    });
  }

  render() {
    const {
      containerEmpty,
      containerItems,
      cartItem,
      imageStyle,
      gameTitle,
      textPrice,
      priceTitle,
      textCurrency,
      textGameTitle,
      imageWrapper,
      checkoutButton,
      checkoutTitle,
    } = styles;
    const {user} = this.props;

    return this.state.cartItems === 0 ? (
      <View style={containerEmpty}>
        <Text style={{color: '#2C3E50', fontSize: 20}}>Cart is empty</Text>
        <TouchableOpacity
          style={{
            width: 110,
            height: 40,
            backgroundColor: '#00B16A',
            justifyContent: 'center',
            alignItems: 'center',
            margin: 20,
            marginBottom: 10,
            borderRadius: 5,
          }}
          onPress={() => this.props.navigation.navigate('HomeView')}>
          <Text style={{color: '#FFF', fontSize: 15}}>Shop now</Text>
        </TouchableOpacity>
      </View>
    ) : (
      <View style={{flex: 1}}>
        <ScrollView style={{flex: 1}}>
          <View style={containerItems}>
            <TouchableOpacity
              style={cartItem}
              onPress={() =>
                this.props.navigation.navigate('DetailView', {name: 'phuc'})
              }>
              <View style={imageWrapper}>
                <Image source={nekoparaItem} style={imageStyle} />
              </View>
              <View style={{flex: 1}}>
                <Text style={textGameTitle}>{this.state.gameTitle}</Text>
                <View style={priceTitle}>
                  <Text style={textPrice}>{this.state.price}</Text>
                  <Text style={textCurrency}>{this.state.currency}</Text>
                </View>
              </View>
            </TouchableOpacity>
          </View>
          <View style={containerItems}>
            <TouchableOpacity style={cartItem}>
              <View style={imageWrapper}>
                <Image source={fallout4Item} style={imageStyle} />
              </View>
              <View style={{flex: 1}}>
                <Text style={textGameTitle}>{this.state.gameTitle}</Text>
                <View style={priceTitle}>
                  <Text style={textPrice}>{this.state.price}</Text>
                  <Text style={textCurrency}>{this.state.currency}</Text>
                </View>
              </View>
            </TouchableOpacity>
          </View>
        </ScrollView>
        <TouchableOpacity style={checkoutButton} onPress={this.onCheckout}>
          <Text style={checkoutTitle}>TOTAL $ CHECKOUT NOW</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  checkoutButton: {
    height: 50,
    margin: 10,
    marginTop: 0,
    backgroundColor: '#2ABB9C',
    borderRadius: 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  checkoutTitle: {
    color: '#FFF',
    fontSize: 15,
    fontWeight: 'bold',
    fontFamily: 'Avenir',
  },
  gameTitle: {
    backgroundColor: 'blue',
  },
  priceTitle: {
    marginRight: 55,
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  textPrice: {
    fontSize: 20,
    color: '#E87E04',
  },
  textCurrency: {
    color: '#E87E04',
  },
  textGameTitle: {
    margin: 10,
    fontSize: 15,
  },
  containerEmpty: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 10,
    alignItems: 'center',
  },
  containerItems: {
    flex: 1,
  },
  cartItem: {
    flex: 0.45,
    flexDirection: 'row',
    backgroundColor: '#FFF',
    margin: 15,
    marginTop: 10,
  },
  imageStyle: {
    flex: 1,
    width: undefined,
    height: 100,
    minHeight: 100,
    minWidth: 80,
    resizeMode: 'stretch',
  },
  imageWrapper: {
    flex: 0.4,
    margin: 10,
    alignItems: 'center',
  },
});
