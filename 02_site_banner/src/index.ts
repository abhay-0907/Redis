import express from 'express'
import redisRouter from './routes/redis.route.ts'


const app = express()
export const BANNER_KEY = "app:banner"
app.use(express.json())


app.use('/redis',redisRouter)
app.get('/',(req,res)=>{
    return res.json({
        "message":"Hello World"
    })
})

app.listen(3000,()=>{
    console.log("Server is running on port 3000")
})