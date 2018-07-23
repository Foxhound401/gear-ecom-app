const getListGame = (id) => {
    const url = `http://192.168.0.100:27017/gamexc/game_by_type.php?id=${id}`;
    return fetch(url)
        .then(res => res.json());
};

export default getListGame;