const teacherDetails = require('../../model/TeacherScema');
const HttpError = require('../../model/http-error');

const approvTeacher = async(req, res, next) =>{
    const techId = req.params.id;
     
    let existingUser ;
    try{
       existingUser = await teacherDetails.findOne({_id:techId});
    }catch(err){
        const error = new HttpError(
          "signing up failed , please try again later",
          500
        );
        return next(error);
    }
   
    res.json(existingUser)
}

const getAllExistingTeachers = (req, res, back) => {
    //get all existing teachers data
}

const getTeachersById = (req,res,back) =>{
    const teacherId = req.params.tid;
}

const deleteExistingAccounts = (req,res,back) =>{
    const teacherId = req.params.tid;
}

exports.approvTeacher = approvTeacher;
exports.getAllExistingTeachers = getAllExistingTeachers;
exports.getTeachersById = getTeachersById;
exports.deleteExistingAccounts = deleteExistingAccounts;