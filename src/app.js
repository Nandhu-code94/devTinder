const express = require("express");

const app = express();


// This will only handle GET call to /user
app.get("/user",(req,res)=>{
    res.send({firstname:"Nandhu", lastName:"moorthi"})
})

app.post("/user",(req,res)=>{
    console.log("Save Data to the database");
    res.send("Data successfully saved to the database");
})
app.delete("/user",(req,res)=>{
    res.send("Deleted successfully");
})

// this will match all the HTTP method API calls to /test
app.use("/test", (req, res) => {
    res.send("test from the server");
})
app.listen(3000, () => {
    console.log("Server is successfully listeninig on port 3000");
});