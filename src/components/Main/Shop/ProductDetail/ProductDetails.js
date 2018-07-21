import React, { Component } from 'react';
import { Text, View, TouchableOpacity, StyleSheet, ScrollView, Image, Dimensions, ImageBackground } from 'react-native';
import backGround from '../../../../media/temp/subway-lines.png';
import nekoparaImage from '../../../../media/gameImage/fallout4Item.jpg'
import FontIcon from 'react-native-vector-icons/FontAwesome';
import Icon from 'react-native-vector-icons/Ionicons';

const globeIcon = (<Icon name="md-globe" size={25} />);
const steamIcon = (<FontIcon name="steam" size={25} />);
const digitalIcon = (<Icon name="ios-key" size={25} />);

const { height, width } = Dimensions.get('window');
export default class ProductDetails extends Component {

    constructor(props) {
        super(props);
    }

    componentWillMount() {

    }

    render() {
        const { imageStyle, title, imageUpper, textFinance, scrollButtonWrapper, slideButton, priceTitle, textPrice, textCurrency, textDescription, titleDescription, wrapDescription } = styles;
        const { navigation } = this.props;

        return (
            <View style={{ flex: 1 }}>
                <View style={{
                    flex: 1, justifyContent: 'center',
                    alignItems: 'center'
                }}>
                    <ImageBackground source={backGround} style={imageStyle}>
                        <Image source={nekoparaImage} style={imageUpper} />
                    </ImageBackground>
                </View>
                <ScrollView style={{ flex: 1, marginTop: 0, backgroundColor: '#FFF' }}>
                    <View style={{ flex: 1, marginBottom: 15, justifyContent: 'center', alignItems: 'center' }}>
                        <Text style={title}>
                            Fallout 4 Steam key GLOBAL
                        </Text>
                        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', flexDirection: 'row' }}>
                            <TouchableOpacity style={scrollButtonWrapper}>
                                <View style={slideButton}>
                                    {steamIcon}
                                </View>
                                <Text style={textFinance}>
                                    Steam
                                </Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={scrollButtonWrapper}>
                                <View style={slideButton}>
                                    {globeIcon}
                                </View>
                                <Text style={textFinance}>
                                    Key Global
                                </Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={scrollButtonWrapper}>
                                <View style={slideButton}>
                                    {digitalIcon}
                                </View>
                                <Text style={textFinance}>
                                    Digital Key
                                </Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={{ flex: 1, borderTopWidth: 0.5, borderColor: '#EEEEEE' }}>
                        <View style={{ flex: 1, flexDirection: 'row', width: undefined, height: undefined, minHeight: 50, minWidth: width }}>
                            <FontIcon name='user-circle' size={35} style={{ margin: 20, marginLeft: 25 }} />
                            <View style={{ flex: 1, justifyContent: 'center' }}>
                                <Text style={{ fontSize: 18, color: '#22A7F0' }}>Usersome-thing</Text>
                                <Text style={{ fontSize: 12 }}>In stock: 1000</Text>
                            </View>
                            <Text style={{ fontSize: 25, color: '#E87E04' }}></Text>
                        </View>
                        <View style={priceTitle}>
                            <Text style={textPrice}>00.00</Text>
                            <Text style={textCurrency}>USD</Text>
                        </View>
                    </View>
                    <View>
                        <Text style={titleDescription} >Product description</Text>
                        <View style={wrapDescription} >
                            <Text style={textDescription} >
                                
                            </Text>
                        </View>
                    </View>
                </ScrollView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    wrapDescription: {

    },
    textDescription: {

    },
    titleDescription: {

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
        color: "#E87E04",
        paddingRight: 2,
        paddingTop: 0,
    },
    textCurrency: {
        fontSize: 15,
        color: "#E87E04",
    }
})
