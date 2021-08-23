const express = require('express');
const router = express.Router();

const users = require('../controllers/users-controllers');

router.get('/', users.getUsers);

router.post('/login', users.logIn);

router.post('/signup', users.signUp);


module.exports = router;