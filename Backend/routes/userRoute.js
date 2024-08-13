const express = require('express');
const router = express.Router();
const {register,login} = require('../controller/usercontroller');
console.log('User route loaded');
router.post('/register', register);
router.post('/login',login);
module.exports = router;
