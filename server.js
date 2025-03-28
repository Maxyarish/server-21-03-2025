const http=require('http'); //core modules
const mongoose=require('mongoose'); //npm modules
const app=require('./app'); //local modules

mongoose.connect('mongodb://127.0.0.1:27017/mongo_4').then(()=>{
    console.log('mongodb connected successfully');
    
}).catch((err)=>{
    console.log('mongodb connection failed');
})

const server = http.createServer(app);

const port =3001;

server.listen(port,()=>{
    console.log('server started at port ='+ port);
})