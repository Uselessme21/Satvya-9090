const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: Number, required: true },
    location: { type: String, required: true },
    Enquiry:{type: String, enum:['Construction','Other','Complaint'], default:'Construction'},
    status:{type:String, enum:['Pending', 'Solved'],default:'Pending'}
  }
)


const UserModel = mongoose.model("user", userSchema)

module.exports = UserModel