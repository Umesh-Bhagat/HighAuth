const express = require("express");
const mongoose = require('mongoose');

const HttpError = require("./model/http-error");
const teachersRoutes = require("./routes/teacher-routes/teacher-routes");
const authRoutes = require("./routes/authorities-routes/auth-routes");
const teacherSectionRoutes=require("./routes/authorities-routes/auth-teachers-routes");

const app = express();
 
app.use(express.json());

app.use("/teacher",teachersRoutes);
app.use("/high-auth",authRoutes);
app.use("/high-auth/teacher",teacherSectionRoutes);

app.use((req, res, next)=>{
 const error = new HttpError("could not find this route..", 404);
 throw error;
});

app.use((error, req, res, next) =>{
    if(res.headersSent){
        return next(error);
    }
    res.status(error.code || 500 );
    res.json({message : error.message || "An unknown error occured.." });
});

mongoose.connect(
    "mongodb+srv://umesh_reo:QGAf0p854YfqAIIA@cluster0.aa1re.mongodb.net/sttepalink?retryWrites=true&w=majority",{ useNewUrlParser: true, useUnifiedTopology: true }
 ).then(() => {
     app.listen(3000);
     console.log("connected to the surver")
 }).catch( (err) => {
     console.log("connection failed")
     console.log(err);
 });
