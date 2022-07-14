const mongoose = require('mongoose')

const AsymmetrySchema = new mongoose.Schema(
    {
        name: String
    },
    { collection: 'asymmetry' }
)

module.exports = mongoose.model('Asymmetry', AsymmetrySchema)
