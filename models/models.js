const mongoose = require('mongoose')
const validator = require('validator')

const dataSchema = mongoose.Schema({
    companyName: {
        type: String,
        required: [true, 'Please enter Company Name']
    }, model: {
        type: String,
        required: [true, 'Please enter your vechile model.']
    }, availability: {
        type: String,
        required: [true, 'Please enter vechile availability'],
        enum: ['SOLD', 'AVAILABLE']
    }, price: {
        type: Number,
        required: ['true', 'Please enter Vechile price']
    }
})

module.exports = mongoose.model('Data', dataSchema)