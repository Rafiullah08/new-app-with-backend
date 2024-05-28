import mongoose, { Schema } from "mongoose";

const userSchema = new mongoose.Schema({
name:{
  type : String,
  require : true
},
email: {
  type: String,
  require
}
})


const userModel = mongoose.model("user", userSchema)

export default userModel;