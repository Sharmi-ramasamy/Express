const express = require('express');
const app = express();
const port = 5227;
// app.use((req, res, next) => {
//     console.log(`date: ${Date.now()}`)
//     next();
// })
app.use(demo)
function demo (req, res, next) {
    console.log('Request Type:', req.method)           // get method
    // res.send('USER')
    next()
  }
app.get('/user/:id', (req,res) => {
    console.log('response executes after the middleware')
    res.send('Hloo')
})
app.listen(port, () => {
    console.log(`Server created: ${port}`)
})