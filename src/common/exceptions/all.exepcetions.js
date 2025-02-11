const AllException =(app)=>{
    app.use((err,req,res,next)=>{
        const status = err?.status ?? err?.statusCode ?? 500
        const message = err?.message ?? "Internal Server Error"
        res.status(status).json({
            message
        })
    })
}

module.exports ={AllException}