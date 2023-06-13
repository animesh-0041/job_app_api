const express=require("express")
const {UserModel}=require("../model/user.model")
const userRouter=express.Router()


userRouter.post("/post",async(req,res)=>{
    try {
        const job =new UserModel(req.body)
         await job.save()
         res.send({"msg":"job habben posted"})
    } catch (error) {
        res.send(error)
    }
})
userRouter.get("/list",async(req,res)=>{
    try {
        const posts=await UserModel.find()
        res.send(posts)
         
    } catch (error) {
        res.send(error)
    }
})

module.exports={
    userRouter
}