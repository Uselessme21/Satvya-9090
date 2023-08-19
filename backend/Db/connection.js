const mongoose= require('mongoose');

const connection = mongoose.connect(process.env.MongoURI).then(()=>{
    console.log('connected to mongodb server')
})


module.exports= connection