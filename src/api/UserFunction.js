import axios from 'axios';
import {AsyncStorage} from 'react-native';

const url = 'http://10.82.139.8:5000/';

export const login = user => {
  return axios
    .post(`${url}users/login`, {
      email: user.email,
      password: user.password,
    })
    .then(res => {
      if (res) {
        return res.data;
      }
    })
    .catch(err => {
      console.log('ERROR AT LOGIN_API ' + err);
    });
};

export const register = user => {
  return axios
    .post(`${url}users/register`, {
      email: user.email,
      password: user.password,
      username: user.username,
      name: user.name,
      role: user.role,
    })
    .then(res => {
      if (res) {
        return res.data;
      }
    })
    .catch(err => {
      console.log('ERROR AT REGISTER_API' + err);
    });
};

export const getUserData = async user => {
  let userData = '';
  try {
    userData = (await AsyncStorage.getItem('@user')) || '';
  } catch (error) {
    console.log('ERROR AT GETUSERDATA: ' + error);
  }
  return userData;
};

export const saveUserData = async user => {
  try {
    console.log('setUserData: ' + user);
    await AsyncStorage.setItem('@user', user);
  } catch (error) {
    console.log('ERROR AT SAVEUSERDATA: ' + error);
  }
};

export const deleteUserData = async user => {
  try {
    await AsyncStorage.removeItem('@user');
  } catch (error) {
    console.log('ERROR AT REMOVEUSERDATA: ' + error);
  }
};
