var express = require('express');
var app =  express();

app.use('/listen', function(req, res, next) {
    console.log('Date:', Date.now());
    console.log('Response from application Middleware')
    res.send('Response from application Middleware')
    next();
})

app.get('/listens', (req,res) => {
res.send('Response Success...!!!')
console.log('Response Success...!!!')
})

app.listen(4040);
console.log('Sever 4040 created');