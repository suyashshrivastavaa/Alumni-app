const express = require('express')
const Event = require('../models/event')
const router = new express.Router()
const multer = require('multer')

 const upload = multer({ dest: 'uploads/' })


router.post('/events/form',upload.single('avatar'), async (req, res) => {

    const event = new Event(req.body)

     console.log(req.body)
     console.log(req.file)

     try {
         await event.save()
         res.status(201).send(event)
     } catch (e) {
         res.status(400).send(e)
         console.log(e)
     }
})
    

router.get('/events/', async (req, res) => {

    try {
        const events = await Event.find({})    

    res.send(events)}
    
    catch (e) {
        res.status(500).send()
    }
})


module.exports = router