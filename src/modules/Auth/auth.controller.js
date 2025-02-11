const NODE_ENV = require("../../common/constants/env.enum");
const authService = require("./auth.service");
const autoBind = require("auto-bind")


class AuthController {

    #service;

    constructor() {
        this.#service = authService  
        autoBind(this)
    } 

    async sendOTP(req, res, next) {
        try {
           
            const {mobile}=req.body
            const result = await this.#service.sendOTP(mobile)
            return res.status(200).json({
                message:"test",
                result
            })

        } catch (error) {
            next(error)
        }
    }
    async checkOTP(req, res, next) {
        try {
            const {mobile,code}=req.body
            const token = await this.#service.checkOTP(mobile,code)
            res.cookie("access_token",token,{
                httpOnly:true,
                secret:process.env === NODE_ENV.production
            }).status(200).json({token})
        } catch (error) {
            next(error)
        }
    }
    async logOut(req, res, next) {
        try {

        } catch (error) {
            next(error)
        }
    }
}

module.exports = new AuthController()