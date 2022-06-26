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

mongoose.connect(url, {dbName: 'myworkout'})
    .then(()=>{
        console.log('conectou')
        app.listen(3000)
    })
    .catch((e)=>console.log(e))

app.use('/goals', require('./routes/goals'))

module.exports = app