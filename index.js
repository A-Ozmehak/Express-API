const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = 2000;
const hostname = '127.0.0.1';

const dogRoutes = require('./routes/dogs.js');

app.use(express.json());
app.use(bodyParser.json());

app.use('/dogs', dogRoutes);

app.use("/", (req, res, next) => {
    console.log('api visited')
    next()
})

app.use("/", express.static("public"))



app.get('/', (req, res) => {
    res.json(dogs)
})

app.post('/api/dogs', (req, res) => {
    console.log(req.body)
    dogs.push(req.body)
    res.status(201).send("new dog")
})

app.put('/api/dogs', (req, res) => {

})

app.delete('/api/dogs', (req, res) => {

})

app.listen(port, () => {
    console.log(`Server is running on ${port}`)
})

