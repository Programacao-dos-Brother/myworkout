const mongoose = require('mongoose')

const StepSchema = new mongoose.Schema(
    {
        name: String
    }
)

module.exports = mongoose.model('Step', StepSchema, 'step')
