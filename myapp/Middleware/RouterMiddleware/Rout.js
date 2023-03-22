const express = require('express');
const router = express.Router();
router.use(demo);
router.get('/', (req, res) => {
    console.log('get response')
    res.send('Welcome...!!!')
})
function demo (req, res, next) {
    console.log('router middleware is used here.');
    next();
}

module.exports=router