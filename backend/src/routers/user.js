const express = require('express')
const User = require('../models/user')
const router = new express.Router()


// Create user
router.post('/users/registration', async (req, res) => {
    const user = new User(req.body)

    try {
        await user.save()
        const token = await user.generateAuthToken()
        console.log(token)
        res.status(201).send({ user,token })
    } catch (e) {
        res.status(400).send(e)
    }
})

router.post('/users/login', async (req, res) => {
    
    
    try {
        const user = await User.findByCredentials(req.body.email, req.body.password)
        res.send({ user })
    } catch (e) {
        res.status(400).send()
    }
})



module.exports = router



