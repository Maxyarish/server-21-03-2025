const mongoose = require('mongoose');
const {Schema}= mongoose;
const userSchema=new Schema({
    login:{
        type:String,
        required:true,
        trim:true,
        minLength:3,
        maxLength:15
    },
    email:{
        type:String,
        required:true,
        unique:true,
        trim:true,
    },
    isMale:{
        type:Boolean,
        required:true,
    },
    age:{
        type:Number,
        default:12,
        min:3,
        max:55
    }
})
const User= mongoose.model('User',userSchema)
module.exports=User;