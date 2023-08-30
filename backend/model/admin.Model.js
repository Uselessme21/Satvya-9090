const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: Number, required: true },
    location: { type: String, required: true },
    role:{type: String, enum:['Manager','employee'], default:'employee'},
    password:{type:String, required:true}
  }
)


const UserModel = mongoose.model("user", userSchema)

module.exports = UserModel