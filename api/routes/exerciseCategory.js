const express = require('express')
const routes = express.Router()
const ExerciseCategory = require('../model/ExerciseCategory')
const Auth = require("../model/Auth")

routes.post('/create', Auth.required, ExerciseCategory.createExerciseCategory)

routes.get('/read', Auth.required, ExerciseCategory.readExerciseCategory)

routes.delete('/delete/:id', Auth.required, ExerciseCategory.deleteExerciseCategory)

routes.put('/update/:id', Auth.required, ExerciseCategory.updateExerciseCategory)

module.exports = routes
