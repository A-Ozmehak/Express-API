const express = require('express');
const app = express();
const port = 3000;
const hostname = '127.0.0.1';

app.use(express.json());

app.use("/", (req, res, next) => {
    console.log('api visited')
    next()
})

app.use("/", express.static("public"))

app.get('/', (re, res) => {

})

app.post('/', (req, res) => {

})

app.put('/', (req, res) => {

})

app.delete('/', (req, res) => {

})






app.listen('/', (req, res) => {
    console.log(`Server is running on ${port}`)
})