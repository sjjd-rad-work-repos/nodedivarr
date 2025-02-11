const { default: mongoose } = require("mongoose");
const dotenv = require("dotenv")
dotenv.config()
mongoose.connect(process.env.MONGO_URL)
    .then(() => {
        console.log("connected to db")
    })
    .catch((err) => {
        console.log(err.message ?? "faild to connect to db")
    })