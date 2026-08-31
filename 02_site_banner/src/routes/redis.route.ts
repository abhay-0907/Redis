import express from 'express'
import { deleteKeyFromBannerController, getKeyFromBannerController, isKeyExistInBannerController, setKeyInBannerController } from '../controllers/redis.controller.ts'
const router = express.Router()

router.get('/banner',getKeyFromBannerController)

router.post('/banner',setKeyInBannerController)

router.delete('/banner', deleteKeyFromBannerController)

router.get('/banner/exists',isKeyExistInBannerController)

export default router