const User = require("../models/User");

module.exports.createUser=async(req,res,next)=>{
    try {
        const newUser=await User.create(req.body);
        res.status(201).send({data:newUser})
    } catch (error) {
        next(error)
    }
}
module.exports.findAllUsers=async(req,res,next)=>{
    try {
        console.log(req.query);
        const {gender,minAge,maxAge,login}=req.query;
        const filter={};
        if(gender){
            filter.isMale=gender ==='male'
        }
        if(login){
            filter.login=login;
        }
        if(minAge){
            filter.age={};
            if(minAge){
                filter.age.$gte=Number(minAge)
            } 
                if(maxAge){
                filter.age.$lte=Number(maxAge)
            }
        }
        const users = await User.find({filter});
        res.status(200).send({data:users})
    } catch (error) {
        next(error)
    }
}
module.exports.findUserById=async(req,res,next)=>{
    try {
        const user = await User.findById(req.params.idUser);
        res.status(200).send({data:user})
       if (user) {
        return res.status(404).send({data:"user not found"})
       }
    } catch (error) {
        next(error)
    }
}
module.exports.updateUserById=async(req,res,next)=>{
    try {
        const updatedUser = await User.findByIdAndUpdate(
            req.params.idUser,
            req.body,
            {new:true},
             res.status(200).send({data:updatedUser})
        )
    }
     catch (error) {
        next(error)
    }
}
module.exports.deleteUserById=async(req,res,next)=>{
    try {
       const deletedUser= await User.findByIdAndDelete( 
        req.params.idUser   
       )
        if (!deletedUser) {
            return res.status(404).send({data:'user not found'})
        }
        res.status(200).send({data:deletedUser});
    }
      catch(error){
        next(error)
    }
}
  
