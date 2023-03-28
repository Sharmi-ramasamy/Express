// const express = require('express');
// const app = express();
// const port = 4040;

// app.engine('html', require('ejs').renderFile);
// app.get('/', (req, res) => {
//     res.render('home.html')
// });
// app.listen(port, (err) => {
//     if(err) {
//         console.log(err)
//     }
//     else {
//         console.log(`Server listening on port: ${port}`)
//     }
// })



const express = require('express');
const app = express();
const PORT = 3030;
 
app.engine('html', require('ejs').renderFile);
 
app.get('/', function (req, res) {
    res.render("../views../home.html")
});
 
app.listen(PORT, function (err) {
    if (err) console.log(err);
    console.log("Server listening on PORT", PORT);
});