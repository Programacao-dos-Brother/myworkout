const express = require('express')
const routes = express.Router()
const Asymmetry = require('../model/Asymmetry')

routes.post('/create', async (req, res) => {
    try {
        if (req.body.name && req.body.name !== '') {
            res.send(await Asymmetry.createAsymmetry(req.body))
        } else {
            res.send({error: 'Missing name value.'})
        }
    } catch (e) {
        console.log(e)
    }
})

routes.get('/read', async (req, res) => {
    try {
        res.send(await Asymmetry.readAsymmetry())
    } catch (e) {
        console.log(e)
    }
})

routes.delete('/delete/:id', async (req, res) => {
    try {
        res.send(await Asymmetry.deleteAsymmetry(req.params.id))
    } catch (e) {
        console.log(e)
    }
})

routes.put('/update/:id', async (req, res) => {
    try {
        if (req.body.name && req.body.name !== '') {
            res.send(await Asymmetry.updateAsymmetry(req.params.id, req.body.name))
        } else {
            res.send({error: 'Missing name'})
        }
    } catch (e) {
        console.log(e)
    }
})

module.exports = routes