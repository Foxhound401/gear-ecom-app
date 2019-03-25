import axios from 'axios';
const url = 'http://192.168.0.104:5000/';

export const register = user => {
  return axios
    .post(`${url}users/register`, {
      email: user.email,
      password: user.password,
      username: user.username,
      name: user.name,
      role: user.role
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
