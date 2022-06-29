const mongoose = require('mongoose')

const StepSchema = new mongoose.Schema({
    name: String
})

const Step = mongoose.model('Step', StepSchema)

module.exports.createStep = async (payload) => {
    try {
        return await Step.create(payload)
    } catch (e) {
        console.log(e)
        return e
    }
}

module.exports.readStep = async () => {
    try {
        return await Step.find()
    } catch (e) {
        console.log(e)
        return e
    }
}

module.exports.deleteStep = async (id) => {
    try {
        return await Step.deleteOne({_id: id})
    } catch (e) {
        console.log(e)
        return e
    }
}

module.exports.updateStep = async (id, name) => {
    try {
        return await Step.updateOne({_id: id}, {name: name})
    } catch (e) {
        console.log(e)
        return e
    }
}
