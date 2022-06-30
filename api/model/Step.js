const Step = require('../schema/step')


module.exports.createStep = async (req, res, next) => {
    try {
        if (req.body.name && req.body.name !== '') {
            return res.status(201).send(await Step.create(req.body))
        } else {
            return res.status(400).send({error: 'Missing name value.'})
        }
    } catch (e) {
        return res.status(500).send({ error: e })
    }
}

module.exports.readStep = async (req, res, next) => {
    try {
        return res.status(200).send(await Step.find())
    } catch (e) {
        return res.status(500).send({ error: e })
    }
}

module.exports.deleteStep = async (req, res, next) => {
    try {
        return res.status(200).send(await Step.deleteOne(req.params.id))
    } catch (e) {

    }
}

module.exports.updateStep = async (req, res, next) => {
    try {
        if (req.body.name && req.body.name !== '') {
            return res.status(200).send(await Step.updateOne({_id: req.params.id}, {name: req.body.name}))
        } else {
            return res.status(400).send({error: 'Missing name value.'})
        }
    } catch (e) {
        return res.status(500).send({ error: e })
    }
}
