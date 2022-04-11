const mongoose = require('mongoose')
const { required } = require('nodemon/lib/config')
const validator = require('validator')


const internSchema = new mongoose.Schema({
    description: {
        type: String,
    },
    
    location: {
        type: String,
    },
    stipend: {
        type: Number
    },
    duration: {
        type: Number
    },
    note: {
        type: String
    },    
    creater: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    } 
},
)

const Internship = mongoose.model('Internship',internSchema )

   module.exports = Internship