const express = require("express");
const router = express.Router();

const HighAuthController = require("../../controller/high-auth-controller/high-auth-controller");

router.post("/login",HighAuthController.authLogin);
router.get("/home-page",HighAuthController.homePage);
router.get("/sales",HighAuthController.sales);

module.exports = router ;