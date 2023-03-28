const express = require('express');
const app = express();
const router = app.router;

router.get ('/', (req,res) => {
    res.send('Router Property...!!')
})

app.listen(2020);