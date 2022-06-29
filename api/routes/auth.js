const express = require('express')
const routes = express.Router()
const Auth = require('../model/Auth')

routes.post('/login', async (req, res) => {
    try {
        if (req.body.email && req.body.email !== '' && req.body.password && req.body.password !== '') {
            res.send(await Auth.login(req.body.email, req.body.password))
        } else {
            res.send({error: 'Missing Information.'})
        }
    } catch (e) {
        console.log(e)
    }
})

routes.post('/token', async (req, res) => {
    try {
        if (req.body.token) {
            res.send(await Auth.decodeToken(req.body.token))
        } else {
            res.send({error: 'Missing information.'})
        }
    } catch (e) {
        console.log(e)
    }
})

module.exports = routes