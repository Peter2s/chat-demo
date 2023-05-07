const  mongoose = require('mongoose');
const schema = mongoose.Schema({
    'content':{
        trim:true,
        type:String,
    }
},{timestamps:true})
module.exports =  mongoose.model('message',schema);