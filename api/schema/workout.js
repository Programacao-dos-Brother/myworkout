const mongoose = require('mongoose')

const Workout = new mongoose.Schema(
    {
        user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User'
        },
        initialDate: Date,
        finalDate: Date,
        exercise: [
            {
                date: Date,
                order: Number,
                equipment: {
                    type: mongoose.Schema.Types.ObjectId,
                    ref: 'Equipment'
                },
                serie: Number,
                repetition: Number,
                weight: Number,
                observation: String
            }
        ]
    }
)

module.exports = mongoose.model('Workout', Workout, 'workout')
