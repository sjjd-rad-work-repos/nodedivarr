const { Router } = require("express");
const { authRoutes } = require("./modules/Auth/auth.routes");

const allRoutes = Router()
allRoutes.use("/auth",authRoutes)

module.exports ={allRoutes}