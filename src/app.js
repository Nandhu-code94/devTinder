const express = require("express");

const app = express();

app.use("/",(req,res)=>{
    res.send("namastw from the dashboard");
    })

app.use("/hello",(req,res)=>{
    res.send("Hello from the server");
    })

app.use("/test",(req,res)=>{
res.send("test from the server");
})

app.listen(3000,()=>{
    console.log("Server is successfully listeninig on port 3000");
});