const express = require("express");
const dotEnv = require("dotenv");
const swaggerConfigs = require("./src/configs/swagger.config");
const { allRoutes } = require("./src/routes");
const { NotFoundException } = require("./src/common/exceptions/notfound.exepcetions");
const { AllException } = require("./src/common/exceptions/all.exepcetions");
const cookieParser = require("cookie-parser");

const main = async () => {
    const app = express()
    dotEnv.config()
    const port = process.env.PORT

    require("./src/configs/mongo.config")

    app.use(express.json())
    app.use(express.urlencoded({ extended: true }))
    app.use(cookieParser(process.envCOOKIE_SECRET_KEY))
    app.use(allRoutes)

    swaggerConfigs(app)
    NotFoundException(app)
    AllException(app)
    app.listen(port, () => {
        console.log(`server run on : http://localhost:${port}`)
    })
}

main()


