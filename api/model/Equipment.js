const Equipment = require('../schema/equipment')

exports.createEquipment = async (req, res, next) => {
    try {
        const response = await Equipment.create(req.body)
        return res.status(201).send(response)
    } catch (error) {
        return res.status(500).send({ error: error })
    }
}

exports.readEquipment = async (req, res, next) => {
    try {
        const list = await Equipment.find()
        return res.status(200).send(list)
    } catch (e) {
        return res.status(500).send({ error: e })
    }
}

exports.deleteEquipment = async (req, res, next) => {
    try {
        const response = await Equipment.deleteOne({_id: req.params.id})
        return res.status(202).send(response)
    } catch (e) {
        return res.status(500).send({ error: e })
    }
}

exports.updateEquipment = async (req, res, next) => {
    try {
        const response = await Equipment.updateOne(
            {_id: req.params.id},
            {
                name: req.body.name,
                tagNumber: req.body.tagNumber,
                numberEquipment: req.body.numberEquipment,
                imageEquipment: req.body.imageEquipment
            }
        )
        return res.status(202).send(response)
    } catch (e) {
        return res.status(500).send({ error: e })
    }
}
