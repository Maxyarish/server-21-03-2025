const express = require('express'); 
const { createUser, findAllUsers, findUserById,updateUserById,deletedUserById} = require('./controllers/userController');
const app=express(); 

app.use(express.json())

app.post('/users',createUser)
app.get('/users',findAllUsers)
app.get('/users/:idUser',findUserById)
app.patch('/users/:idUser',updateUserById)
app.put('/users/:idUser',updateUserById)
app.delete('/users/:idUser',deletedUserById)

app.use((err,res,req,next)=>{
    console.log(err.message);
    res.status(500).send({errors:[err.message]})
})

module.exports=app;