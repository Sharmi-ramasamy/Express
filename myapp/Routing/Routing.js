const express = require('express');
const app = express();
const port = 2772;

app.get('/', (req,res) => {
    res.send('Home Page')
})
app.get('/user', (req, res) => {
    res.send('User Page')
})
app.get('/admin', (req,res) => {
    res.send('Admin Page')
})
app.get('/about', (req,res) => {
    res.send('About Page')
})
app.listen(port, () => {
    console.log(`server is created: ${port}`)
})
