const gameDetail = (id) => (
    fetch('http://10.82.139.8:27017/gamexc/game_detail.php',
        {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json'
            },
            body: JSON.stringify({ id })
        })
        .then(res => {
            res.json();
        })
);

module.exports = gameDetail;