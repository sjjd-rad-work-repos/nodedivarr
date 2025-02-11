const { Schema, model } = require("mongoose");


const otpSchema = new Schema({
 code:{
    type:String,
    required:false,
    default:undefined
 },
 expireIn:{
    type:Number,
    required:false,
    default:0
 }
})


const userSchema = new Schema({
    fullName:{
        type:String,
        required:false,
    },
    mobile:{
        type:String,
        required:true,
        unique:true
    },
    otp:{
        type:otpSchema,
    },
    verifiedMobile:{
        type:Boolean,
        default:false,
        required:true,
    }
},{
    timestamps:true
})

const UserModel = model("user",userSchema)

module.exports = UserModel
