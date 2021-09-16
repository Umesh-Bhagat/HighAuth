const authLogin = (req, res, next)=>{
    const {name , email,subject, password} = req.body; 

    const teacherDetails = {
        name,
        email,
        subject,
        password
    }

    res.send(teacherDetails);
}

const homePage = (req, res, next) =>{
  //home page contain data like :
  //sales graph and all sales related staff
};

const sales = (req, res ,next) =>{
    //sales
}

exports.authLogin = authLogin;
exports.homePage = homePage;
exports.sales = sales;
