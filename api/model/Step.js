const mongoose = require('mongoose')

const StepSchema = new mongoose.Schema({
    name: String
})

const Step = mongoose.model('Step', StepSchema)

module.exports.createStep = async (payload) => {
    return Step.create(payload)
}

module.exports.readStep = async () => {
    const step = await Step.find()
    return step
}

module.exports.deleteStep = (id) => {
    return Step.deleteOne({_id: id})
}

module.exports.updateStep = (id, name) => {
    return Step.updateOne({_id: id}, {name: name})
}
