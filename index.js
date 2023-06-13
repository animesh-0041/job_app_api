const express=require("express");
const {userRouter}=require("./routes/user.route")
const {connection}=require("./db")
const cors = require('cors')


const app=express()
app.use(cors())
app.use(express.json())
app.use("/job",userRouter)


app.listen(8080,async()=>{
    try {
        await connection
        console.log("connected to DB");

        
    } catch (error) {
       console.log(error);
    }
    console.log("runing at 8080");

})
