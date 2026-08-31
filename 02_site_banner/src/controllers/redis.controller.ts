import redis from "../config/redis.connection.ts";
import { BANNER_KEY } from "../index.ts";

export const setKeyInBannerController = async (req, res) => {
    const reply:string = await redis.set(BANNER_KEY, req.body.message || ".... dummy data added ....")

    return res.status(200).json({
        success: true,
        message: reply
    })
}
export const getKeyFromBannerController = async (req, res) => {
    const reply :string|null = await redis.get(BANNER_KEY)
    if(!reply){
        return res.status(200).json({
            success: false,
            message: "No data found"
        })
    }
    return res.status(200).json({
        success: true,
        message: reply
    })
}

export const deleteKeyFromBannerController = async (req, res) => {
    const reply:number = await redis.del(BANNER_KEY)

    return res.status(200).json({
        success: true,
        message: `Key deleted ${Boolean(reply)}`
    })
}

export const isKeyExistInBannerController = async (req, res) => {
    const reply:number = await redis.exists(BANNER_KEY)
    return res.status(200).json({
        success: true,
        message: reply
    })
}