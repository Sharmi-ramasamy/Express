// html page - index.ejs (template engine)
// this module index.js is outside the views folder whereas the index.ejs is inside the views folder

const express=require('express');

const app=express();

app.set("view engine","ejs");

app.get('/',function(req,res){
    res.render('index');
})

app.listen(2700);