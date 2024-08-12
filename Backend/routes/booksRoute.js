const express = require('express');
const router = express.Router();
const showBooks = require('../controller/showBooks');
console.log('book router : ');

router.get('/',showBooks);
router.get('/',(req,res)=>{
    res.send('hari bol///');
})
module.exports = router