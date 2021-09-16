import React, { useCallback, useEffect, useReducer } from "react";
import SelectAndSearchSubHeader from "../../UIElements/forms/SelectAndSearchForm.jsx";
import DataTable from "../../UIElements/forms/RepresentDataInTableForm.jsx"
import { AccordionActions } from "@material-ui/core";

const initialReducer = ( state , action) =>{
  console.log(state,action)
    switch(action.type){
      case "STORE-DATA" :
      return{
        ...state,
        arrayDataToDispatch:action.data,
        RefKey:action.RefKey,
        BreakTheFlow:action.BreakTheFlow,
        HeaderData:action.HeaderData,
        goBack:action.goBack,
        prevData:action.prevData
      };
      
      case "DATA-ENDED" :
      return{
        ...state,
        message:action.message,
        toggle:action.toggle
      } 
      default :
      return state;
    }
}

const StudentDetailsForm = ( props ) => {

  const [initialStudentState,dispatch] = useReducer(
     initialReducer,{
       arrayDataToDispatch:[],
       HeaderData:[],
       RefKey:"",
       goBack:"",
       prevData:[]
     }
  )
  
 const StudentDetails ={
   Options:[
    {value:"State",displayValue:"State"},
    {value:"Teacher", displayValue:"Teacher"},
    {value:"District", displayValue:"District"},
    {value:"School",displayValue:"School"},
   ],
   State:{
    dataValue:{
     State:[
        [ "Delhi","6",  "2451","25416"],
        [ "West Bengal", "9", "3256","12458"],
        [ "Utter Pradesh","10","5412","47152"],
        [ "Madhya Pradesh", "9","5424","35461"],
        [ "Haryana","8","254125","25411"],
        [ "Rajasthan","6","568545","3251"],
        [ "Bihar","11","58452","25416"],
        [ "Sikkim","2","25415","35641"],
        [ "Rajasthan","8","2541","12543"],
      ],
      key:"State",
      goForward:"District",
      KeyId:"none",
      goBack:"none",
      Header:[
        "State Name",
        "No. Of District",
        "No. Of Current User",
        "Total No. of Student",
     ],
    },  
   },
    District:{
      dataValue:{
        Delhi:[
          ["District1","noOfSchool1","CurrentTotalStdent1","totalStudent1"],
          ["District2","noOfSchool2","CurrentTotalStdent2","totalStudent2"],
          ["District3","noOfSchool3","CurrentTotalStdent3","totalStudent3"],
          ["District4","noOfSchool4","CurrentTotalStdent4","totalStudent4"],
          ["District5","noOfSchool5","CurrentTotalStdent5","totalStudent5"],
          ["District6","noOfSchool6","CurrentTotalStdent6","totalStudent6"],
          ["District7","noOfSchool7","CurrentTotalStdent7","totalStudent7"],
          ["District8","noOfSchool8","CurrentTotalStdent8","totalStudent8"],
        ],
        key:"Delhi",
        goForward:"School",
        goBack:"State",
        KeyId:"State",
        Header:[
          "District Name",
          "Total School",
          "Current Student",
          "Total Student"
       ],
     },
    },
    School:{
      dataValue:{
        District1:[
          ["SchoolName1","TotalBatch1","CurrentTotalStdent1","totalStudent1"],
          ["SchoolName2","TotalBatch2","CurrentTotalStdent2","totalStudent2"],
          ["SchoolName3","TotalBatch3","CurrentTotalStdent3","totalStudent3"],
          ["SchoolName4","TotalBatch4","CurrentTotalStdent4","totalStudent4"],
          ["SchoolName5","TotalBatch5","CurrentTotalStdent5","totalStudent5"],
          ["SchoolName6","TotalBatch6","CurrentTotalStdent6","totalStudent6"],
          ["SchoolName7","TotalBatch7","CurrentTotalStdent7","totalStudent7"],
          ["SchoolName8","TotalBatch8","CurrentTotalStdent8","totalStudent8"],
        ],
        key:"District1",
        goForward:"Class",
        goBack:"District",
        KeyId:"Delhi",
        Header:[
          "School Name",
          "Total Batch",
          "Current Student",
          "Total Student",
       ],
      },
    },
    Class:{
      dataValue:{
        SchoolName1:[
          ["ClassName1","TotalSection1","CurrentTotalStdent1","totalStudent1"],
          ["ClassName2","TotalSection2","CurrentTotalStdent2","totalStudent2"],
          ["ClassName3","TotalSection3","CurrentTotalStdent3","totalStudent3"],
          ["ClassName4","TotalSection4","CurrentTotalStdent4","totalStudent4"],
          ["ClassName5","TotalSection5","CurrentTotalStdent5","totalStudent5"],
          ["ClassName6","TotalSection6","CurrentTotalStdent6","totalStudent6"],
          ["ClassName7","TotalSection7","CurrentTotalStdent7","totalStudent7"],
          ["ClassName8","TotalSection8","CurrentTotalStdent8","totalStudent8"],
        ],
        key:"SchoolName1",
        goForward:"none",
        goBack:"School",
        KeyId:"District1",
        Header:[
          "Class Name",
          "TotalSection",
          "Current Student",
          "Total Student"
        ],
      },
    }
 }

 useEffect(()=>{
    dispatch({
     type:"STORE-DATA",
     data: StudentDetails.State.dataValue.State,
     RefKey:StudentDetails.State.dataValue.goForward,
     HeaderData:StudentDetails.State.dataValue.Header,
     goBack:StudentDetails.State.dataValue.goBack,
     prevData:StudentDetails.State.dataValue.KeyId
    })
  },[]);

  const changeHandler = useCallback(( x ) => {
    console.log("error", x);
  },[]);
 
  const GetRequiredData = (value , key ) =>{
    console.log(value ,key  )
    if(key!== "none" ){
      console.log()
      dispatch({
        type:"STORE-DATA",
        data: StudentDetails[key].dataValue[value],
        RefKey:StudentDetails[key].dataValue.goForward,
        HeaderData:StudentDetails[key].dataValue.Header,
        goBack:StudentDetails[key].dataValue.goBack,
        prevData:StudentDetails[key].dataValue.KeyId
      });
    } else{
      alert("no mare Data");
    }
  }

  const GoBackToPreviousPage = (postData,value)=> {
    console.log(
      postData,value
     
     
    )
   if(value!== "none" ){
   dispatch({
     type:"STORE-DATA",
     data:StudentDetails[postData].dataValue[value],
     RefKey:StudentDetails[postData].dataValue.goForward,
     HeaderData:StudentDetails[postData].dataValue.Header,
     goBack:StudentDetails[postData].dataValue.goBack,
     prevData:StudentDetails[postData].dataValue.KeyId
    });
  }else{
    alert("no mare Data");
  }
  }

  return(
    <div style={{padding:"2% 2% 1.5% 2% ",  background:"rgb(35, 52, 79,.2)"}}>
       <SelectAndSearchSubHeader 
         PersonDetails= {StudentDetails.Options} 
         changeHandler={(b)=>changeHandler(b)}
         SearchInput
       />  
       <div style={{paddingTop:"2.5%"}}>
         <DataTable
           HeaderData={initialStudentState.HeaderData}
           CompleteData={initialStudentState.arrayDataToDispatch}
           goBackButton="true"
           RefKey={initialStudentState.RefKey}
           goBack={initialStudentState.goBack}
           prevData={initialStudentState.prevData}
           GoBackToPreviousPage={(postData,value)=>GoBackToPreviousPage(postData,value)}
           changeHandler={(Purpose,key)=>GetRequiredData(Purpose,key)}
         />
       </div>
    </div>
  );
}

export default StudentDetailsForm;