const express = require('express')
const app = express()
const port = 2752
app.get('/', (request, response) => {
    response.send ('Hello World...!!');
    
})
app.listen(port, () => {
    console.log(`Server is created on port: ${port}`)
})