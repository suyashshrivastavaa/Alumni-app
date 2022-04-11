const express = require('express')
const auth = require('../../middleware/auth')
const router = new express.Router()
const Internship = require('../../models/opportunities/internship')



router.post('/internship/form',auth, async (req, res) => {
 
    const internship = new Internship({
        ...req.body,
        creater: req.user._id
    }) 
    console.log(internship)
     try {
         await internship.save()
         res.status(201).send(internship)
     } catch (e) {
         res.status(400).send(e)
     }
 })
 
 router.get('/internship/',auth, async (req, res) => {
    const internship = await Internship.find({})
  
     try {
         res.status(201).send(internship)
     } catch (e) {
         res.status(400).send(e)
     }
 })

 module.exports = router