import axios from 'axios';
const url = 'http://10.82.139.8:5000/';

export const getProductByID = productID => {
  console.log('products for the axios: ' + productID);
  return axios
    .get(`${url}products/get-product-by-id/${productID}`)
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
