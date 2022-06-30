const express = require('express')
const routes = express.Router()
const Goal = require('../model/Goal')
const Auth = require('../model/Auth')

routes.post('/create', Auth.required, Goal.createGoal)

routes.get('/read', Auth.required, Goal.readGoal)

routes.delete('/delete/:id', Auth.required, Goal.deleteGoal)

routes.put('/update/:id', Auth.required, Goal.updateGoal)

module.exports = routes