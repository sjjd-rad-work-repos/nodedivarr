const swaggerJsDoc = require("swagger-jsdoc")
const swaggerUi = require("swagger-ui-express")


const swaggerConfigs = (app)=>{
    const swaggerDocument = swaggerJsDoc({
        swaggerDefinition:{
            openapi:"3.0.0",
            info:{
                title:"Divar back",
                description:"test in its",
                version:"1.0.0"
            }
        },
        apis:[process.cwd()+"/src/modules/**/*.swagger.js"],
    })
  const swagger =  swaggerUi.setup(swaggerDocument,{})


app.use("/",swaggerUi.serve,swagger)

}

module.exports =swaggerConfigs
