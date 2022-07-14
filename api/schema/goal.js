const mongoose = require('mongoose')

const GoalSchema = new mongoose.Schema(
    {
        name: String
    },
    { collection: 'goal' }
)

module.exports = mongoose.model('Goal', GoalSchema)