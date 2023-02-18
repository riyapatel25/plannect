
import Express from 'express'

const app = Express();

import userRoutes from "./users"

app.use("/api/users", userRoutes)


app.listen(3000, () =>{
  console.log('working!')
})



// / const express = require("express");
// const PORT = process.env.PORT || 3000;
// const app = express();

// app.get("/api",(req, res) =>{
//     res.json({message: "PLANNECT!"});
// });
// app.listen(PORT, () => {
//     console.log("server listening")
// })
