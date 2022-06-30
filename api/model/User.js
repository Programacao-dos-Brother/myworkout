const User = require('../schema/user')
const crypto = require('crypto')

module.exports.login = async (email, password) => {
    try {
        let hashedPassword = crypto.createHmac('sha256', secret_key).update(password).digest('hex')
        let result = await User.findOne({email: email, password: hashedPassword})
        if (!result) {
            return {error: 1}
        } else if (result.status === false) {
            return {error: 2}
        } else {
            return result
        }
    } catch (e) {
        return e
    }
}

module.exports.createUser = async (req, res, next) => {
    try {
        if (req.body.firstName && req.body.lastName && req.body.password && req.body.email && req.body.phone) {
            return res.status(201).send(await User.create({
                firstName: req.body.firstName,
                lastName: req.body.lastName,
                password: req.body.password,
                email: req.body.email,
                phone: req.body.phone,
                permission: req.body.permission ? req.body.permission : null,
                goals: req.body.goals ? req.body.goals : null,
                steps: req.body.steps ? req.body.steps : null,
                posturals: req.body.posturals ? req.body.posturals : null,
                assymmetries: req.body.assymmetries ? req.body.assymmetries : null
            }))
        } else {
            return res.status(400).send({error: 'Missing Information.'})
        }
    } catch (e) {
        return res.status(500).send({ error: e })
    }
}

module.exports.readUsers = async (req, res, next) => {
    try {
        return res.status(200).send(await User.find().populate('goals').populate('steps').populate('posturals').populate('assymmetries'))
    } catch (e) {
        return res.status(500).send({ error: e })
    }
}

module.exports.readUser = async (req, res, next) => {
    try {
        return res.status(200).send(await User.findOne({_id: req.params.id}).populate('goals').populate('steps').populate('posturals').populate('assymmetries'))
    } catch (e) {
        return res.status(500).send({ error: e })
    }
}
