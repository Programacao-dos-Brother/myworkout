const mongoose = require('mongoose')

const GoalsSchema = new mongoose.Schema({
    name: String
}, {
    collation: 'goal'
})

const Goals = mongoose.model('Goals', GoalsSchema)

module.exports.createGoal = async (payload) => {
    return Goals.create(payload)
}