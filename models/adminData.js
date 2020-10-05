const mongoose = require("mongoose");
const bcrypt = require('bcrypt');
const saltRounds = 10;

const Schema = mongoose.Schema;
const adminSchema = new Schema({
  email: {
    type: String,
    required: true,
    unique:true
  },
  password: {
    type: String, 
    required: true
  },
},{timestamps: true});

adminSchema.pre('save', function(next){
  if(this.isNew){
    const salt = bcrypt.genSaltSync(saltRounds);
    const hash = bcrypt.hashSync(this.password,salt);
    this.password = hash;
  };
  next()
  })
adminSchema.methods.validPassword=function(password){
  return bcrypt.compareSync(password, this.password);
}


module.exports = mongoose.model("adminData", adminSchema);
