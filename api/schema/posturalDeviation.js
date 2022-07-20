const mongoose = require('mongoose')

const PosturalDeviationSchema = new mongoose.Schema(
    {
        name: String
    }
)

module.exports = mongoose.model('PosturalDeviation', PosturalDeviationSchema, 'posturaldeviation')
