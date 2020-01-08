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

router.put('/:id', (req, res) => {
    const { id } = req.params
    const changes = req.body

    db('cars')
    .where({ id })
    .update(changes)
    .then(count => {
        res.status(200).json({ updated: count})
    })
    .catch(err => {
        console.log(err)
        res.status(500).json({error: 'error updating'})
    })
})

router.delete('/:id', (req, res) => {
    const {id} = req.params

    db('cars')
    .where({ id })
    .del()
    .then(count => {
        res.status(200).json({deleted: count})
    })
    .catch(err => {
        console.log(err);
        res.status(500).json({error: 'error deleting'})
    })
})

module.exports = router;