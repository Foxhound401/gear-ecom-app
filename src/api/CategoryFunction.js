import axios from 'axios';
const url = 'http://192.168.0.104:5000/';

export const getCategoryByID = categoryID => {
  console.log('category for the axios: ' + categoryID);
  return axios
    .get(`${url}categories/get-category-by-id/${categoryID}`)
    .then(res => {
      console.log('axios response: ' + res.data);
      if (res) {
        return res.data;
      }
    })
    .catch(err => {
      console.log('ERROR AT GET CATEGORIES_API ' + err);
    });
};
