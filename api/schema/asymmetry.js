const mongoose = require('mongoose')

const AsymmetrySchema = new mongoose.Schema(
    {
        name: String
    }
)

module.exports = mongoose.model('Asymmetry', AsymmetrySchema, 'asymmetry')
