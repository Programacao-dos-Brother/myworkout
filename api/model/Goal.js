const mongoose = require('mongoose')

const GoalSchema = new mongoose.Schema({
    name: String
})

const Goal = mongoose.model('Goal', GoalSchema)

module.exports.createGoal = async (payload) => {
    return Goal.create(payload)
}

module.exports.readGoal = async () => {
    const goals = await Goal.find()
    return goals
}

module.exports.deleteGoal = async (id) => {
    return await Goal.deleteOne({_id: id})
}

module.exports.updateGoal = async (id, name) => {
    return await Goal.updateOne({_id: id}, {name: name})
}