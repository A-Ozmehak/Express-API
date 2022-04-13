const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = 2000;

const dogRoutes = require('./routes/dogs.js');

app.use(express.json());
app.use(bodyParser.json());

app.use('/dogs', dogRoutes);

app.use('/', (req, res, next) => {
    console.log('api visited')
    next()
})

app.listen(port, () => {
    console.log(`Server is running on ${port}`)
})

