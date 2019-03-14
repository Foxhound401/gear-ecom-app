const getListGame = (id) => {
    const url = `http://10.82.139.8:27017/gamexc/game_by_type.php?id=${id}`;
    return fetch(url)
        .then(res => res.json());
};

export default getListGame;