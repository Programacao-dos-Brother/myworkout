const express = require('express')
const routes = express.Router()
const PosturalDeviation = require('../model/PosturalDeviation')

routes.post('/create', async (req, res) => {
    try {
        res.send(await PosturalDeviation.createPosturalDeviation(req.body))
    } catch (e) {
        console.log(e)
    }
})

routes.get('/read', async (req, res) => {
    try {
        res.send(await PosturalDeviation.readPosturalDeviation())
    } catch (e) {
        console.log(e)
    }
})

routes.delete('/delete/:id', async (req, res) => {
    try {
        res.send(await PosturalDeviation.deletePosturalDeviation(req.params.id))
    } catch (e) {
        console.log(e)
    }
})

routes.put('/update/:id', async (req, res) => {
    try {
        if (req.body.name && req.body.name !== '') {
            res.send(await PosturalDeviation.updatePosturalDeviation(req.params.id, req.body.name))
        } else {
            res.send({error: 'Missing name'})
        }
    } catch (e) {
        console.log(e)
    }
})

module.exports = routes