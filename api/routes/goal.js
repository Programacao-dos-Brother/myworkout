const express = require('express')
const routes = express.Router()
const Goal = require('../model/Goal')

routes.post('/create', async (req, res) => {
    try {
        if (req.body.name && req.body.name !== '') {
            res.send(await Goal.createGoal(req.body))
        } else {
            res.send({error: 'Missing name value.'})
        }
    } catch (e) {
        console.log(e)
    }
})

routes.get('/read', async (req, res) => {
    try {
        res.send(await Goal.readGoal())
    } catch (e) {
        console.log(e)
    }
})

routes.delete('/delete/:id', async (req, res) => {
    try {
        res.send(await Goal.deleteGoal(req.params.id))
    } catch (e) {
        console.log(e)
    }
})

routes.put('/update/:id', async (req, res) => {
    try {
        if (req.body.name && req.body.name !== '') {
            res.send(await Goal.updateGoal(req.params.id, req.body.name))
        } else {
            res.send({error: 'Missing name'})
        }
    } catch (e) {
        console.log(e)
    }
})

module.exports = routes