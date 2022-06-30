const Goal = require('../schema/goal')

module.exports.createGoal = async (req, res, next) => {
    try {
        if (req.body.name && req.body.name !== '') {
            return res.status(201).send(await Goal.create(req.body))
        } else {
            return res.status(400).send({error: 'Missing name value.'})
        }
    } catch (e) {
        return res.status(500).send({error: e})
    }
}

module.exports.readGoal = async (req, res, next) => {
    try {
        return res.status(200).send(await Goal.find())
    } catch (e) {
        return res.status(500).send({error: e})
    }
}

module.exports.deleteGoal = async (req, res, next) => {
    try {
        return res.status(200).send(await Goal.deleteOne({_id: req.params.id}))
    } catch (e) {
        return res.status(500).send({error: e})
    }
}

module.exports.updateGoal = async (req, res, next) => {
    try {
        if (req.body.name && req.body.name !== '') {
            return res.status(200).send(await Goal.updateOne({_id: req.params.id}, {name: req.body.name}))
        } else {
            return res.status(400).send({error: 'Missing name value.'})
        }

    } catch (e) {
        return res.status(500).send({error: e})
    }
}
