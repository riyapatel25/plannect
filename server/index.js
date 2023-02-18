
const express = require("express");
const PORT = process.env.PORT || 3000;
const app = express();

app.get("/api",(req, res) =>{
    res.json({message: "PLANNECT!"});
});
app.listen(PORT, () => {
    console.log("server listening")
})
