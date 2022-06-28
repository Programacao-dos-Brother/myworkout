const express = require('express')
const routes = express.Router()
const Step = require('../model/Step')

routes.post('/create', async (req, res) => {
    try {
        res.send(await Step.createStep(req.body))
    } catch (e) {
        console.log(e)
    }
})

routes.get('/read', async (req, res) => {
    try {
        res.send(await Step.readStep())
    } catch (e) {
        console.log(e)
    }
})

routes.delete('/delete/:id', async (req, res) => {
    try {
        res.send(await Step.deleteStep(req.params.id))
    } catch (e) {
        console.log(e)
    }
})

routes.put('/update/:id', async (req, res) => {
    try {
        if (req.body.name && req.body.name !== '') {
            res.send(await Step.updateStep(req.params.id, req.body.name))
        } else {
            res.send({error: 'Missing name'})
        }
    } catch (e) {
        console.log(e)
    }
})

module.exports = routes