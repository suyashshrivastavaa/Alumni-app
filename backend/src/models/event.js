const mongoose = require('mongoose')
const { required } = require('nodemon/lib/config')
const validator = require('validator')


const eventSchema = new mongoose.Schema({
    name: {
        type: String,
    },

    date: {
        type: Date
    },
    summary: {
        type: String,
    },

    avatar: {
        type: Buffer
    }
},
)

const Event = mongoose.model('Event',eventSchema )

   module.exports = Event