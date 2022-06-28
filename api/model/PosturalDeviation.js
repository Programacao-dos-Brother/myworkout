const mongoose = require('mongoose')

const PosturalDeviationSchema = new mongoose.Schema({
    name: String
})

const PosturalDeviation = mongoose.model('PosturalDeviation', PosturalDeviationSchema)

module.exports.createPosturalDeviation = async (payload) => {
    return PosturalDeviation.create(payload)
}

module.exports.readPosturalDeviation = async () => {
    const goals = await PosturalDeviation.find()
    return goals
}

module.exports.deletePosturalDeviation = async (id) => {
    return await PosturalDeviation.deleteOne({_id: id})
}

module.exports.updatePosturalDeviation = async (id, name) => {
    return await PosturalDeviation.updateOne({_id: id}, {name: name})
}