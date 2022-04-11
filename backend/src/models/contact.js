const mongoose = require('mongoose')
const { required } = require('nodemon/lib/config')
const validator = require('validator')


const contactSchema = new mongoose.Schema({
    subject: {
        type: String,
    },

    message: {
        type: String,
    },
    creater: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    } 
},
)

const Contact = mongoose.model('Contact',contactSchema )

   module.exports = Contact