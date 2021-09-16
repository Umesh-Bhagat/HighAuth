import React, { useCallback,useReducer } from "react";

import Card from "../Card/Card.jsx";
import CardHeader from "../Card/CardHeader.jsx";
import CardBody from "../Card/CardBody.jsx";
import CardFooter from "../Card/CardFooter.jsx";
import GridContainer from "../Grid/GridContainer.jsx";
import GridItem from "../Grid/GridItems.jsx";
import CustomInput from "../CustomInputs/CustomInputs.jsx";
import CustomButton from "../CustomButton/Button.jsx";
import {VALIDATOR_REQUIRED ,VALIDATOR_MINLENGTH ,VALIDATOR_EMAIL } from "../../UtilFolder/Validator";



const inputReducer = (state , action) =>{
    switch(action.type){
        case "Input_Change":
            let formIsValid = true;
            
            for(const inputId in state.inputs){
                if(inputId === action.inputId){
                 formIsValid = formIsValid && action.isValid
                }else{
                 formIsValid = formIsValid && state.inputs[inputId].isValid
                }
            }

            let StateCopy = '';
            if(action.options === undefined){
               StateCopy = {value:action.value, isValid: action.isValid}
            }else{
               StateCopy = { 
                     value:action.value, 
                     options:action.options,
                     isValid: action.isValid
               }
            }
            return{
                ...state,
                inputs:{
                    ...state.inputs,
                    [action.inputId]: StateCopy
                },
                isValid: formIsValid
            }
            
           case "TOGGLE-GENDER" :
               return {
                  ...state,
                  inputs:{
                     ...state.inputs,
                     gender:{
                        value:action.gender,
                        isValid:true,
                        isClicked:action.isClicked
                     }
                  }
               }
            default :
            return state;
    }
}

const CreateTeacherForm = ( props ) =>{
   console.log("reprr")
   const [initialState , dispatch] = useReducer(
      inputReducer , {
          inputs:{
              name:{
                 value:" ",
                 isValid:" "
              },
              gender:{
                value:"",
                options:[
                  {value:"select", displayValue:"select"},
                  {value:"male", displayValue:"male"},
                  {value:"female", displayValue:"female"},
                 ],
                isValid:"",
              },
              emailId:{
                value:" ",
                isValid:" "
              },
              contactNo:{
                value:" ",
                isValid:" "
              },
              role:{
                isValid:" ",
                options:[
                    {value:"select", displayValue:"select"},
                    {value:"Admin", displayValue:"Admin"},
                    {value:"Field incharge", displayValue:"Field incharge"},
                    {value:"Head of department",displayValue:"Head of department"},
                    {value:"Student",displayValue:"Student"},
                    {value:"Teacher",displayValue:"Teacher"},
                   ],
                value:" "       
               },
              dateOfBirth:{
                value:" ",
                isValid:" "
              },
              department:{
                options:[
                  {value:"select", displayValue:"select"},
                  {value:"Arts", displayValue:"Arts"},
                  {value:"Commerce", displayValue:"Commerce"},
                  {value:"Science",displayValue:"Science"},
                  {value:"Mathematics",displayValue:"Mathematics"},
                  {value:"Computer Science",displayValue:"Computer Science"},
                  {value:"None of the above", displayValue:"None of the above"},
                ],
                value:"",
                isValid:"",
               },
              teacherId:{
                value:" ",
                isValid:" "
              },
              subject:{
                options:[
                  {value:"select", displayValue:"select"},
                  {value:"English", displayValue:"English"},
                  {value:"Mathematics", displayValue:"Mathematics"},
                  {value:"Hindi",displayValue:"Hindi"},
                  {value:"Biology",displayValue:"Biology"},
                  {value:"Physics",displayValue:"Physics"},
                  {value:"Chemistry",displayValue:"Chemistry"},
                  {value:"History",displayValue:"History"},
                  {value:"Geography",displayValue:"Geography"}, 
                  {value:"Political Science",displayValue:"Political Science"},
                  {value:"Disaster Management",displayValue:"Disaster Management"},
                  {value:"Economics",displayValue:"Economics"},
                  {value:"None of the above", displayValue:"None of the above"},
                ],
                value:"",
                isValid:""
              },
              houseAddress:{
                value:" ",
                isValid:" "
              },
              fatherName:{
               value:" ",
               isValid:" ",
              },
              street:{
                value:" ",
                isValid:" "
              },
              district:{
                value:" ",
                isValid:" "
              },
              postOffice:{
                value:" ",
                isValid:" "
              },
              mobileNo:{
               value:" ",
               isValid:" "
              },
              state:{
                value:" ",
                isValid:" "
               },
              zipCode:{
                value:" ",
                isValid:" "
               },
              password:{
                value:" ",
                isValid:" "
               },
              confirmPassword:{
                value:" ",
                isValid:" "
               }
            },
            isValid:false
         }
     );

     
    const changeHandler = useCallback(( val , id , isValid,options) =>{
        dispatch({
            type:"Input_Change",
            value: val,
            isValid:isValid,
            inputId:id,
            options:options
        })
    },[ ]);
    return(
     
        <div style={{padding:"1% 1% 1% 1%",background:"white"}}>
         <Card style={{background:"rgb(242, 242, 242,.8)",margin:"0%",boxShadow:"none",border:"1px solid #bfbfbf"}}>
              <CardHeader style={{font:"rgb(89,89,89)",padding:"3% 4% 2% 4%"}} >
                 Teacher Registration Form
                 <hr/></CardHeader>
              <CardBody 
               style={{
                 fontSize:"16px",
                 font:"rgb(166, 166, 166)",
                 fontWeight:"600",
                 maxHeight:"410px",
                 padding:"0 4% 3% 4%",
                 overflow:"auto"
               }}> 
                  <GridContainer>
                      <GridItem xs={12} sm={4} md={4} >
                          <label>Enter Full Name </label>
                          <CustomInput
                             element="input"
                             id="name"
                             type="text"
                             formControlProps={{
                                fullWidth: true,
                             }}
                             LineInputStyle
                            // lableText="name"
                             errorText="please enter a valid user name"
                             dataValue={initialState.inputs.name.value}
                             validators = {[VALIDATOR_REQUIRED()]}
                             onInput={changeHandler}
                          />
                     </GridItem>
                     <GridItem xs={12} sm={4} md={4}>
                         <label>Enter Email Id</label>
                         <CustomInput
                             element="input"
                             id="emailId"
                             type="email"
                             formControlProps={{
                                fullWidth: true,
                             }}
                           //  lableText="Email Id"
                           LineInputStyle
                             errorText="please enter a valid user name"
                             dataValue={initialState.inputs.emailId.value}
                             validators = {[VALIDATOR_REQUIRED(),VALIDATOR_EMAIL()]}
                             onInput={changeHandler}
                           />
                       </GridItem>
                       <GridItem xs={4} sm={4} md={4}>
                          <label>Gender</label>
                          <CustomInput
                            element="select"
                            id="gender"
                            formControlProps={{
                               fullWidth: true,
                            }}
                            LineInputStyle
                            options = {initialState.inputs.gender.options}
                            dataValue={initialState.inputs.gender.value}
                            validators = {[VALIDATOR_REQUIRED()]}
                            onInput={changeHandler}
                          />
                        </GridItem>
                  </GridContainer>
                     
                  <GridContainer style={{paddingTop:"2%"}}>
                       <GridItem xs={12} sm={4} md={4}>
                         <label>Enter Contact Number:</label>
                         <CustomInput
                             element="input"
                             id="contactNo"
                             type="number"
                             formControlProps={{
                                fullWidth: true,
                             }}
                           //  lableText="Email Id"
                           LineInputStyle
                             errorText="please enter a valid 10 digit Number"
                             dataValue={initialState.inputs.contactNo.value}
                             validators = {[VALIDATOR_REQUIRED()]}
                             onInput={changeHandler}
                           />
                       </GridItem>
                       <GridItem xs={6} sm={4} md={4}>
                         <label>Enter Date Of Birth</label>
                          <CustomInput
                             element="input"
                             id="dateOfBirth"
                             type="date"
                             formControlProps={{
                                fullWidth: true,
                             }}
                             LineInputStyle
                             errorText="please choose a valid gender"
                             dataValue={initialState.inputs.dateOfBirth.value}
                             validators = {[VALIDATOR_REQUIRED()]}
                             onInput={changeHandler}
                          />
                       </GridItem>
                       <GridItem xs={4} sm={4} md={4}>
                          <label>Role</label>
                          <CustomInput
                            element="select"
                            id="role"
                            formControlProps={{
                               fullWidth: true,
                            }}
                            LineInputStyle
                            options = {initialState.inputs.role.options}
                            dataValue={initialState.inputs.role.value}
                            validators = {[VALIDATOR_REQUIRED()]}
                            onInput={changeHandler}
                          />
                        </GridItem>
                       </GridContainer>
                       
                       <GridContainer style={{paddingTop:"2%"}}>
                           <GridItem xs={4} sm={4} md={4}>
                              <label>Subject</label>
                              <CustomInput
                                 element="select"
                                 id="subject"
                                 formControlProps={{
                                    fullWidth: true,
                                 }}
                                 LineInputStyle
                                 options={initialState.inputs.subject.options}
                                 dataValue={initialState.inputs.subject.value}
                                 onInput={changeHandler}
                               />
                           </GridItem>
                           <GridItem xs={4} sm={4} md={4}>
                              <label>department</label>
                              <CustomInput
                                 element="select"
                                 id="department"
                                 formControlProps={{
                                    fullWidth: true,
                                 }}
                                 LineInputStyle
                                 options = {initialState.inputs.department.options}
                                 dataValue={initialState.inputs.department.value}
                                 onInput={changeHandler}
                               />
                           </GridItem>
                           <GridItem xs={4} sm={4} md={4}>
                               <label>Teacher's Unique Id</label>
                               <CustomInput
                                 element="text"
                                 id="teacherId"
                                 formControlProps={{
                                    fullWidth: true,
                                 }}
                                 LineInputStyle
                                 dataValue={initialState.inputs.teacherId.value}
                                 validators = {[VALIDATOR_REQUIRED()]}
                                 onInput={changeHandler}
                               />
                           </GridItem>
                       </GridContainer>
                       <GridContainer style={{paddingTop:"3%"}}>
                           <GridItem 
                           xs={12} sm={12} md={12}
                           style={{
                               color:"rgb(102, 102, 102)",
                               fontSize:"22px",
                               fontWeight:"600",
                               paddingTop:"1%"
                           }}
                           >
                               Address :
                           </GridItem>
                       </GridContainer>

                      <GridContainer style={{paddingTop:"2%"}}>
                       <GridItem xs={6} sm={6} md={6}>
                       <label>House Address :</label>
                          <CustomInput
                             element="input"
                             id="houseAddress"
                             type="text"
                             formControlProps={{
                                fullWidth: true,
                             }}
                            // lableText="House Address"
                             LineInputStyle
                             errorText="please enter a valid home address"
                             dataValue={initialState.inputs.houseAddress.value}
                             validators = {[VALIDATOR_REQUIRED()]}
                             onInput={changeHandler}
                           />
                      </GridItem>
                      <GridItem xs={6} sm={6} md={6}>
                      <label>Father Name</label>
                          <CustomInput
                             element="input"
                             id="fatherName"
                             type="text"
                             formControlProps={{
                                fullWidth: true,
                             }}
                           //  lableText="Father Name"
                             LineInputStyle
                             errorText="please enter a valid name"
                             dataValue={initialState.inputs.fatherName.value}
                             validators = {[VALIDATOR_REQUIRED()]}
                             onInput={changeHandler}
                           />
                      </GridItem>
                      <GridItem xs={6} sm={4} md={4}>
                      <label>Street :</label>
                          <CustomInput
                             element="input"
                             id="street"
                             type="text"
                             formControlProps={{
                                fullWidth: true,
                             }}
                            // lableText="Street"
                             LineInputStyle
                             errorText="please enter a valid Street"
                             dataValue={initialState.inputs.street.value}
                             validators = {[VALIDATOR_REQUIRED()]}
                             onInput={changeHandler}
                           />
                      </GridItem>
                      <GridItem xs={6} sm={4} md={4}>
                      <label>District :</label>
                          <CustomInput
                             element="input"
                             id="district"
                             type="text"
                             formControlProps={{
                                fullWidth: true,
                             }}
                            // lableText="District"
                             LineInputStyle
                             errorText="please enter a valid home address"
                             dataValue={initialState.inputs.district.value}
                             validators = {[VALIDATOR_REQUIRED()]}
                             onInput={changeHandler}
                           />
                      </GridItem>
                      <GridItem xs={6} sm={4} md={4}>
                      <label>Post Office :</label>
                          <CustomInput
                             element="input"
                             id="postOffice"
                             type="text"
                             formControlProps={{
                                fullWidth: true,
                             }}
                           //  lableText="Post Office"
                             LineInputStyle
                             errorText="please enter a valid home address"
                             dataValue={initialState.inputs.postOffice.value}
                             validators = {[VALIDATOR_REQUIRED()]}
                             onInput={changeHandler}
                           />
                      </GridItem>
                      <GridItem xs={6} sm={4} md={4}>
                      <label>State :</label>
                          <CustomInput
                             element="input"
                             id="state"
                             type="text"
                             formControlProps={{
                                fullWidth: true,
                             }}
                            // lableText="State"
                             LineInputStyle
                             errorText="please enter a valid home address"
                             dataValue={initialState.inputs.state.value}
                             validators = {[VALIDATOR_REQUIRED()]}
                             onInput={changeHandler}
                           />
                      </GridItem>
                      <GridItem xs={6} sm={4} md={4}>
                      <label>Zip Code :</label>
                          <CustomInput
                             element="input"
                             id="zipCode"
                             type="text"
                             formControlProps={{
                                fullWidth: true,
                             }}
                            // lableText="Zip Code"
                             LineInputStyle
                             errorText="please enter a valid home address"
                             dataValue={initialState.inputs.zipCode.value}
                             validators = {[VALIDATOR_REQUIRED()]}
                             onInput={changeHandler}
                           />
                      </GridItem>
                      <GridItem xs={6} sm={4} md={4}>
                      <label>Mobile No. :</label>
                          <CustomInput
                             element="input"
                             id="mobileNo"
                             type="text"
                             formControlProps={{
                                fullWidth: true,
                             }}
                            // lableText="Mobile No."
                             LineInputStyle
                             errorText="please enter a valid home address"
                             dataValue={initialState.inputs.mobileNo.value}
                             validators = {[VALIDATOR_REQUIRED()]}
                             onInput={changeHandler}
                           />
                      </GridItem>
              </GridContainer>
              <GridContainer style={{paddingTop:"2%"}}>
                      <GridItem xs={12} sm={4} md={4} >
                         <label>Create Password </label>
                         <CustomInput
                            element="input"
                            id="password"
                            type="password"
                            formControlProps={{
                               fullWidth: true,
                            }}
                            LineInputStyle
                            lableText="Enter Password"
                            errorText="please enter a valid user name"
                            dataValue={initialState.inputs.password.value}
                            validators = {[VALIDATOR_REQUIRED()]}
                            onInput={changeHandler}
                         />
                       </GridItem>
                       
                       <GridItem xs={12} sm={4} md={4} >
                         <label>Confirm Password </label>
                         <CustomInput
                            element="input"
                            id="confirmPassword"
                            type="password"
                            formControlProps={{
                               fullWidth: true,
                            }}
                            LineInputStyle
                            lableText="Re-Enter Password"
                            errorText="please enter a valid user name"
                            dataValue={initialState.inputs.confirmPassword.value}
                            validators = {[VALIDATOR_REQUIRED()]}
                            onInput={changeHandler}
                         />
                       </GridItem>
                       <GridItem 
                        style={{paddingTop:"2.4%"}}
                       xs={12} sm={4} md={4} >
                       <CustomButton 
                       //onClick={SubmitTheDeails} 
                       >
                           Submit
                       </CustomButton>
                       </GridItem>
                  </GridContainer>
             </CardBody>
         </Card>
        </div>
    );
} 

export default CreateTeacherForm;