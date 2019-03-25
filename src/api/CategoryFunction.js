export const initCamera = item => {
  return axios
    .get(`${url}gearecom/initCamera`, item.idcategory)
    .then(res => {
      if (res) {
        return res.data;
      }
    })
    .catch(err => {
      console.log('ERROR AT GET CATEGORIES_API ' + err);
    });
};
