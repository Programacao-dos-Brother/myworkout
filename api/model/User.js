const mongoose = require('mongoose')
const crypto = require('crypto')
const UserSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type:String,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    goals: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Goal'
        }
    ],
    status: {
      type: Boolean,
      default: true
    },
    steps: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Step'
        }
    ],
    posturals: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'PosturalDeviation'
        }
    ],
    assymmetries: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Asymmetry'
        }
    ],
    permission: Number
})

const User = mongoose.model('User', UserSchema)

module.exports.root = User

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

module.exports.createUser = async (obj) => {
    try {
        if (obj.password) obj.password = await crypto.createHmac('sha256', secret_key).update(obj.password).digest('hex')
        obj.status = true
        return await User.create(obj)
    } catch (e) {
        console.log(e)
        return e
    }
}

module.exports.readUsers = async () => {
    try {
        return await User.find().populate('goals').populate('steps').populate('posturals').populate('assymmetries')
    } catch (e) {
        console.log(e)
        return e
    }
}

module.exports.readUser = async (id) => {
    try {
        return await User.findOne({_id: id}).populate('goals').populate('steps').populate('posturals').populate('assymmetries')
    } catch (e) {
        console.log(e)
        return e
    }
}