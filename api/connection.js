const mongoose = require('mongoose')
mongoose.connect('mongodb://'+process.env.DB_USER+':'+process.env.DB_PASS+'@mongodb.myworkout.app.br/myworkout01?directConnection=true&authSource=myworkout01')

const db = mongoose.connection

db.on('error', console.error.bind(console, 'connection error:'))

db.once('open', function() {
    console.log("Connection Successful!")
})
