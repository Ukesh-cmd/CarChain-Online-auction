const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true
    },
    password:{
        type: String,
        required: true
    },
    isLogin:{
        type:String,
        default: '0'
    }
},
{
    timeStamps:true
})

module.exports = mongoose.model('User', userSchema)
