const express = require("express");

const app = express();

const { adminAuth, userAuth } = require("./middlewares/auth");

app.get("/getUserData", (req, res, next) => {
        //Logic of DB call and get user data
        throw new Error("asfafasfasfs");
        res.send("User Data Sent");
});

app.get("/", (err,req, res, next) => {
    //Logic of DB call and get user data
   
    if(err){
        res.status(500).send("Something Went Wrong");
    }
    console.log("working");
    res.send("working")
});

app.listen(3000, () => {
    console.log("Server is successfully listeninig on port 3000");
});