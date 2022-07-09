require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')

const app = express()
app.use(express.urlencoded({
    extended: true
}))
app.use(express.json())

app.use(cors({ credentials: true }))

const url = 'mongodb://'+process.env.DB_USER+':'+process.env.DB_PASS+'@mongodb.myworkout.app.br/?directConnection=true&authSource=myworkout01'

mongoose.connect(url, {dbName: 'myworkout01'}).then(()=>{
    console.log('conectou')
    app.listen(process.env.PORT_API_INDEX)
}).catch((e)=>console.log(e))

app.use('/goal', require('./routes/goal'))
app.use('/step', require('./routes/step'))
app.use('/postural', require('./routes/posturalDeviation'))
app.use('/asymmetry', require('./routes/asymmetry'))
app.use('/user', require('./routes/user'))
app.use('/auth', require('./routes/auth'))

module.exports = app
