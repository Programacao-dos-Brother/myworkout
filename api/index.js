require('dotenv').config()
const express = require('express')
const cors = require('cors')

const app = express()

app.use(express.urlencoded({
    extended: true
}))
app.use(express.json())

app.use(cors({ credentials: true }))

app.use('/workout', require('./routes/workout'))
app.use('/exercisecategory', require('./routes/exerciseCategory'))
app.use('/equipment', require('./routes/equipment'))
app.use('/goal', require('./routes/goal'))
app.use('/step', require('./routes/step'))
app.use('/postural', require('./routes/posturalDeviation'))
app.use('/asymmetry', require('./routes/asymmetry'))
app.use('/user', require('./routes/user'))
app.use('/auth', require('./routes/auth'))

require('./connection')

app.listen(process.env.PORT || 3000)

module.exports = app
