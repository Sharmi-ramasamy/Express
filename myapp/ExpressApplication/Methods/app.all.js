const express = require('express');
const app = express();
const port = 3003;

app.all('/', (req,res,next) => {
    res.send("All http methods are called here...!!")
    console.log("All http methods are called here...!!");
    next();
})

app.listen(port, (err) => { 
    if (err) {
    console.log('error occured')
    }
    else {
        console.log(`Server listening on the port ${port}`)
    }
})
