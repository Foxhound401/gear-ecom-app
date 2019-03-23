import React, {Component} from 'react';
import {Text, View, TouchableOpacity, StyleSheet} from 'react-native';
import {TabBar} from '../../Route/Route';
import HomeView from './Home/HomeView';
import {
  initProduct,
  initCategory,
  initSlider,
  initCamera,
} from '../../../api/initData';
import global from '../../global';

export default class Shop extends Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: [],
      sliders: [],
      topProducts: [],
      camera: [],
      user: null,
    };
    global.onSignIn = this.onSignIn.bind(this);
    this.initProductFromDB = this.initProductFromDB.bind(this);
    this.initCategoryFromDB = this.initCategoryFromDB.bind(this);
    this.initSliderFromDB = this.initSliderFromDB.bind(this);
    this.initCameraFromDB = this.initCameraFromDB.bind(this);
  }

  onSignIn(user) {
    this.setState({user});
  }

  initCategoryFromDB() {
    initCategory().then(res => {
      if (res) {
        console.log(JSON.stringify(res));
        this.setState({categories: res});
      }
    });
  }

  initProductFromDB() {
    initProduct().then(res => {
      if (res) {
        this.setState({topProducts: res});
      }
    });
  }

  initSliderFromDB() {
    initSlider().then(res => {
      if (res) {
        this.setState({sliders: res});
      }
    });
  }

  initCameraFromDB() {
    initCamera().then(res => {
      if (res) {
        this.setState({camera: res});
      }
    });
  }

  componentDidMount() {
    this.initSliderFromDB();
    this.initProductFromDB();
    this.initCategoryFromDB();
    this.initCameraFromDB();
  }

  render() {
    const {navigation} = this.props;
    let {categories, sliders, topProducts, camera, user} = this.state;

    return (
      <View style={{flex: 1}}>
        <HomeView
          navigation={navigation}
          categories={categories}
          sliders={sliders}
          topProducts={topProducts}
          camera={camera}
          user={user}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 10,
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10,
  },
});
