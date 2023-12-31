const mongoose = require("mongoose");



const UserSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: Number, required: true },
  password: { type: String, required: true },
  isBlocked: { type: Boolean,default:false },
  image:{type:String}

});

module.exports = mongoose.model("User", UserSchema);


