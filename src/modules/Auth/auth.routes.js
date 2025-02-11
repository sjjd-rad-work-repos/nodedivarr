const { Router } = require("express");
const authController = require("./auth.controller");


const authRoutes = Router()
authRoutes.post("/send-otp",authController.sendOTP)
authRoutes.post("/check-otp",authController.checkOTP)

module.exports ={authRoutes}