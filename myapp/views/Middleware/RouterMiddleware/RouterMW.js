const express = require('express');
const app = express();
const port = 2762;
const router = express.Router();
router.use(demo)

function demo (req, res, next) {
    console.log('router middleware is used here.');
    next();
}
app.get('/', (req, res) => {
    res.send('Welcome...!!!')
})

app.listen(port, () => {
    console.log(`Port created: ${port}`)
})
