const User = require('../schema/user')
const bcrypt = require('bcrypt')

exports.createUser = async (req, res, next) => {
    try {
        if (req.body.firstName && req.body.lastName && req.body.password && req.body.email && req.body.phone) {
            await bcrypt.hash(req.body.password, 10, async (errBcrypt, hash) => {
                return res.status(201).send(await User.create({
                    firstName: req.body.firstName,
                    lastName: req.body.lastName,
                    password: hash,
                    email: req.body.email,
                    phone: req.body.phone,
                    permission: req.body.permission ? req.body.permission : null,
                    goals: req.body.goals ? req.body.goals : null,
                    steps: req.body.steps ? req.body.steps : null,
                    posturals: req.body.posturals ? req.body.posturals : null,
                    assymmetries: req.body.assymmetries ? req.body.assymmetries : null
                }))
            })
        } else {
            return res.status(400).send({error: 'Missing Information.'})
        }
    } catch (e) {
        return res.status(500).send({ error: e })
    }
}

exports.readUsers = async (req, res, next) => {
    try {
        return res.status(200).send(await User.find().populate('goals').populate('steps').populate('posturals').populate('assymmetries'))
    } catch (e) {
        return res.status(500).send({ error: e })
    }
}

exports.readUser = async (req, res, next) => {
    try {
        return res.status(200).send(await User.findOne({_id: req.params.id}).populate('goals').populate('steps').populate('posturals').populate('assymmetries'))
    } catch (e) {
        return res.status(500).send({ error: e })
    }
}
