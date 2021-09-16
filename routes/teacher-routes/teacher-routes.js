const express = require("express");
const router = express.Router();
const {check}= require("express-validator");
const teacherController = require("../../controller/Teacher-controller");

router.post("/requesttosignup",
            [// check("name").not().isEmpty(),
              check('email').normalizeEmail().isEmail(),
              check("subject").not().isEmpty(),
           //   check("dateOfBirth").not().isEmpty(),
           //   check("contactNo").not().isEmpty(),
           //   check("houseAddress").not().isEmpty(),
           //   check("landMark").not().isEmpty(),
           //   check("postOffice").not().isEmpty(),
           //   check("district").not().isEmpty(),
           //   check("state").not().isEmpty(),
           //   check("pinCode").not().isEmpty(),
              check('password').isLength({ min: 7 })
               .withMessage('must be at least 12 chars long')
               .matches(/\d/)
               .withMessage('must contain a number'),
            ],
             teacherController.teacherSignup);
router.post("/login",teacherController.teacherLogin);
router.get("/teacher/:id",teacherController.getTeacherById);

module.exports = router;