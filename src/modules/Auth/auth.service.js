const createHttpError = require("http-errors");
const UserModel = require("../User/user.model");
const { authMessages } = require("./auth.messages");
const { randomInt } = require("crypto")
const jwt = require("jsonwebtoken")
class AuthService {
    #model;
    constructor() {
        this.#model = UserModel
    }
    async sendOTP(mobile) {

        const user = await this.#model.findOne({ mobile })
        const now = new Date().getTime()
        const code = randomInt(10000, 99999)
        const otp = {
            code,
            expireIn: now + (1000 * 60 * 2),
        }

        if (!user) {
            const newUser = await this.#model.create({ otp, mobile })
            return newUser
        }

        if (user.otp.code && user.otp.expireIn > now) throw new createHttpError.BadRequest(authMessages.badRequest);

        user.otp = otp
        await user.save()
        return user
    }
    async checkOTP(mobile, code) {
        const now = new Date().getTime()
        const user = await this.IsUserExist(mobile)
        if (user.otp.code === code && user.otp.expireIn > now) {
            if (!user.verifiedMobile) {
                user.verifiedMobile = true
                await user.save()
            }
            const accessToken = this.GenerateLoginToken({ mobile, id: user._id })
            return accessToken
        }
        else throw new createHttpError.BadRequest(authMessages.OtpTimeOut);

    }
    async IsUserExist(mobile) {
        const user = await this.#model.findOne({ mobile })
        if (!user) throw new createHttpError.BadRequest(authMessages.NotValidUser);
        return user
    }

    async GenerateLoginToken(payload) {
        return jwt.sign(payload, process.env.JWT_SECRET_KEY, { expiresIn: "1y" })
    }
}

module.exports = new AuthService()