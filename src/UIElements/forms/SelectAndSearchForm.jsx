import React from "react";
import Card from "../Card/Card.jsx";
import CardBody from "../Card/CardBody"
import SearchIcon from '@material-ui/icons/Search';
import CustomInput from "../CustomInputs/CustomInputs.jsx";

const SelectAndSearchForm = (props) =>{
 return(
     <Card 
     style={{
      background:"none",
      borderRadius:"0",
      width:"auto",
      marginTop:"0%",
      paddingTop:"1.5%",
      marginBottom:"0",
      boxShadow:"none"
     }}
     >
       <CardBody 
          style={{
              width:"auto",
              padding:"2.7% .5% 1% .5%",
              display:"flex",
              fontWeight:"650"
            }}
         >
            { props.SearchInput ?(<div 
                 style={{
                     width:"22%",
                     float:"right",
                     height:"36px",
                     display:"flex",
                     border:"1px solid  #999999", 
                     background:"white",
                     borderRadius:".2em"
                  }}
               >
                  <div style={{padding:"3% 0 0 0",width:"50px" , height:"25px"}}>
                     <SearchIcon style={{width:"100%",height:"100%",}}/>
                  </div>
                 <CustomInput
                     element="input"
                     id="search"
                     search
                     formControlProps={{
                        fullWidth: true,
                     }}
                     LineInputStyle
                     style={{padding:"5% 1% 0% 1%",height:"25px", fontSize:"17px",fontWeight:"650"}}
                     placeholder="Search..."
                     options=" "
                    // dataValue={initialState.inputs.subject.value}
                     onInput={()=>props.changeHandler("its Search Fpr")}
                  />     
              </div>):null}
           
            <div style={{width:"78%",height:"36px",display:"flex"}}>
              
              <div style={{display:"flex",width:"73%"}}>
                 {props.children}
              </div>
              <div style={{width :"27%"}}>
               <CustomInput
                  element="select"
                  id="option"
                  formControlProps={{
                     fullWidth: true,
                  }}
                  LineInputStyle
                  style={{padding:"1% 1% 0% 3%",width:"100%",height:"36px", fontSize:"20px",fontWeight:"650"}}
                  options={props.PersonDetails}
                 // dataValue={initialState.inputs.subject.value}
                  onInput={()=>props.changeHandler("DO not take strace")}
                />
            </div>
              
           </div>
        </CardBody>
     </Card>
  );
}

export default SelectAndSearchForm;