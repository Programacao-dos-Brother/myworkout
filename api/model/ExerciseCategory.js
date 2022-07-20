const ExerciseCategory = require('../schema/exerciseCategory')

exports.createExerciseCategory = async (req, res, next) => {
    try {
        const response = await ExerciseCategory.create(req.body)
        return res.status(201).send(response)
    } catch (error) {
        return res.status(500).send({ error: error })
    }
}

exports.readExerciseCategory = async (req, res, next) => {
    try {
        const list = await ExerciseCategory.find()
        return res.status(200).send(list)
    } catch (e) {
        return res.status(500).send({ error: e })
    }
}

exports.deleteExerciseCategory = async (req, res, next) => {
    try {
        const response = await ExerciseCategory.deleteOne({_id: req.params.id})
        return res.status(202).send(response)
    } catch (e) {
        return res.status(500).send({ error: e })
    }
}

exports.updateExerciseCategory = async (req, res, next) => {
    try {
        const response = await ExerciseCategory.updateOne(
            {_id: req.params.id},
            { name: req.body.name }
        )
        return res.status(202).send(response)
    } catch (e) {
        return res.status(500).send({ error: e })
    }
}
