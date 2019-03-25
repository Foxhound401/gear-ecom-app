import axios from 'axios';
const url = 'http://192.168.0.104:5000/';

export const login = user => {
  return axios
    .post(`${url}users/login`, {
      email: user.email,
      password: user.password,
    })
    .then(res => {
      localStorage.setItem('usertoken', res.data);
      if (res) {
        return res.data;
      }
    })
    .catch(err => {
      console.log('ERROR AT LOGIN_API' + err);
    });
};
