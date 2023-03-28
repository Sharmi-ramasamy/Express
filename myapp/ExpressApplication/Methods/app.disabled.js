const express = require('express');
const app = express();
console.log(app.disabled('trust'))                // disabled = true

app.enable('trust proxy')                     // true
 
console.log(app.disabled('trust proxy')) // false
 



// disable = false               // disabled = true
// enable = true                 // enabled = false