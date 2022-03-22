const express = require('express')
require('./db/mongoose')

const Event = require('./models/event')

const app = express()

const port = process.env.PORT || 3000

app.use(express.json())

app.post('/users', (req,res) => {
    
    
    const event= new Event(req.body)
    
    event.save().then(()=>{
        res.send(event)
    }).catch(()=> {

    })
    
    
})

app.listen(port, ()=>{
    console.log('Server is up on port ' + port)
})