const express = require('express');
const app = express();
const port = 2752;
app.use(print,myMiddleware,date);
app.get('/', middlewareLogin , (req, res) => {
    console.log('After middleware')
    console.log(`Welcome to ${req.user}`)
    res.send('Welcome')
})
function myMiddleware(req,res,next) {
    console.log("Middleware");
       next();
}
function date(req, res, next) {
    console.log('Date:',Date.now())
    next();
}
function print(req, res, next) {
    console.log('Sample One.....!!!!')
    next()
}

function middlewareLogin(req, res, next) {
    if(req.query.isLogin === 'true') {
        console.log('Login user');
        req.user="Aspire"
        next();
    }
    else {
        res.send("Access Denied...!!")
    }
}
app.listen(port, () => {
    console.log(`Server created: ${port}`)
})