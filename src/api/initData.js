const initData = () => (
    fetch('http://192.168.0.101:27017/gamexc/')// eslint-disable-line
    .then(res => res.json())
);

export default initData;
