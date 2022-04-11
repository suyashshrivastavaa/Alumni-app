const mongoose = require('mongoose')
const { required } = require('nodemon/lib/config')
const validator = require('validator')


const referralSchema = new mongoose.Schema({
    description: {
        type: String,
    },
    
    location: {
        type: String,
    },
    salary: {
        type: String
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

const Referral = mongoose.model('Referral',referralSchema )

   module.exports = Referral