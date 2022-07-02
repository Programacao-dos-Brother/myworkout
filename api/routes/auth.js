const express = require('express')
const routes = express.Router()
const Auth = require('../model/Auth')

routes.post('/login', Auth.login)

module.exports = routes
