const {v4: uuidv4} = require("uuid");

let dogs = [
    {
        name: "Hebbe",
        age: 13,
        breed: "Cocker-Spaniel",
        color: "orange",
    }
]

//Gets all the dogs
exports.getDogs = (req, res) => {
    res.send(dogs)
}

//Posts a new dog with an autogenerated uuidv4 ID
exports.postDogWithId = (req, res) => {
    const dog = req.body;
    const dogId = uuidv4();
    const dogWithId = {...dog, id: dogId};

    dogs.push(dogWithId);

    res.status(201).send(`New dog: ${dog.name}`);
}

//Gets the dog with a specific ID
exports.getDog = (req, res) => {
    const { id } = req.params;
    const foundDog = dogs.find((dog) => dog.id === id);

    if (foundDog === undefined) {
        return res.status(404).send('Not found!')
    }
    if (foundDog) {
       return res.send(foundDog);
    }
}

//Deletes a dog with a specific ID
exports.deleteDog = (req, res) => {
    const { id } = req.params;

    const filterDogs = dogs.find((dogs) => dogs.id === id);

    if (!filterDogs) {
        res.status(404).send('Could not find that dog!');
    } else {
        dogs = dogs.filter(function (dogs) {
            return dogs.id !== id
        })
        res.send(`Dog with ${id} is deleted`);
    }
}

//Updates a specific info about the dog
exports.patchDogInfo = (req, res) => {
    const { id } = req.params;
    const { name, age, breed, color } = req.body;
    const dog = dogs.find((dog) => dog.id === id);

    if (dog === undefined) {
        return res.status(404).send('Could not find what your looking for!');
    }

    if (name) {
        dog.name = name;
    } else if (age) {
        dog.age = age;
    } else if (breed) {
        dog.breed = breed;
    } else if (color) {
        dog.color = color;
    }

    res.send(`Dogs with id ${id} has been changed`);
}