const { Router } = require('express');
const router = Router ();
const Dog = require('../models/Dog');
const faker = require('faker');

router.get('/api/dogs', async (req, res) => {
    const dogs = await Dog.find();
    res.json(dogs);
});

router.get('/api/dogs/create',async (req, res) => {
    for (let i = 0; i < 5; i++) {
        await Dog.create({
            name: faker.name.firstName(),
            description: faker.lorem.text(),
            avatar: faker.image.avatar()
        })
    }
    res.json('5 dogs Created');

});


module.exports = router;