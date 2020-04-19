const express = require('express')
const postModel = require('../models/posts')
const router = express.Router()


router.get('/',(req , res )=>{
    // res.send('get all posts')
    postModel.find({},(err , post)=>{
        if(!err) return console.log(res.json(post));
        return res.send(err)
    })
})

router.get('/:id',(req , res)=>{
    id = req.params.id
    postModel.findById(id,(err , post)=>{
        if(!err) return console.log(res.json(post));
        return res.send(err)
    })

})

router.post('/',(req , res)=>{
    postModel.create(req.body,(err,post)=>{
        if(!err) return res.json(post)
        return res.send(err)
    })    
})

router.patch('/:id',(req , res)=>{
    id = req.params.id
    postModel.findByIdAndUpdate(id , req.body,(err,post)=>{
        if(!err) return res.json(post)
        return res.send(err)
    })  
})

router.delete('/:id',(req , res)=>{
    id = req.params.id
    postModel.deleteOne({_id: id} , req.body,(err,post)=>{
        if(!err) return res.json(post)
        return res.send(err)
    })  
})


module.exports = router