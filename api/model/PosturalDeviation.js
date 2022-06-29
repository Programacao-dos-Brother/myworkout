const mongoose = require('mongoose')

const PosturalDeviationSchema = new mongoose.Schema({
    name: String
})

const PosturalDeviation = mongoose.model('PosturalDeviation', PosturalDeviationSchema)

module.exports.createPosturalDeviation = async (payload) => {
    try {
        return await PosturalDeviation.create(payload)
    } catch (e) {
        console.log(e)
        return e
    }
}

module.exports.readPosturalDeviation = async () => {
    try {
        return await PosturalDeviation.find()
    } catch (e) {
        console.log(e)
        return e
    }
}

module.exports.deletePosturalDeviation = async (id) => {
    try {
        return await PosturalDeviation.deleteOne({_id: id})
    } catch (e) {
        console.log(e)
        return e
    }
}

module.exports.updatePosturalDeviation = async (id, name) => {
    try {
        return await PosturalDeviation.updateOne({_id: id}, {name: name})
    } catch (e) {
        console.log(e)
        return e
    }
}
