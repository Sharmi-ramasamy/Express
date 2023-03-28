const express = require('express');
const app = express();
console.log(app.enabled('trust'))            // false

app.enable('trust')                          // true
console.log(app.enabled('trust'))           // true