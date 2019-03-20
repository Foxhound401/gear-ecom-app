const url = "http://localhost:5000/gearecom/initdata";
const initData = () => (
    fetch(url) // eslint-disable-line
    .then(res => res.json())
);

export default initData;
