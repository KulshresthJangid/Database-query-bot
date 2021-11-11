require('dotenv').config()
const express = require('express')

const Data = require('../models/models')

const router = express.Router()

router.get('/', (req, res) => {
    res.json({
        "message": "Server is started"
    })
})

router.post('/saveNewVechile', async(req, res) => {
    try {
        const newData = new Data({
            companyName: req.body.company,
            model: req.body.company,
            availablity: req.body.info,
            price: req.body.price
        })
        await newData.save().then((data) => {
            res.send('Your vechile has saved')
        })
    } catch (e) {
        res.status(400).send('There was an unexpected error ' + e.message)
    }
})

module.exports = router