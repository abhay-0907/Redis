import { redis } from "../config/redis-connection.ts";
import { redisKeyGenerator } from "../utils/redisKeyGenerator.ts";
export async function sendOtpController (req, res){
    const otp = Math.floor(1000 + Math.random() * 9000)
    const {phone} = req.body;

    const result = await redis.set(redisKeyGenerator(phone),otp, 'EX', 60)
    return res.status(200).json({
        success: true,
        messages: [
            {"message":otp},
            {"message":result}
        ]
    })
}


export async function verifyOtpController(req,res){
    const {phone,otp} = req.body
    const savedOtp = await redis.get(redisKeyGenerator(phone));
    if(!savedOtp){
        return res.status(400).json({
            "success":true,
            "message":"OTP Expired"
        })
    }
    if(savedOtp!==otp){
        return res.status(401).json({
            "success":true,
            "message":"Invalid OTP"
        })
    }
    if(savedOtp===otp){
        await redis.del(redisKeyGenerator(phone))
        return res.status(200).json({
            "success":true,
            "message":"OTP verified Successfully."
        })
    }
}


export async function otpTTLController (req,res){
    const phone = req.params.phone
    const ttl = await redis.ttl(redisKeyGenerator(phone));
    return res.status(200).json({
        "success":true,
        "message":ttl
    })
}

