const express = require('express')
const routes = express.Router()
const Goals = require('../model/Goals')

routes.post('/create', async (req, res) => {
    try {
        res.send(await Goals.createGoal(req.body))
    } catch (e) {
        console.log(e)
    }
})

module.exports = routes