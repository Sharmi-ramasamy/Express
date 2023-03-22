// html page- Demo.ejs  (template engine)
// this module is out of views folder whereas Demo.ejs is inside view

const express = require('express');
const app = express();
const path = require('path')
app.use(express.static(path.join(__dirname, 'public/images')))

app.set('view engine','ejs');

app.get('/',function(req,res){
    res.render('Demo');
})

app.listen(2030);
console.log('Server port 2030 created')