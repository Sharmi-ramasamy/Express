const express = require('express');
const app =express();
app.enable('trust')
console.log(app.get('trust'))              // true