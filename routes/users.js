const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/practicekaro").then(()=>{
  console.log("connected database")
})

const userSchema = mongoose.Schema({
       username:String,
       name:String,
       age:Number
})

module.exports =  mongoose.model("user",userSchema);
