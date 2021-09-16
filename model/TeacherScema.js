const mongoose = require("mongoose");
const uniqueValidator = require("mongoose-unique-validator");

const teacherSchema = new mongoose.Schema({
//  name:{type:String, required: true},
  email:{type:String,required:true,unique:true},
  subject:{type:String,required:true},
//  dateOfBirth:{type:String,required:true},
  password:{type:String,required:true,minlength:7},
 // contactNo:{type:String,required:true},
 // address:{
 //   houseAddress:{type:String,required:true},
 //   landMark:{type:String,required:true},
 //   postOffice:{type:String,required:true},
 //   district:{type:String,required:true},
 //   state:{type:String,required:true},
 //   pinCode:{type:String,required:true}
 // }
});

teacherSchema.plugin(uniqueValidator);

module.exports = mongoose.model('teacherDetails', teacherSchema);