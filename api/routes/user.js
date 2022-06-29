const express = require('express')
const routes = express.Router()
const User = require('../model/User')

routes.post('/create', async (req, res) => {
    try {
        if (req.body.firstName && req.body.lastName && req.body.password && req.body.email, req.body.phone) {
            res.send(await User.createUser({
                firstName: req.body.firstName,
                lastName: req.body.lastName,
                password: req.body.password,
                email: req.body.email,
                phone: req.body.phone,
                permission: req.body.permission ? req.body.permission : null,
                goals: req.body.goals ? req.body.goals : null,
                steps: req.body.steps ? req.body.steps : null,
                posturals: req.body.posturals ? req.body.posturals : null,
                assymmetries: req.body.assymmetries ? req.body.assymmetries : null
            }))
        } else {
            res.send({error: 'Missing Information.'})
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
                res.send(await User.readUsers())
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

routes.get('/read/:id', async (req, res) => {
    try {
        if (req.headers['authorization']) {
            let decodedToken = await Auth.decodeToken(req.headers['authorization'])
            if (decodedToken && decodedToken.user) {
                res.send(await User.readUser(req.params.id))
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
