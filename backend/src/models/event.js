const mongoose = require('mongoose')
const { required } = require('nodemon/lib/config')
const validator = require('validator')


const Event = mongoose.model('Event', {
    name: {
    type: String,
    required: true
    },
    
    date: {
    type:  Date,
    },

    summary: {
    type: String
    }
   })


   module.exports = Event