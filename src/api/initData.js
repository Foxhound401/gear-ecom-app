const initData = () => (
    fetch('http://10.82.139.8:27017/gamexc/')// eslint-disable-line
    .then(res => res.json())
);

export default initData;
