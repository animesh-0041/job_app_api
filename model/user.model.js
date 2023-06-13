const mongoose=require("mongoose")

const userSchema=mongoose.Schema({
    company:{type:String,},
		postedAt:{type:String,},
		city: {type:String,},
		location: {type:String,},
		role: {type:String,},
		level:{type:String,},
		contract:{type:String,},
		position:{type:String,},
		language: {type:String,},
})
const UserModel=mongoose.model("job",userSchema)

module.exports={
    UserModel
}