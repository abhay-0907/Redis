import express from 'express'
import Redis from 'ioredis'

const app = express()

const redis = new Redis(process.env.REDIS_URL || 'redis://localhost:6379')

app.get("/redis",async (req,res)=>{
    const reply = await redis.ping()
    return res.status(200).json({
        success:true,
        message:reply,
    })
})


app.listen(3000,()=>{
    console.log("Server is running on port 3000")
})