const express = require('express')
const routes = express.Router()
const Equipment = require('../model/Equipment')
const Auth = require("../model/Auth")

routes.post('/create', Auth.required, Equipment.createEquipment)

routes.get('/read', Auth.required, Equipment.readEquipment)

routes.delete('/delete/:id', Auth.required, Equipment.deleteEquipment)

routes.put('/update/:id', Auth.required, Equipment.updateEquipment)

module.exports = routes
