const express = require('express')
const routes = express.Router()
const Workout = require('../model/Workout')
const Auth = require("../model/Auth")

routes.post('/create', Auth.required, Workout.createWorkout)

routes.get('/read', Auth.required, Workout.readWorkout)

routes.delete('/delete/:id', Auth.required, Workout.deleteWorkout)

routes.put('/update/:id', Auth.required, Workout.updateWorkout)

module.exports = routes
