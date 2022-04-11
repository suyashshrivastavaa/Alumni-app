const express = require('express')
const Contact = require('../models/contact')
const router = new express.Router()
const auth = require('../middleware/auth')





router.post('/contact',auth, async (req, res) => {
 
    const message = new Contact({
        ...req.body,
        creater: req.user._id
    }) 
 
    console.log(message)
     try {
         await message.save()
         res.status(201).send(message)
     } catch (e) {
         res.status(400).send(e)
     }
 })


 router.get('/contact/display',auth, async (req, res) => {
 
    const messages = await Contact.find({})
  
     try {
         res.status(201).send(messages)
     } catch (e) {
         res.status(400).send(e)
     }
 })

 module.exports = router