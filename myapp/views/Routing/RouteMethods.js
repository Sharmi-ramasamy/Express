// Route Methods

// const express = require('express');
// const app = express();

// const port = 5227;

 

// app.get('/about', (req, res) => {
//     res.send('about')
//   })

//   app.use(express.json());
 
//   // For parsing application/x-www-form-urlencoded
//   app.use(express.urlencoded({ extended: true }));
  
  
//   app.post('/profile', function (req, res) {
//       console.log(req.body);
//       res.send();
//   });

// app.post('/post', (req, res) => {
//     console.log('post method')
//    res.send('<p>delete request to the homepage</p>')
//  })

// app.get('/abc', (req,res) => { 
//     res.send("Get method is created..!!");
// })

// app.all('/secret', (req, res, next) => {
//     console.log('Accessing the secret section ...')
//     res.send('all method')
//     next() // pass control to the next handler
//   })  





// app.listen(port, ()=> {
//     console.log(`server is created: ${port}`)
// })



const express = require('express');
const app = express();
const PORT = 3000;
 
// app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static(__dirname))

app.get('/abc', (req,res) => { 
    res.sendFile(__dirname+'/index.html');
})

app.post('/signup',(req,res)=>{
    // res.send("yes");
    const data = req.body;
 
        console.log("Name: ", data.name);
       
    req.send(data.name)
})
 
// app.get('/signup', function (req, res) {
//     const data = req.body;
 
//     console.log("Name: ", data.name);
//     console.log("Age: ", data.age);
//     console.log("Gender: ", data.gender);
 
//     res.send();
// });
 
app.listen(PORT, function (err) {
    if (err) console.log(err);
    console.log("Server listening on PORT", PORT);
});