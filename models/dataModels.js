let mongoose = require('mongoose')

let dataSchema= mongoose.Schema({
    username:String,
    mobile:String,
    email:String
})

module.exports=mongoose.model('data',dataSchema)