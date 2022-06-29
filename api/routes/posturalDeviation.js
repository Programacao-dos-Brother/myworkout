const express = require('express')
const routes = express.Router()
const PosturalDeviation = require('../model/PosturalDeviation')
const Auth = require("../model/Auth");
const Goal = require("../model/Goal");

routes.post('/create', async (req, res) => {
    try {
        if (req.headers['authorization']) {
            let decodedToken = await Auth.decodeToken(req.headers['authorization'])
            if (decodedToken && decodedToken.user) {
                if (req.body.name && req.body.name !== '') {
                    res.send(await PosturalDeviation.createPosturalDeviation(req.body))
                } else {
                    res.send({error: 'Missing name value.'})
                }
            } else {
                res.send({error: 'Invalid Token.'})
            }
        } else {
            res.send({error: 'Missing authorization token.'})
        }
    } catch (e) {
        console.log(e)
    }
})

routes.get('/read', async (req, res) => {
    try {
        if (req.headers['authorization']) {
            let decodedToken = await Auth.decodeToken(req.headers['authorization'])
            if (decodedToken && decodedToken.user) {
                res.send(await PosturalDeviation.readPosturalDeviation())
            } else {
                res.send({error: 'Invalid Token.'})
            }
        } else {
            res.send({error: 'Missing authorization token.'})
        }
    } catch (e) {
        console.log(e)
    }
})

routes.delete('/delete/:id', async (req, res) => {
    try {
        if (req.headers['authorization']) {
            let decodedToken = await Auth.decodeToken(req.headers['authorization'])
            if (decodedToken && decodedToken.user) {
                res.send(await PosturalDeviation.deletePosturalDeviation(req.params.id))
            } else {
                res.send({error: 'Invalid Token.'})
            }
        } else {
            res.send({error: 'Missing authorization token.'})
        }
    } catch (e) {
        console.log(e)
    }
})

routes.put('/update/:id', async (req, res) => {
    try {
        if (req.headers['authorization']) {
            let decodedToken = await Auth.decodeToken(req.headers['authorization'])
            if (decodedToken && decodedToken.user) {
                if (req.body.name && req.body.name !== '') {
                    res.send(await PosturalDeviation.updatePosturalDeviation(req.params.id, req.body.name))
                } else {
                    res.send({error: 'Missing name'})
                }
            } else {
                res.send({error: 'Invalid Token.'})
            }
        } else {
            res.send({error: 'Missing authorization token.'})
        }
    } catch (e) {
        console.log(e)
    }
})

module.exports = routes