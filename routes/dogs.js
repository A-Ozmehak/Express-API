const express = require("express");
const router = express.Router();
const { getDog, postDogWithId, getDogs, deleteDog, patchDogInfo } = require("../controllers/dogs");

router.get('/', getDogs);

router.post('/', postDogWithId);

router.get('/:id', getDog);

router.delete('/:id', deleteDog);

router.patch('/:id', patchDogInfo);

module.exports = router;