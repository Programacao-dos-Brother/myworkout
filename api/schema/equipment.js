const mongoose = require('mongoose')

const Equipment = new mongoose.Schema(
    {
        name: String,
        category: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'ExerciseCategory'
        },
        tagNumber: Number,
        numberEquipment: Number,
        imageEquipment: String
    }
)

module.exports = mongoose.model('Equipment', Equipment, 'equipment')
