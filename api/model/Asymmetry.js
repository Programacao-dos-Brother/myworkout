const Asymmetry = require('../schema/asymmetry')

exports.createAsymmetry = async (req, res, next) => {
    try {
        const asymmetry = await Asymmetry.create(req.body)
        return res.status(201).send(asymmetry)
    } catch (error) {
        return res.status(500).send({ error: error })
    }
}

exports.readAsymmetry = async (req, res, next) => {
    try {
        const list = await Asymmetry.find()
        return res.status(200).send(list)
    } catch (e) {
        return res.status(500).send({ error: error })
    }
}

exports.deleteAsymmetry = async (req, res, next) => {
    try {
        const response = await Asymmetry.deleteOne({_id: req.params.id})
        return res.status(202).send(response)
    } catch (e) {
        return res.status(500).send({ error: error })
    }
}

exports.updateAsymmetry = async (req, res, next) => {
    try {
        const response = await Asymmetry.updateOne({_id: req.params.id}, {name: req.body.name})
        return res.status(202).send(response)
    } catch (e) {
        return res.status(500).send({ error: error })
    }
}
