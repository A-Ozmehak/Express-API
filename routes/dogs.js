const express = require("express");
const router = express.Router();
const { v4: uuidv4 } = require("uuid");


const dogs = [
    {
        name: "Hebbe",
        age: 13,
        breed: "Cocker-Spaniel",
        color: "orange",

    }, {
        name: "Zaqi",
        age: 3,
        breed: "Amstaff",
        color: "striped",

    }
]

router.get('/', (req, res) => {
    res.send(dogs)
})

router.post('/', (req, res) => {
    const dog = req.body;
    const dogId = uuidv4();
    const dogWithId = { ...dog, id: dogId };

    dogs.push(dogWithId);

    res.send(`New dog: ${dog.name}`);

})

router.get('/:id', (req, res) => {
    const { id } = req.params;
    const foundDog = dogs.find((dog) => dog.id === id);
    res.send(foundDog);
})

module.exports = router;