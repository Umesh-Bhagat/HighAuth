const express = require("express");
const router = express.Router();
const HighAuthController = require("../../controller/high-auth-controller/auth-teacher-controller");


router.get("/new-teacher",HighAuthController.newTeacher)
router.get("/approve/:id",HighAuthController.approvTeacher);
router.get("/teachers-info",HighAuthController.getAllExistingTeachers);
router.get("/teacher-info/:tid",HighAuthController.getTeachersById);
router.delete("/delete/:tid",HighAuthController.deleteExistingAccounts);


module.exports = router ;


//router.patch("/update",(req,res,next)=> {
//  const {name,email,subject,password} = req.body;
//
//  const updateTeacherDetails = {
//      name, 
//      email,
//      subject, 
//      password
//  }
//
//  res.send(updateTeacherDetails);
//});