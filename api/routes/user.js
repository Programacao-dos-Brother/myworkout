const express = require('express')
const routes = express.Router()
const User = require('../model/User')
const Auth = require('../model/Auth')
routes.post('/create', Auth.required, User.createUser)

routes.get('/read', Auth.required, User.readUsers)

routes.get('/read/:id', Auth.required, User.readUser)


module.exports = routes
