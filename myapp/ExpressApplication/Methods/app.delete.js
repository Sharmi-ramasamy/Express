const express = require('express');
const app =  express();
const port = 3030

app.delete('/', (req, res) => {
    // res.send('Http delete request is called...!!')
    console.log('Http delete request is called...!!')
})
app.listen(port,(error) => {
    if (error) {
        console.log('Error occured')
    }
    else {
        console.log(`Server listening to the port: ${port}`)
    }

}
);
