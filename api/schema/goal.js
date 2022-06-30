const mongoose = require('mongoose')

const GoalSchema = new mongoose.Schema({
    name: String
})

module.exports = mongoose.model('Goal', GoalSchema)