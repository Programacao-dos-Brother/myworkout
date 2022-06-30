const mongoose = require('mongoose')

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

module.exports =  mongoose.model('User', UserSchema)