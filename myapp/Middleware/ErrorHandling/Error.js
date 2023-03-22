const express = require('express');
const app = express();
const port = 4500;
const fs = require('fs')
 

app.get('/', (req, res, next) => {
    fs.readFile('file.txtgbn', 'utf-8', (err, data) => {
      if (err) {
        next(err) // Pass errors to Express.
        console.log('error occured')
      } else {
        // res.send(data)
        console.log('data fetched', data)
      }
    })
})

app.listen(port, () => {
    console.log(`server created on port:${port}`)
  })

  

