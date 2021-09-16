import React from "react";
import CloseIcon from '@material-ui/icons/Close';

import Card from "../Card/Card.jsx";
import CardHeader from "../Card/CardHeader.jsx";
import CardBody from "../Card/CardBody.jsx";
import CustomInput from "../CustomInputs/CustomInputs.jsx";
import GridContainer from "../Grid/GridContainer.jsx";
import GridItems from "../Grid/GridItems.jsx";
import CustomButton from "../CustomButton/Button.jsx";


const TaskToCompleteForm = ( {...props} ) =>{

  const {classes,ToggleListToDoForm,ToggleGridForm,...rest}=props;

  const data ={
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
   Standart:{
     options:[
       { value:"Class 12 Sci. (Without Biology)",displayValue:"Class 12 Sci. (Without Biology)"},
        { value:"Class 12 Sci.(Without Maths)",displayValue:"Class 12 Sci.(Without Maths)"},
        { value:"Class 12 Commerce", displayValue:"Class 12 Commerce"},
        { value:"Class 12 Arts",displayValue:"Class 12 Arts"},
        { value:"Class 11 Sci.(Without Biology)",displayValue:"Class 11 Sci.(Without Biology)"},
        { value:"Class 11 Sci.(Without Maths)",displayValue:"Class 11 Sci.(Without Maths)"},
        { value:"Class 11 Commerce", displayValue:"Class 11 Commerce"},
        { value:"Class 11 Arts", displayValue:"Class 11 Arts" },
        { value:"Class 10",displayValue:"Class 10"},
        { value:"Class 9",displayValue:"Class 9" },
        { value:"Class 8",  displayValue:"Class 8"},
      ],
      value:"Class 10",
      isValid:"" 
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
  }

  const changeHandler = (data) =>{
      console.log(data)
  }
 return(
   <div style={{background:"rgb(35, 52, 79,.2)",paddingBottom:".5%"}}>
     <span 
          style={{
             float:"right",
             paddingRight:"4%",
             marginTop:"2%"
            }}
            onClick={(event)=>ToggleListToDoForm(event,true)}
          >
             <CloseIcon 
             style={{
               color:"red",
               width:"50px",
               padding:"0% 6%",
               background:"rgb(238, 240, 239)"
              }}/>
          </span>
     <div style={{padding:"4% 0"}}>
       <GridContainer justify="center" style={{padding:"0",margin:"0"}}>
         <GridItems xs={12} sm={6} md={6}>
           <Card >
             <CardHeader style={{borderBottom:"1px solid rgb(166, 166, 166)",background:"rgb(204, 204, 204)",color:"white"}}>Assign Task</CardHeader>
               <CardBody style={{background:"rgb(217, 217, 217,.4)"}}>
                 <GridContainer>
                   <GridItems xs={12} sm={12} md={12}>
                     <CustomInput 
                       element="select"
                       id="Class"
                       lableText="Class :"
                       options={data.Standart.options}
                       formControlProps={{
                          fullWidth: true,
                       }}
                       UnderlineInput
                       // dataValue={initialState.inputs.subject.value}
                       onInput={()=>changeHandler("its Search Fpr")}
                     />
                   </GridItems>
                   <GridItems xs={12} sm={12} md={7}>
                     <CustomInput 
                        element="select"
                        id="Subject"
                        lableText="Subject :"
                        options={data.subject.options}
                        formControlProps={{
                           fullWidth: true,
                        }}
                        UnderlineInput
                       // dataValue={initialState.inputs.subject.value}
                        onInput={()=>changeHandler("its Search Fpr")}
                     />
                   </GridItems>   
                   <GridItems xs={12} sm={12} md={5}>
                     <CustomInput
                        element="select"
                        id="Department"
                        lableText="Department :"
                        options={data.department.options}
                        formControlProps={{
                           fullWidth: true,
                        }}
                        UnderlineInput
                       // dataValue={initialState.inputs.subject.value}
                        onInput={()=>changeHandler("its Search Fpr")}
                     />
                   </GridItems>  
                   <GridItems  xs={12} sm={12} md={12}>
                     <CustomInput
                        element="textArea"
                        id="TextArea"
                        lableText="Note :"
                        formControlProps={{
                           fullWidth: true,
                        }}
                        NotesInputStyle
                       // dataValue={initialState.inputs.subject.value}
                       onInput={()=>changeHandler("its Search Fpr")}
                     />
                   </GridItems> 
                   <GridItems xs={12} sm={12} md={6}>
                     <CustomInput 
                        element="input"
                        id="Deadline"
                        type="date"
                        lableText="Deadline :"
                        formControlProps={{
                         fullWidth: true,
                        }}
                        UnderlineInput
                       // dataValue={initialState.inputs.subject.value}
                        onInput={()=>changeHandler("its Search Fpr")}
                     />
                   </GridItems> 
                   <GridItems xs={12} sm={6} md={6}>
                     <CustomButton 
                       style={{
                          marginTop:"20px",
                          padding:"5% 0 3% 0",
                          margin:"6% 0 3% 0",
                          fontSize:"16px",
                          fontWeight:"650"
                        }}>
                          Submit
                     </CustomButton>
                   </GridItems>   
                 </GridContainer>
               </CardBody>
             </Card>
           </GridItems>
         </GridContainer>
         <GridContainer style={{padding:"0",margin:".1%"}}>
           <GridItems xs={12} sm={12} md={12}>
             <CustomButton 
                style={{
                 width:"18%",
                 padding: "1% 0 .5% 0%",
                 fontSize:"16px",
                 fontWeight:"650",
                 float:"right",
                 boxShadow: "-10px 12px 10px -4px rgb(86, 84, 84)",
             }}
             onClick={(event)=>ToggleGridForm(event,true)}
             >
              Created List
           </CustomButton>
         </GridItems>
       </GridContainer>
     </div>
   </div>
 );
}

export default TaskToCompleteForm;