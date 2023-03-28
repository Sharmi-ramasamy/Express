const express = require('express');
const app = express();   // main app
const user = express();  // sub app
const port = 4040;

user.get('/', (request,response) => {
    console.log(user.mountpath);
    response.send('user homepage')
})

app.use('/user', user) // mounting the sub app

app.listen(port, (error) => {
    if (error) {
        console.log('error occured');
    }
        else {
        console.log(`Server listenig on port: ${port}`)
        }
})