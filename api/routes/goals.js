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

routes.get('/read', async (req, res) => {
    try {
        console.log('oi')
        res.send(await Goals.readGoal())
    } catch (e) {
        console.log(e)
    }
})

routes.delete('/delete/:id', async (req, res) => {
    try {
        res.send(await Goals.deleteGoal(req.params.id))
    } catch (e) {
        console.log(e)
    }
})

routes.put('/update/:id', async (req, res) => {
    try {
        if (req.body.name && req.body.name !== '') {
            res.send(await Goals.updateGoal(req.params.id, req.body.name))
        } else {
            res.send({error: 'Missing name'})
        }
    } catch (e) {
        console.log(e)
    }
})

module.exports = routes