import React, {Component} from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Image,
  Dimensions,
  ImageBackground,
} from 'react-native';
import backGround from '../../../../media/temp/subway-lines.png';
import FontIcon from 'react-native-vector-icons/FontAwesome';
import Icon from 'react-native-vector-icons/Ionicons';
import global from '../../../global';
import {getProductByID} from '../../../../api/ProductFunction';

const globeIcon = <Icon name="md-globe" size={25} />;
const steamIcon = <FontIcon name="steam" size={25} />;
const digitalIcon = <Icon name="ios-key" size={25} />;
const url = 'http://10.82.139.8:5000/images/';

const {height, width} = Dimensions.get('window');
export default class ProductDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      details: [],
      firstItem: '',
    };
    this.formatPrice = this.formatPrice.bind(this);
  }

  componentWillMount() {
    const productID = this.props.navigation.getParam('details').productID;
    console.log('product id : ' + productID);
    getProductByID(productID)
      .then(res => {
        this.setState({
          details: res,
        });
      })
      .catch(err => console.log(err));
  }

  addItemToCart(item) {
    global.addProductToCart(item);
  }

  formatPrice(price) {
    return Number.parseFloat(price).toFixed(2);
  }

  render() {
    const {
      imageStyle,
      title,
      imageUpper,
      textFinance,
      scrollButtonWrapper,
      slideButton,
      priceTitle,
      textPrice,
      textCurrency,
      textDescription,
      titleDescription,
      wrapDescription,
      priceTitleUser,
      containerUser,
      textPriceUser,
      textCurrencyUser,
    } = styles;
    const {navigation} = this.props;
    const {details, firstItem} = this.state;
    const productDetails = navigation.getParam('details');

    return (
      <View style={{flex: 1}}>
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <ImageBackground source={backGround} style={imageStyle}>
            <Image
              source={{uri: `${url}${productDetails.productID}.jpg`}}
              style={imageUpper}
            />
          </ImageBackground>
        </View>
        <ScrollView style={{flex: 1, marginTop: 0, backgroundColor: '#FFF'}}>
          <View
            style={{
              flex: 1,
              marginBottom: 15,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text style={title}>{productDetails.name}</Text>
            <View
              style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'row',
              }}>
              <TouchableOpacity style={scrollButtonWrapper}>
                <View style={slideButton}>{steamIcon}</View>
                <Text style={textFinance}>Steam</Text>
              </TouchableOpacity>
              <TouchableOpacity style={scrollButtonWrapper}>
                <View style={slideButton}>{globeIcon}</View>
                <Text style={textFinance}>Key Global</Text>
              </TouchableOpacity>
              <TouchableOpacity style={scrollButtonWrapper}>
                <View style={slideButton}>{digitalIcon}</View>
                <Text style={textFinance}>Digital Key</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={{flex: 1, borderTopWidth: 0.5, borderColor: '#EEEEEE'}}>
            <View
              style={{
                flex: 1,
                flexDirection: 'row',
                width: undefined,
                height: undefined,
                minHeight: 50,
                minWidth: width,
              }}>
              <Text style={{fontSize: 25, color: '#E87E04'}} />
            </View>
            <View style={priceTitle}>
              {details.length > 0 ? (
                <Text style={textPrice}>
                  {this.formatPrice(details[0].price)}
                </Text>
              ) : (
                <Text style={textPrice}>30.00</Text>
              )}
              <Text style={textCurrency}>USD</Text>
            </View>
          </View>
          <View>
            <Text style={titleDescription}>Product description</Text>
            <View style={wrapDescription}>
              {details.length > 0 ? (
                <Text style={textDescription}>{details[0].ProductName}</Text>
              ) : (
                <Text style={textDescription}>
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                  Aenean commodo ligula eget dolor. Aenean massa. Cum sociis
                  natoque penatibus et magnis dis parturient montes, nascetur
                  ridiculus mus. Donec quam felis, ultricies nec, pellentesque
                  eu, pretium quis, sem. Nulla consequat massa quis enim. Donec
                  pede justo, fringilla vel, aliquet nec, vulputate eget, arcu.
                </Text>
              )}
            </View>
          </View>
          <View
            style={{
              width: width,
              height: height / 7,
              backgroundColor: '#DADFE1',
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <FontIcon
              name="exclamation-circle"
              size={30}
              style={{paddingLeft: 20}}
            />
            <Text style={{fontSize: 18, paddingLeft: 15}}>
              {details.length > 0
                ? `${details.length} offers available`
                : 'No offer available'}
            </Text>
          </View>

          {details.length > 0 ? (
            details.map(e => (
              <View style={containerUser} key={e.productID}>
                <View
                  style={{
                    flex: 1,
                    justifyContent: 'flex-end',
                    alignItems: 'flex-end',
                  }}>
                  <TouchableOpacity
                    style={{
                      width: 90,
                      height: 30,
                      justifyContent: 'flex-end',
                      backgroundColor: '#1BBC9B',
                      margin: 20,
                      marginBottom: 10,
                      alignItems: 'center',
                      justifyContent: 'center',
                      borderRadius: 2,
                    }}
                    onPress={() => {
                      this.props.navigation.navigate('Cart', {cartItem: e});
                    }}>
                    <Text style={{color: '#FFF'}}>Add to cart</Text>
                  </TouchableOpacity>
                </View>
              </View>
            ))
          ) : (
            <View
              style={{
                height: height / 6,
                width: width,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Text> No user selling this product yet </Text>
            </View>
          )}
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  priceTitleUser: {
    flexDirection: 'row',
    paddingLeft: 10,
    paddingTop: 5,
  },
  textPriceUser: {
    fontSize: 18,
    color: '#E87E04',
    paddingRight: 2,
  },
  textCurrencyUser: {
    fontSize: 13,
    color: '#E87E04',
  },
  containerUser: {
    flex: 1,
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderColor: '#ECF0F1',
  },
  wrapDescription: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  textDescription: {
    padding: 20,
    paddingTop: 0,
  },
  titleDescription: {
    fontSize: 15,
    padding: 5,
    color: '#BDC3C7',
  },
  textFinance: {
    fontSize: 12,
  },
  scrollButtonWrapper: {
    alignItems: 'center',
    marginTop: 0,
    margin: 10,
    marginBottom: 5,
  },
  slideButton: {
    width: 45,
    height: 45,
    borderRadius: 35,
    justifyContent: 'space-around',
    alignItems: 'center',
    margin: 8,
    marginBottom: 0,
  },
  imageStyle: {
    flex: 1,
    width: width,
    height: height / 3,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageUpper: {
    flex: 1,
    width: undefined,
    height: height / 3,
    minWidth: width / 2,
    resizeMode: 'stretch',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    fontFamily: 'Helvetica-Light',
    fontWeight: 'bold',
    alignItems: 'center',
    margin: 20,
    marginTop: 18,
    marginBottom: 0,
  },
  priceTitle: {
    flex: 0.2,
    flexDirection: 'row',
    padding: 15,
    paddingLeft: 25,
    paddingTop: 0,
  },
  textPrice: {
    fontSize: 35,
    color: '#E87E04',
    paddingRight: 2,
    paddingTop: 0,
  },
  textCurrency: {
    fontSize: 15,
    color: '#E87E04',
  },
});
