const mongoose = require('mongoose')

const CategoryExerciseSchema = new mongoose.Schema(
    {
        name: String
    }
)

module.exports = mongoose.model('ExerciseCategory', CategoryExerciseSchema, 'exerciseCategory')
