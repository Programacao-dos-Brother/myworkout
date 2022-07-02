require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')

const app = express()
app.use(express.urlencoded({
    extended: true
}))
app.use(express.json())

const user = process.env.DB_USER
const password = encodeURIComponent(process.env.DB_PASS)

const url = `mongodb+srv://${user}:${password}@myworkout.idp1wut.mongodb.net/?retryWrites=true&w=majority`

mongoose.connect(url, {dbName: 'myworkout'}).then(()=>{
    console.log('conectou')
    app.listen(3000)
}).catch((e)=>console.log(e))

app.use('/goal', require('./routes/goal'))
app.use('/step', require('./routes/step'))
app.use('/postural', require('./routes/posturalDeviation'))
app.use('/asymmetry', require('./routes/asymmetry'))
app.use('/user', require('./routes/user'))
app.use('/auth', require('./routes/auth'))

module.exports = app
