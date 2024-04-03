const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    name:{
        type: String,
        reuired: true
    },
    email:{
        type: String,
        reuired: true
    },
    password:{
        type: String,
        reuired: true
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