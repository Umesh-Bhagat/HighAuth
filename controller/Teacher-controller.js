const teacherDetails = require('../model/TeacherScema');
const HttpError = require('../model/http-error');
const {validationResult}= require('express-validator')

const teacherSignup = async (req, res, next)=>{

    const error = validationResult(req);

    if(!error.isEmpty()){
        const error =  new HttpError("invalid input is pass please check your data",422);
        return next(error);
    }

    const {email,password,subject} = req.body;
    let existingUser ;
    try{
        existingUser = await teacherDetails.findOne({email:email});
    }catch(err){
        const error = new HttpError(
          "signing up failed , please try again later",
          500
        );
        return next(error);
    }

    if(existingUser){
        const error = new HttpError(
            "User existing already, please logn instant",
            422
        );
        return next(error);
    }

    const createTeacher = new teacherDetails({
       
         email,
         subject,
         password,
       //name, dateOfBirth,contactNo,
       // address:{
       //     houseAddress,
       //     landMark,
       //     postOffice,
       //     district,
       //     state,
       //     pinCode
       // }
    });
    
    try{
      await createTeacher.save();
    }catch(err){
        const error = new HttpError(
         "signing up failed , please try again",
          500
        );
        return next(error);
    }
    res.status(201).json({teacher : createTeacher.toObject({getters:true} )});
}


const teacherLogin = async(req , res , next) =>{
    //const getTeacher = teacherDetails.findById();
}

const getTeacherById = async (req,res,next) =>{
    const getTeacher = teacherDetails.findById();
}

exports.teacherSignup = teacherSignup ;
exports.teacherLogin = teacherLogin;
exports.getTeacherById = getTeacherById;