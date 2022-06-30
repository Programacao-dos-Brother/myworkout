const PosturalDeviation = require('../schema/posturalDeviation')

module.exports.createPosturalDeviation = async (req, res, next) => {
    try {
        if (req.body.name && req.body.name !== '') {
            res.status(201).send(await PosturalDeviation.create(req.body))
        } else {
            res.status(400).send({error: 'Missing name value.'})
        }
    } catch (e) {
        return res.status(500).send({ error: e })
    }
}

module.exports.readPosturalDeviation = async (req, res, next) => {
    try {
        return res.status(200).send(await PosturalDeviation.find())
    } catch (e) {
        return res.status(500).send({ error: e })
    }
}

module.exports.deletePosturalDeviation = async (req, res, next) => {
    try {
        return res.status(200).send(await PosturalDeviation.deleteOne({_id: req.params.id}))
    } catch (e) {
        return res.status(500).send({ error: e })
    }
}

module.exports.updatePosturalDeviation = async (req, res, next) => {
    try {
        if (req.body.name && req.body.name !== '') {
            res.status(200).send(await PosturalDeviation.updateOne({_id: req.params.id}, {name: req.body.name}))
        } else {
            res.status(400).send({error: 'Missing name.'})
        }
    } catch (e) {
        return res.status(500).send({ error: e })
    }
}
