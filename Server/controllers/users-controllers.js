const HttpError = require("../models/http-error");

const users = [
    {
        id: 'u1',
        userName: 'mounir',
        email: 'mounir@gmail.com',
        password: 'monir123'
    }
];

const getUsers = (req, res, next) => {
    res.json({ users });
}

const signUp = (req, res, next) => {
    const { id, userName, email, password } = req.body;
    const verifUser = users.find(u => u.email === email);
    if (verifUser) {
        throw new HttpError('used email', 401);
    }
    const newUser = {
        id,
        userName,
        email,
        password
    }

    users.push(newUser);
    res.json({ message: 'signed up' });
}

const logIn = (req, res, next) => {
    const { email, password } = req.body;
    const userVerif = users.find(u => u.email === email);
    if (!userVerif || userVerif.password !== password) {
        throw new HttpError('could not verify user, or password is wrong', 401);
    }
    res.json({ message: 'loged in' })
}

exports.getUsers = getUsers;
exports.signUp = signUp;
exports.logIn = logIn;