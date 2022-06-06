const { Router } = require('express');
const { cats } = require('../../data/cats')

module.exports = Router()
    .get('/:id', (req, res) => {
        const id = req.params.id;
        const findCat = cats.find(cat => cat.id === id);
        res.json(findCat);
    })
    .get('/', (req, res) => {
        res.json(cats);
    });
