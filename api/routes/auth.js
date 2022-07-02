const express = require('express')
const routes = express.Router()
const Auth = require('../model/Auth')

routes.post('/login', Auth.login)

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
