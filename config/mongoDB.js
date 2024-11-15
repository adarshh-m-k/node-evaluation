let mongoose = require('mongoose')

function connectMongo(){
    mongoose.connect('mongodb://localhost:27017/nodeexam').then(()=>{
        console.log('mongo connected');
        
    }).catch((err)=>{
        console.log(err);
        

    })
}

module.exports= connectMongo;