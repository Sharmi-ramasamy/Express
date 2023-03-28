// const express = require('express');
// const app = express();
// const admin = express();
// const port = 5050;

// admin.get('/', (req, res) => {
//     console.log(admin.mountpath);
//     res.send('Admin Homepage');
// })

// const user = express();
// user.get('/user', (req,res) => {
//     console.log(user.mountpath);
//     res.send('User Page');
// })

// // admin.use('/user', user) 
// // app.use(['/admin', '/manager'], admin) 

// app.listen(port, ()=> {
//     console.log(`Server listening on the port: ${port}`)
// })


const express = require('express');
const app = express();
const PORT = 5000;
 
app.get('/',  (req, res) =>{
    console.log(app.mountpath)
    res.send("OK")
});
 
app.listen(PORT, function(err){
    if (err) console.log(err);
    console.log("Server listening on PORT", PORT);
});