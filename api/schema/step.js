const mongoose = require('mongoose')

const StepSchema = new mongoose.Schema(
    {
        name: String
    },
    { collection: 'step' }
)

module.exports = mongoose.model('Step', StepSchema)
