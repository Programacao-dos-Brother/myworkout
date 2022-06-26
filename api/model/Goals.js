const mongoose = require('mongoose')

const GoalsSchema = new mongoose.Schema({
    name: String
})

const Goals = mongoose.model('Goals', GoalsSchema)

module.exports.createGoal = async (payload) => {
    return Goals.create(payload)
}

module.exports.readGoal = async () => {
    console.log('tchau')
    const goals = await Goals.find()
    return goals
}

module.exports.deleteGoal = async (id) => {
    return await Goals.deleteOne({_id: id})
}

module.exports.updateGoal = async (id, name) => {
    return await Goals.updateOne({_id: id}, {name: name})
}