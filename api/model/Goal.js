const mongoose = require('mongoose')

const GoalSchema = new mongoose.Schema({
    name: String
})

const Goal = mongoose.model('Goal', GoalSchema)

module.exports.createGoal = async (payload) => {
    try {
        return await Goal.create(payload)
    } catch (e) {
        console.log(e)
        return e
    }
}

module.exports.readGoal = async () => {
    try {
        return await Goal.find()
    } catch (e) {
        console.log(e)
        return e
    }
}

module.exports.deleteGoal = async (id) => {
    try {
        return await Goal.deleteOne({_id: id})
    } catch (e) {
        console.log(e)
        return e
    }
}

module.exports.updateGoal = async (id, name) => {
    try {
        return await Goal.updateOne({_id: id}, {name: name})
    } catch (e) {
        console.log(e)
        return e
    }
}
