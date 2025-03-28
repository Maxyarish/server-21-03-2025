const mongoose = require('mongoose');
const {Schema}= mongoose;
const userSchema=new Schema({
    login:{
        type:String,
        require:true,
        trim:true,
        minLength:3,
        maxLength:15
    },
    email:{
        type:String,
        require:true,
        unique:true,
        trim:true,
    },
    isMale:{
        type:Boolean,
        require:true,
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