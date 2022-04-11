const express = require('express')
const Referral = require('../../models/opportunities/referral')
const auth = require('../../middleware/auth')
const router = new express.Router()



router.post('/referral/form',auth, async (req, res) => {
 
    const referral = new Referral({
        ...req.body,
        creater: req.user._id
    }) 
     try {
         await referral.save()
         res.status(201).send(referral)
     } catch (e) {
         res.status(400).send(e)
     }
 })
 
 router.get('/referral/',auth, async (req, res) => {
    const referral = await Referral.find({})
  /*   const referral = new Referral({
        ...req.body,
        creater: req.user._id
    }) */
     try {
         res.status(201).send(referral)
     } catch (e) {
         res.status(400).send(e)
     }
 })

 module.exports = router