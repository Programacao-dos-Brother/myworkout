const mongoose = require('mongoose')

const AsymmetrySchema = new mongoose.Schema({
    name: String
})

const Asymmetry = mongoose.model('Asymmetry', AsymmetrySchema)

module.exports.createAsymmetry = async (payload) => {
    try {
        return await Asymmetry.create(payload)
    } catch (e) {
        console.log(e)
        return e
    }
}

module.exports.readAsymmetry = async () => {
    try {
        return await Asymmetry.find()
    } catch (e) {
        console.log(e)
        return e
    }
}

module.exports.deleteAsymmetry = async (id) => {
    try {
        return await Asymmetry.deleteOne({_id: id})
    } catch (e) {
        console.log(e)
        return e
    }
}

module.exports.updateAsymmetry = async (id, name) => {
    try {
        return await Asymmetry.updateOne({_id: id}, {name: name})
    } catch (e) {
        console.log(e)
        return e
    }
}
