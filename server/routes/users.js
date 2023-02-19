import express from 'express'

const router = express.Router()


router.get("/test",(req, res) =>{
    res.send("yay it works!")
})

export default router