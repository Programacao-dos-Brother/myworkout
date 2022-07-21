const Workout = require('../schema/workout')

exports.createWorkout = async (req, res, next) => {
    try {
        req.body.initialDate = new Date(req.body.initialDate)
        req.body.finalDate = new Date(req.body.finalDate)

        req.body.exercise.forEach((item, index) => {
            req.body.exercise[index].date = new Date(item.date)
        })

        const response = await Workout.create(req.body)
        return res.status(201).send(response)
    } catch (error) {
        return res.status(500).send({ error: error })
    }
}

exports.readWorkout = async (req, res, next) => {
    try {
        const list = await Workout.find()
        return res.status(200).send(list)
    } catch (e) {
        return res.status(500).send({ error: e })
    }
}

exports.deleteWorkout = async (req, res, next) => {
    try {
        const response = await Workout.deleteOne({_id: req.params.id})
        return res.status(202).send(response)
    } catch (e) {
        return res.status(500).send({ error: e })
    }
}

exports.updateWorkout = async (req, res, next) => {
    try {
        const response = await Workout.updateOne({_id: req.params.id}, {name: req.body.name})
        return res.status(202).send(response)
    } catch (e) {
        return res.status(500).send({ error: e })
    }
}
