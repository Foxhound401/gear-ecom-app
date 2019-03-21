//const url = 'http://192.168.0.255:5000/gearecom/initProduct';
//const initProduct = () => {
//  fetch(`${url}`).then(res => {
//    return res.data;
//  });
//};
//
//export default initProduct;
import axios from "axios";
const url = "http://192.168.0.104:5000/";

export const initProduct = item => {
  return axios
    .get(`${url}gearecom/initProduct`)
    .then(res => {
      if (res) {
        console.log("datafromInit: " + res);
        return res.data;
      }
    })
    .catch(err => {
      console.log("ERROR AT GET CATEGORIES_API " + err);
    });
};

