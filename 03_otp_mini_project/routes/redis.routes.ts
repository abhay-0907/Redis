import { Router } from "express";
import { otpTTLController, sendOtpController, verifyOtpController } from "../controllers/redisOtp.controller.ts";

const router = Router()


router.post("/send/otp",sendOtpController);
router.post("/verify/otp",verifyOtpController);
router.get("/otp/ttl/:phone",otpTTLController);

export default router;