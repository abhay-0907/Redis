import express from 'express'
import redisOtpRouter from '../routes/redis.routes.ts'

const app = express()

app.use(express.json())
app.use('/',redisOtpRouter);

app.listen(3000,()=>{
    console.log("Server is running on port 3000")
})