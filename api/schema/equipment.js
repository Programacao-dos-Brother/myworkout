const mongoose = require('mongoose')

const Equipment = new mongoose.Schema(
    {
        name: String,
        tagNumber: Number,
        numberEquipment: Number,
        imageEquipment: String
    }
)

module.exports = mongoose.model('Equipment', Equipment, 'equipment')
