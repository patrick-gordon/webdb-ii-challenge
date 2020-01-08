const express = require('express');
const db = require('../data/dbConfig');
const router = express.Router();

router.post('/', (req, res) => {
    //insert 
    const carsData = req.body;
    db('cars')
    .insert(carsData)
    .then(ids => {
        db('cars').where({ id: ids[0] })
        .then(newCarsEntry => {
            res.status(200).json(newCarsEntry)
        })
    })
    .catch(err => {
        console.log(err);
        res.status(500).json({ message: 'error posting'})
    })
})

router.get('/', (req,res) => {
    db('cars')
    .then(cars => {
        res.status(200).json(cars)
    })
    .catch(err => {
        console.log(err)
        res.status(500).json({ message: 'error getting cars'})
    })
})

module.exports = router;