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

module.exports.deletePosturalDeviation = (id) => {
    return PosturalDeviation.deleteOne({_id: id})
}

module.exports.updatePosturalDeviation = (id, name) => {
    return PosturalDeviation.updateOne({_id: id}, {name: name})
}
