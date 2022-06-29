const express = require('express')
const routes = express.Router()
const Asymmetry = require('../model/Asymmetry')
const Auth = require("../model/Auth")

routes.post('/create', Auth.required, Asymmetry.createAsymmetry)

routes.get('/read', Auth.required, Asymmetry.readAsymmetry)

routes.delete('/delete/:id', Auth.required, Asymmetry.deleteAsymmetry)

routes.put('/update/:id', Auth.required, Asymmetry.updateAsymmetry)

module.exports = routes
