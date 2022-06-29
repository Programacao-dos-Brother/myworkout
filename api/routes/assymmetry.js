const express = require('express')
const routes = express.Router()
const Asymmetry = require('../model/Asymmetry')
const Auth = require("../model/Auth");
const Step = require("../model/Step");

routes.post('/create', async (req, res) => {
    try {
        if (req.headers['authorization']) {
            let decodedToken = await Auth.decodeToken(req.headers['authorization'])
            if (decodedToken && decodedToken.user) {
                if (req.body.name && req.body.name !== '') {
                    res.send(await Asymmetry.createAsymmetry(req.body))
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
                res.send(await Asymmetry.readAsymmetry())
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
                res.send(await Asymmetry.deleteAsymmetry(req.params.id))
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
                    res.send(await Asymmetry.updateAsymmetry(req.params.id, req.body.name))
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