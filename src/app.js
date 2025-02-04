const express = require("express");

const app = express();

const { adminAuth, userAuth } = require("./middlewares/auth");

// handle Auth middlewares for all GET, POST, ... requests
app.use("/admin", adminAuth);

app.post("/user/login", (req, res) => {
    res.send("User posted Successfully...");
});

app.get("/user/data", userAuth, (req, res, next) => {
    res.send("User Data Sent");
});
app.get("/admin/getAllData", (req, res, next) => {
    res.send("All Data Sent");
});
app.get("/admin/deleteUser", (req, res, next) => {
    res.send("deleted the user");
});

app.listen(3000, () => {
    console.log("Server is successfully listeninig on port 3000");
});