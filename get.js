const express=require('express');
const app=express();
//Basic routing
app.get('/',(req,res)=>{
    res.send('Happy Deepawali');
});
app.listen(3000,()=>{
    console.log("Server is running on port 3000");
});