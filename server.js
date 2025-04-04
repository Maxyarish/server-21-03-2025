const http=require('http'); //core modules
//const mongoose=require('mongoose'); npm modules
const app=require('./app'); //local modules
const connectDB = require('./Config/db');

connectDB();

const server = http.createServer(app);
const port =3001;

server.listen(port,()=>{
    console.log('server started at port ='+ port);
})