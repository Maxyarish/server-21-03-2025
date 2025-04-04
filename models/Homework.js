const mongoose= require('mongoose');
const { Schema } = mongoose;

const homeworkShema=new Schema({
    subject:{
        type:String,
        required:true,
        trim:true,
        minLength:3,
        maxLength:64
    },
    task:{
        type:String,
        required:true,
        trim:true,
        minLength:5,
        maxLength:255
    },
    isDone:{
        type:Boolean,
      default:false,
    },
    deadLine:{
        type:Date,
        default:()=>{
        const now=new Date();
        now.setDate(now.getDate()+2);
        return now;     
        }
    }
})
const Homework= mongoose.model('Homework',homeworkShema);
module.exports=Homework;