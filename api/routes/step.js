const express = require('express')
const routes = express.Router()
const Step = require('../model/Step')
const Auth = require("../model/Auth");
const PosturalDeviation = require("../model/PosturalDeviation");

routes.post('/create', async (req, res) => {
    try {
        if (req.headers['authorization']) {
            let decodedToken = await Auth.decodeToken(req.headers['authorization'])
            if (decodedToken && decodedToken.user) {
                if (req.body.name && req.body.name !== '') {
                    res.send(await Step.createStep(req.body))
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
                res.send(await Step.readStep())
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
                res.send(await Step.deleteStep(req.params.id))
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
                    res.send(await Step.updateStep(req.params.id, req.body.name))
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

module.exports = routes