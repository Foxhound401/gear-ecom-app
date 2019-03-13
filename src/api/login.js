const login = (email, password) => (
    fetch('http://10.82.139.8:27017/gamexc/login.php',
        {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json'
            },
            body: JSON.stringify({ email, password })
        })
        .then(res => res.json())
);

module.exports = login;