const express = require('express');
const app = express();
const port = 3030;
app.use(sample1)

app.get('/user', (req, res) => {
        console.log('get request')
        res.send("Welcome")
    })
function sample1 (req, res, next) {
    console.log('sample 1 Request URL:', req.originalUrl)
    next()

  function sample2(req, res, next) {
    console.log('Request Type:', req.method)
    next()
  }
  return sample2
}
app.listen(port, () => {
    console.log(`Port created: ${port}`)
})