const searchGame = (key) => {
    const url = `http://10.82.139.8/api/search.php?key=${key}`;
    return fetch(url)
    .then(res => res.json());
};

export default searchGame;
