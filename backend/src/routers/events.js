const express = require('express')
const Event = require('../models/event')
const router = new express.Router()
const multer = require('multer')

 const upload = multer({ dest: 'uploads/' })


router.post('/events/form',upload.single('image'), async (req, res) => {

    const event = new Event(req.body)
     console.log(event)
     console.log(req.body)
     console.log(req.file.filename)
     var imgsrc = 'http://localhost:3000/events/form/' + req.file.filename
     console.log(imgsrc)
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

router.get('/test', async (req, res) => {
    try {
    const user = await User.findById(req.params.id)
    if (!user || !user.avatar) {
    throw new Error()
    }
    res.set('Content-Type', 'image/jpg')
    res.send(user.avatar)
    } catch (e) {
    res.status(404).send()
    }
   })


module.exports = router