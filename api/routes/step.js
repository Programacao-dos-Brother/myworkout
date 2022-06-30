const express = require('express')
const routes = express.Router()
const Step = require('../model/Step')
const Auth = require("../model/Auth");


routes.post('/create', Auth.required, Step.createStep)

routes.get('/read', Auth.required, Step.readStep)

routes.delete('/delete/:id', Auth.required, Step.deleteStep)

routes.put('/update/:id', Auth.required, Step.updateStep)

module.exports = routes