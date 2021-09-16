import React , { useCallback, useEffect, useReducer }  from "react";
import PersonAddIcon from '@material-ui/icons/PersonAdd';

import PersonProfileForm from "../../UIElements/forms/ProfileForm.jsx";
import GridContainer from "../../UIElements/Grid/GridContainer.jsx";
import GridItem from "../../UIElements/Grid/GridItems.jsx";
import SelectAndSearchSubHeader from "../../UIElements/forms/SelectAndSearchForm.jsx";
import CreateNewAccount from "../../UIElements/forms/CreateNewTeacher.jsx";
import DataTable from "../../UIElements/forms/RepresentDataInTableForm.jsx";

const initialState = (state ,action) => {
    switch(action.type){
       case "TOGGLE_FORM" :
          return{
             ...state,
             toggle: true
         }
        case "TOGGLE-TEACHERS-FORM" :
           return{
              ...state,
              CreateNewBottonToggle:true,
              toggle:false
           }  
       
    }
}

const Teacher = ( props ) =>{

   const [teacherInfoState , dispatch] = useReducer( 
      initialState,{        
        toggle:false,
        CreateNewBottonToggle:false,
      }
   );

 const  EmployeeDetails = {
   subjectToDisplay:[
         "Name",
         "Role",
         "Subject",
         "Email id",
     ],
     Teachers:[
      ["1. mera", "teacher","hhfjfjf",'ddbhdhdbh@gmail.com'],
      ["2. dcdcec", "admin","none",'vfrvrvv4@gmail.com'],
      ["3. dcdcdcdc","teacher","ccdcdcdcc",'vvedddede@gmail.com'],
      ["4. defewffe", "field officer","vfvvrefe",'rjjshdhhdh@gmail.com'],
      ["5. ram","teacher","hindi",'frfrrgrgrg@gmail.com'],
      ["6. sam","teacher","english",'rrrgrgrgef@gmail.com'],
      ["7. geeta","teacher", "Physics",'gtgtgtgrgrg@gmail.com'],
      ["8. raavi","teacher", "geography",'tgtgtgrrr@gmail.com'],
      ["9. dinesh", "teacher","history",'gtgtgtgtgtgtg@gmail.com'],
      ["10. geeta", "teacher","Physics",'hgedghheh.com'],
      ["11. raavi", "teacher","geography",'2445sddvejeeded.com'],
      ["12. dinesh","teacher","history",'jjekeigtgtgtgtg@gmail.com'],
  ],
  Options:[
      {value:"Teacher",displayValue:"Teacher"},
      {value:"Field incharge", displayValue:"Field incharge"},
      {value:"Admin", displayValue:"Admin"},
      {value:"Head of department",displayValue:"Head of department"},
      {value:"Student",displayValue:"Student"},
  ]
   
 }

   const GetDetailInfo = (h) =>{
      dispatch({
         type:"TOGGLE_FORM"
      })
   }

   const CreateNewTeacherHandler = ( ) => {
      dispatch({
         type:"TOGGLE-TEACHERS-FORM"
      });
   }

   const inputChangeHandler = useCallback(()=>{
      console.log();
   },[]);

   let  TeacherDetailsForm ="";
   if(!teacherInfoState.CreateNewBottonToggle){
      TeacherDetailsForm=!teacherInfoState.toggle?(
         <div style={{padding:"4% 1.8%"}} >
         <SelectAndSearchSubHeader 
         PersonDetails= {EmployeeDetails.Options} 
         changeHandler={()=>inputChangeHandler()}
         SearchInput
         >    
          <button 
              style={{
                width:"auto",
                marginLeft:"2%",
                color:"white",
                background: "rgb(35, 52, 79,.4)",
                border:"1px solid rgb(128, 128, 128)",
                borderRadius:".3em",
                display:"flex",
                padding:"1% 5% 0 2%"
               }}
               onClick={CreateNewTeacherHandler}
           >
               <PersonAddIcon style={{color:"white",}}/>
               <span 
               style={{
                  fontWeight:"600",
                  color:"white",
                  fontSize:"18px",
                  padding:"5% 5% 0% 10%"
               }}>
                  Create
               </span>
           </button>
         </SelectAndSearchSubHeader> 
         <div style={{paddingTop:"3%"}}>
           <DataTable
             HeaderData={EmployeeDetails.subjectToDisplay}
             CompleteData={EmployeeDetails.Teachers}
             goBackButton="true"
             changeHandler={()=>GetDetailInfo()}
           /> 
        </div>
       </div>  
      ):(<PersonProfileForm/>);
   }
 let CreateNewDataPage = "";
 
 if(teacherInfoState.CreateNewBottonToggle){
    CreateNewDataPage = <CreateNewAccount/>
 }
 
   return(
      <div style={{background:"rgb(35, 52, 79,.2)"}}>
       {TeacherDetailsForm}
       {CreateNewDataPage}
      </div>
   );
}

export default Teacher;