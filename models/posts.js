const mongoose = require('mongoose')

const postSchema = mongoose.Schema({
    title: {type: String , required: true , minlength: 3 ,maxlength: 15 } ,
    body: {type: String , required: true , minlength: 5 ,maxlength: 140 } ,
    author: {type: String , required: true , minlength: 3 ,maxlength: 25 } ,
})

const postModel = mongoose.model('Post',postSchema)

module.exports = postModel