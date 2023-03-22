const express = require('express');
const app = express();
const port = 2762;
const routers=require('./Rout')

app.use('/',routers)
app.listen(port, () => {
    console.log(`Port created: ${port}`)
})
