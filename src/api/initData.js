const initData = () => (
    fetch('http://192.168.0.100:27017/gamexc/')// eslint-disable-line
    .then(res => res.json())
);

export default initData;
