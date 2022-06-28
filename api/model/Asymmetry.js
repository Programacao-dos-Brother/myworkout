const mongoose = require('mongoose')

const AsymmetrySchema = new mongoose.Schema({
    name: String
})

const Asymmetry = mongoose.model('Asymmetry', AsymmetrySchema)

module.exports.createAsymmetry = async (payload) => {
    return Asymmetry.create(payload)
}

module.exports.readAsymmetry = async () => {
    const goals = await Asymmetry.find()
    return goals
}

module.exports.deleteAsymmetry = async (id) => {
    return await Asymmetry.deleteOne({_id: id})
}

module.exports.updateAsymmetry = async (id, name) => {
    return await Asymmetry.updateOne({_id: id}, {name: name})
}