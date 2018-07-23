const register = (email, password) => (
    fetch('http://10.82.139.8:27017/gamexc/register.php',
        {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json'
            },
            body: JSON.stringify({ email, password })
        })
        .then(res => res.text())
);

module.exports = register;


