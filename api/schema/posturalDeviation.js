const mongoose = require('mongoose')

const PosturalDeviationSchema = new mongoose.Schema(
    {
        name: String
    },
    { collection: 'posturaldeviation' }
)

module.exports = mongoose.model('PosturalDeviation', PosturalDeviationSchema)