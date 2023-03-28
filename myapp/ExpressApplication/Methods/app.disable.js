const express = require('express');
const app = express();
app.disable('trust');                            // disable - false 
console.log(app.get('trust'))

// disabled - true


