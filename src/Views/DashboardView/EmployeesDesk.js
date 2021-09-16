import React, { useReducer } from "react"
import withStyles from "@material-ui/core/styles/withStyles";
import CloseIcon from '@material-ui/icons/Close';

import LibraryAddIcon from '@material-ui/icons/LibraryAdd';
import LibraryAddCheckIcon from '@material-ui/icons/LibraryAddCheck';
import AssignmentTurnedInIcon from '@material-ui/icons/AssignmentTurnedIn';

import CompletedTaskForm from "../../UIElements/forms/CompletedTaskForm.jsx";
import GrantPermissionSummaryForm from "../../UIElements/forms/GrantPermissionSummaryForm.jsx";
import GrantPermissionDetailsForm from "../../UIElements/forms/GrantPerissionDetailsForm.jsx";
import NoteDispalyForm from "../../UIElements/forms/NoteDiaplay.jsx";

import Card from "../../UIElements/Card/Card.jsx";
import CardBody from "../../UIElements/Card/CardBody.jsx";
import GridContainer from "../../UIElements/Grid/GridContainer.jsx";
import GridItems from "../../UIElements/Grid/GridItems.jsx";

import WorkDoneTable from "../../UIElements/forms/RepresentDataInTableForm.jsx";
import TaskToCompleteForm from "../../UIElements/forms/TaskToCompleteForm.jsx";
import WorkToDoSummaryGrid from "../../UIElements/forms/SummaryGrid.jsx";

import EmployeeDeskStyle from "../../assets/jss/Material-dashboard-react/EmployeeDeskStyle.jsx";


const EmployeesDetailsState = ( state , action ) =>{
   switch(action.type){
      case "TOGGLE-FORMS" :
         return{
            ...state,
            completedTask:action.completedTask,
            grantPermission:action.grantPermission,
            taskToComplete:action.taskToComplete
         }
         case "TOGGLE-GRID" :
            return{
              ...state,
              toggleGrid:action.toggleGrid,
            }
         case "TOGGLE-NOTEACCESS":
            return{
               ...state,
               ToggleAccessNote:action.ToggleAccessNote
            }
         case "CREATED-NOTES-FORM-TOGGLE" :
            return{
               ...state,
               ToggleCreatedNotesForm:action.ToggleCreatedNotesForm
            }

         case "GET-CREATED-NOTES-HISTORY":
            return{
               ...state,
               toggleHistoryForm:action.toggleHistoryForm
            }
      default :
      return state  ; 
   }
}

const EmployeesDetails = ({...props}) => {

   const {classes,...rest}=props;

   const [initialState , dispatch] = useReducer(
      EmployeesDetailsState,{
         taskToComplete:false,
         grantPermission:false,
         completedTask:false,
         toggleGrid:false,
         ToggleAccessNote:true,
         ToggleCreatedNotesForm:true,
         toggleHistoryForm:true,
      })

   const DataForTable = {
      HeaderName: [
         "Class",
         "Stream",
         "Teacher",
         "Subject Name"
      ],
      TaskCompletedData: [
         ["hghjdghjd", "ifliyl", "lfblbeb", "dluyblhb"],
         ["cdddccdc","dwwdwd","ddwdw", "wwdwdwdw"],
         ["ddwwddd","dwdwdw","dwdwdwd", "dwefrgrg"],
         ["vffverve","cdcdcdc","cdcdcdc", "ccdcdc"],
         ["cdcdcdcdc","cdcdcd","ccdcdc", "cdcdcdc"],
         ["hghjdghjd", "ifliyl", "lfblbeb", "dluyblhb"],
         ["cdddccdc","dwwdwd","ddwdw", "wwdwdwdw"],
         ["ddwwddd","dwdwdw","dwdwdwd", "dwefrgrg"],
         ["vffverve","cdcdcdc","cdcdcdc", "ccdcdc"],
         ["cdcdcdcdc","cdcdcd","ccdcdc", "cdcdcdc"],
         ["hghjdghjd", "ifliyl", "lfblbeb", "dluyblhb"],
         ["cdddccdc","dwwdwd","ddwdw", "wwdwdwdw"],
         ["ddwwddd","dwdwdw","dwdwdwd", "dwefrgrg"],
         ["vffverve","cdcdcdc","cdcdcdc", "ccdcdc"],
         ["cdcdcdcdc","cdcdcd","ccdcdc", "cdcdcdc"],
      ]
   }

  const workProgressToggleButton = ( id ) =>{
     let completedTask = false;
     let taskToComplete=false;
     let grantPermission= false;

     if(id === "completedTask"){
        completedTask = true;
     }
     if(id === "taskToComplete"){
      taskToComplete = true;
   }
   if(id === "grantPermission"){
      grantPermission = true;
   }

    dispatch({
       type:"TOGGLE-FORMS",
       taskToComplete:taskToComplete,
       completedTask:completedTask,
       grantPermission:grantPermission,
    })
  }

  const ToggleGridForm = (event,ToggleBoolen) =>{
     event.preventDefault();
     dispatch({
       type:"TOGGLE-GRID",
       toggleGrid:ToggleBoolen
     });
   }

   const AccessToNoteDetails = (event , assessNoteBoolen) =>{
      event.preventDefault();
      dispatch({
         type:"TOGGLE-NOTEACCESS",
         ToggleAccessNote:assessNoteBoolen
       });
   }

   const ToggleCreatedForm = ( ) =>{
      console.log(!initialState.ToggleCreatedNotesForm);
      dispatch({
         type:"CREATED-NOTES-FORM-TOGGLE",
         ToggleCreatedNotesForm:!initialState.ToggleCreatedNotesForm
      });
   }

   const GetHistoryToggleHandler= ( ) =>{
      dispatch({
         type:"GET-CREATED-NOTES-HISTORY",
         toggleHistoryForm : !initialState.toggleHistoryForm
      })
   }
  let EmployDeskFrontPage = !initialState.completedTask && !initialState.taskToComplete && !initialState.grantPermission === true? (
   <div>
   <div>
      <Card 
      className={classes.ModifiedCardStyle}
      >
        <CardBody>
           <GridContainer>
              <GridItems xs={6} sm={4} md={3} >
                 <div
                   className={classes.modifiedButton}
                    id="taskToComplete"
                    onClick={()=>workProgressToggleButton("taskToComplete")}
                  >
                    <div style={{padding:"1% 3% 0 0",width:"45px",height:"25px"}}>
                      <LibraryAddIcon style={{width:"100%",height:"100%"}}/>
                    </div>
                    Assign Task
                  </div>
               </GridItems>
               <GridItems xs={6} sm={4} md={3} >
                  <div
                    className={classes.modifiedButton}
                     id="grantPermission"
                     onClick={()=>workProgressToggleButton("grantPermission")}
                  >
                    <div style={{padding:"1% 3% 0 0",width:"45px",height:"25px"}}>
                      <LibraryAddCheckIcon style={{width:"100%",height:"100%"}}/>
                    </div>
                     Permission
                  </div>
               </GridItems>
            </GridContainer>
         </CardBody>
      </Card>
   </div>
   <div style={{padding:"1% 2% 4.8% 2%", background:"rgb(223, 228, 226)",}}>
     <WorkDoneTable 
        HeaderData={DataForTable.HeaderName} 
        CompleteData={DataForTable.TaskCompletedData}
        maxHeightOftheDataTable="360px"
        changeHandler={()=>workProgressToggleButton("completedTask")}
     />
   </div>
</div>
  ):null;

  let OtherForm = " ";
   
  if(initialState.taskToComplete){
     OtherForm= <div> 
                   <TaskToCompleteForm 
                   ToggleGridForm={(event , ToggleBoolen)=>ToggleGridForm(event,ToggleBoolen)}
                   ToggleListToDoForm={workProgressToggleButton}
                   />
                   {initialState.toggleGrid?(
                      <WorkToDoSummaryGrid 
                         ToggleGridForm={
                            (event , ToggleBoolen)=>ToggleGridForm(event,ToggleBoolen)
                           }
                           AccessToNoteDetails={
                              (event , AccessNoteBoolen)=>AccessToNoteDetails(event , AccessNoteBoolen)
                           } 
                       />):null}
                </div> 
  }
 
   if(initialState.grantPermission){
    OtherForm =   initialState.ToggleCreatedNotesForm ? (
       <div>
          <div style={{ margin:"0.1% 5% 0 5%"}}> 
          <span 
          style={{
             float:"right",
             paddingRight:"4%",
             marginTop:"2%"
            }}
          onClick={workProgressToggleButton}
          >
             <CloseIcon 
             style={{
               color:"red",
               width:"50px",
               padding:"0% 6%",
               background:"rgb(238, 240, 239)"
              }}/>
          </span>
          <div
          style={{
           width:"92%",
           padding:"5% 4% 0 4%",
           background:'white'
          }}
          >
             <hr style={{margin:"0"}}/>
             <GrantPermissionSummaryForm 
             ToggleCreatedSummaryForm={ToggleCreatedForm}
             />
          </div>
          </div>
        </div>
      )
                   :
                  (<GrantPermissionDetailsForm ToggleCreatedDetailForm={ToggleCreatedForm}/>)
   }
 
  if(initialState.completedTask){
    OtherForm =  initialState.toggleHistoryForm ? (
        <CompletedTaskForm 
        ToggleHandler={GetHistoryToggleHandler}
        ToggleListToDoForm={workProgressToggleButton}
        />
    ):(
      <GrantPermissionDetailsForm ToggleCreatedDetailForm={GetHistoryToggleHandler}/>
    );
  }
 
   return (
     <div style={{background:"rgb(223, 228, 226)",padding:" 0"}}>
        {initialState.ToggleAccessNote?(
           <div>
              {EmployDeskFrontPage}
              {OtherForm}
           </div>  
              ):( 
         <NoteDispalyForm 
         AccessToNoteDetails={
            (event , AccessNoteBoolen)=>AccessToNoteDetails(event , AccessNoteBoolen)
         } 
         /> )}
     </div>
   );
}

export default withStyles(EmployeeDeskStyle)(EmployeesDetails);


//<GridItems xs={6} sm={4} md={3} >
//<div
//  className={classes.modifiedButton}
//   id="completedTask"
//   onClick={()=>workProgressToggleButton("completedTask")}
//>
//  <div style={{padding:"1% 3% 0 0",width:"45px",height:"25px"}}>
//     <AssignmentTurnedInIcon style={{width:"100%",height:"100%"}} />
//  </div>
//   Completed
//</div>
//</GridItems>