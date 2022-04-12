const express = require("express");
const router = express.Router();
const {v4: uuidv4} = require("uuid");


let dogs = [
    {
        name: "Hebbe",
        age: 13,
        breed: "Cocker-Spaniel",
        color: "orange",

    }
]

router.get('/', (req, res) => {
    res.send(dogs)
})

router.post('/', (req, res) => {
    const dog = req.body;
    const dogId = uuidv4();
    const dogWithId = {...dog, id: dogId};

    dogs.push(dogWithId);

    res.status(201).send(`New dog: ${dog.name}`);
})

router.get('/:id', (req, res) => {
    const {id} = req.params;
    const foundDog = dogs.find((dog) => dog.id === id);

    if (foundDog === undefined) {
        res.status(404).send('Not found!')
    }
    res.send(foundDog);
})

router.delete('/:id', (req, res) => {
    const {id} = req.params;
    dogs = dogs.filter((dogs) => dogs.id !== id);

    res.send(`Dog with ${id} is deleted`);
})

router.patch('/:id', (req, res) => {
    const {id} = req.params;
    const {name, age, breed, color} = req.body;
    const dog = dogs.find((dog) => dog.id === id);

    if (dog === undefined) {
        res.status(404).send('Could not find what your looking for!')
    }

    if (name) {
        dog.name = name;
    }

    else if (age) {
        dog.age = age;
    }

    else if (breed) {
        dog.breed = breed;
    }

    else if (color) {
        dog.color = color;
    }

        res.send(`Dogs with id ${id} has been changed`)

})

module.exports = router;