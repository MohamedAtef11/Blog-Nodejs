const express = require('express')
const router = express.Router()
const userModel = require('../models/users')

router.get('/',(req , res )=>{
    // res.send('get all users')
    userModel.find({},(err, user)=>{
        if(!err) return res.json(user)
        return res.send(err)
    })
})

router.get('/:id',(req , res)=>{
    id = req.params.id
    // res.send(`get user with id : ${id}`)
    userModel.findById(id,(err, user)=>{
        if(!err) return res.json(user)
        return res.send(err)
    })
})

router.post('/',(req , res)=>{
    // res.send('create new boy')
    userModel.create(req.body,(err, user)=>{
        if(!err) return res.json(user)
        return res.send(err)
    })

})

router.patch('/:id',(req , res)=>{
    id = req.params.id
    userModel.findByIdAndUpdate(id,req.body,(err, user)=>{
        if(!err) return res.json(user)
        return res.send(err)
    })
})

router.delete('/:id',(req , res)=>{
    id = req.params.id
    userModel.deleteOne({ _id: id},(err, user)=>{
        if(!err) return res.json(user)
        return res.send(err)
    })
})

module.exports = router