const express = require('express')
const Event = require('../models/event')
const router = new express.Router()

router.post('/events/form', async (req, res) => {

    const event = new Event(req.body)
    console.log(req.body)

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