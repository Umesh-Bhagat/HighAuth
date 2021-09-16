import React, { useCallback, useReducer } from "react";
import withStyles from "@material-ui/core/styles/withStyles";

import Card  from "../../UIElements/Card/Card.jsx";
import CardBody from "../../UIElements/Card/CardBody.jsx";
import CardFooter from "../../UIElements/Card/CardFooter.jsx";
import GridContainer from "../../UIElements/Grid/GridContainer.jsx";
import GridItem from "../../UIElements/Grid/GridItems.jsx";
import Input from "../../UIElements/CustomInputs/CustomInputs.jsx";
import Button from "../../UIElements/CustomButton/Button.jsx";
import AuthPageStyle from "../../assets/jss/Material-dashboard-react/AuthPageStyle.jsx";

import {VALIDATOR_REQUIRED,VALIDATOR_MINLENGTH} from "../../UtilFolder/Validator";

const formReducer = ( state , action ) =>{
     switch(action.type){
       case "INPUT_CHANGE":
         let formIsVAlid = true;
         for(const inputId in state.inputs){
           if(inputId === action.inputId){
             formIsVAlid = formIsVAlid && action.isValid;
           }else{
             formIsVAlid = formIsVAlid && state.inputs[inputId].isValid
           }
         }
         return{
           ...state,
           inputs:{
             ...state.inputs,
             [action.inputId]:{value:action.value, isValid:action.isValid}
           },
           isValid:formIsVAlid
         }

         default:
           return state;
     }
}

const Auth = ( props ) => {
 const { classes } = props;

 const [initialFormState , dispatch] = useReducer(
     formReducer,{
        inputs:{
          name:{
           value:"",
           isValid:"" 
          },
          emailId:{
            value:"",
            isValid:"" 
          },
          subjectName:{
            value:"",
            isValid:"" 
          },
          password:{
            value:"",
            isValid:"" 
          }
        },
        isValid:false
      }
   );

  const changeHandler = useCallback((id, value, isValid) =>{
    dispatch({
      type:"INPUT_CHANGE",
      value: value,
      isValid:isValid,
      inputId:id
    });
  }, []);

  const SubmitTheDeails = ( event) =>{
    event.preventDefault();
    console.log(initialFormState);
  }
    
 return(
   <div>
      <GridContainer 
        justify="center"
        style={{margin:"0%"}}
        > 
         <GridItem  xs={10} sm={10} md={4} style={{padding:"0 2%"}}>
     <Card
       style={{
        paddingTop:"0",
        backgroundColor: "rgb(253, 252, 252)",
        borderRadius: "1.5em 1.5em 1em 1em",
        boxShadow: "-6px 10px 6px rgb(82, 82, 86)",
        margin:"20% 0 10% 0"
       }}
     >
        <h2 style={{
                width: "96%",
                fontSize: "180%", 
                fontWeight: "800",
                padding:"6% 0% 1% 4%",
                margin:"0%",
                borderRadius: "15px 15px  0px 0px",
                color:"rgb(255, 255, 255)",
                backgroundColor: "rgb(181, 181, 182)"
             }}>login here</h2>
       <CardBody>
         <GridContainer>
           <form className={classes.formStyle}>
           <GridItem>
             <Input
               element="input"
               id="name"
               type="text"
               formControlProps={{
                fullWidth: true,
              }}
               lableText="name"
               errorText="please enter a valid user name"
               value={initialFormState.inputs.name.value}
               validators = {[VALIDATOR_REQUIRED()]}
               onInput={changeHandler}
              />
           </GridItem>
           <GridItem>
             <Input
               element="input"
               id="emailId"
               type="text"
               lable=" email id"
               lableText="email id"
               formControlProps={{
                fullWidth: true,
              }}
               errorText="please enter a valid email id"
               value={initialFormState.inputs.emailId.value}
               validators = {[VALIDATOR_REQUIRED()]}
               onInput={changeHandler}
             />
           </GridItem>
           <GridItem>
             <Input
               element="input"
               id="subjectName"
               type="text"
               lable=" subject name"
               lableText="subject name"
               formControlProps={{
                fullWidth: true,
              }}
               errorText="please enter a valid user name"
               value={initialFormState.inputs.subjectName.value}
               validators = {[VALIDATOR_REQUIRED()]}
               onInput={changeHandler}
             />
           </GridItem>
           <GridItem>
             <Input
               element="input"
               id="password"
               type="password"
               lable="password"
               lableText="password"
               formControlProps={{
                fullWidth: true,
              }}
               errorText="please enter a valid password at least 6 characters"
               validators = {[VALIDATOR_MINLENGTH(6)]}
               onInput={changeHandler}
               value={initialFormState.inputs.password.value}
             />
           </GridItem>
           </form>
         </GridContainer>
       </CardBody>
       <CardFooter>
         <Button onClick={SubmitTheDeails} >Submit</Button>
       </CardFooter>
     </Card>
     </GridItem>
    </GridContainer>
   </div>
 );
    
}

export default withStyles(AuthPageStyle)(Auth);