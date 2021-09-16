import React from "react";
import CloseIcon from '@material-ui/icons/Close';

import GridContainer from "../Grid/GridContainer.jsx";
import GridItem from "../Grid/GridItems.jsx";
import Card from "../Card/Card.jsx";
import CardBody from "../Card/CardBody.jsx";

const CompletedTaskForm = ({...props}) =>{

  const { classes,ToggleHandler,ToggleListToDoForm,...rest}=props;
 return(
   <div 
   style={{
     background:"rgb(239, 241, 242,.7)",
     minHeight:"540px",
   }}>
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
     <div
      style={{
      width:"92%",
      margin:"0 4%"
      }}
      >
        <div 
         style={{
          fontSize:"17px",
          color:"#5d5d5c",
          fontWeight:"700",
          paddingTop:"40px",
          marginBottom:"1.5%",
         }}
        > 
          Completed Task History
        </div>
         
       <div style={{height:"540px",width:"100%",overflow:"auto"}}>
         <div  style={{padding:"0% 0 1% 0",color:"#5d5d5c",fontWeight:"500"}}>Monday,july 14,2021</div>
         <Card plain style={{margin:".8% 0",width:"99.5%",border:"1px solid #babbb4",background:"rgb(252, 252, 250)",fontWeight:"600",fontSize:"16px"}}>
           <CardBody style={{padding:".8% 2%"}} onClick={ToggleHandler}>
             <GridContainer>
               <GridItem xs={3} sm={3} md={3}> Chapter Name</GridItem>
               <GridItem xs={3} sm={3} md={3}> Topic Name</GridItem>
               <GridItem xs={6} sm={6} md={6}>
                 Topic name will be show here...... more than 50 words
               </GridItem>
             </GridContainer>
           </CardBody>
         </Card>
               
         <Card plain style={{margin:".8% 0",width:"99.5%",border:"1px solid #babbb4",background:"rgb(252, 252, 250)",fontWeight:"600",fontSize:"16px"}}>
           <CardBody style={{padding:".8% 2%"}} onClick={ToggleHandler}>
             <GridContainer>
               <GridItem xs={3} sm={3} md={3}> Chapter Name</GridItem>
               <GridItem xs={3} sm={3} md={3}> Topic Name</GridItem>
               <GridItem xs={6} sm={6} md={6}>
                 Topic name will be show here...... more than 50 words
               </GridItem>
             </GridContainer>
           </CardBody>
         </Card>
        
         <Card plain style={{margin:".8% 0",width:"99.5%",border:"1px solid #babbb4",background:"rgb(252, 252, 250)",fontWeight:"600",fontSize:"16px"}}>
           <CardBody style={{padding:".8% 2%"}} onClick={ToggleHandler}>
             <GridContainer>
               <GridItem xs={3} sm={3} md={3}> Chapter Name</GridItem>
               <GridItem xs={3} sm={3} md={3}> Topic Name</GridItem>
               <GridItem xs={6} sm={6} md={6}>
                 Topic name will be show here...... more than 50 words
               </GridItem>
             </GridContainer>
           </CardBody>
         </Card>
        
         <Card plain style={{margin:".8% 0",width:"99.5%",border:"1px solid #babbb4",background:"rgb(252, 252, 250)",fontWeight:"600",fontSize:"16px"}}>
           <CardBody style={{padding:".8% 2%"}} onClick={ToggleHandler}>
             <GridContainer>
               <GridItem xs={3} sm={3} md={3}> Chapter Name</GridItem>
               <GridItem xs={3} sm={3} md={3}> Topic Name</GridItem>
               <GridItem xs={6} sm={6} md={6}>
                 Topic name will be show here...... more than 50 words
               </GridItem>
             </GridContainer>
           </CardBody>
         </Card>
             
         <Card plain style={{margin:".8% 0",width:"99.5%",border:"1px solid #babbb4",background:"rgb(252, 252, 250)",fontWeight:"600",fontSize:"16px"}}>
           <CardBody style={{padding:".8% 2%"}} onClick={ToggleHandler}>
             <GridContainer>
               <GridItem xs={3} sm={3} md={3}> Chapter Name</GridItem>
               <GridItem xs={3} sm={3} md={3}> Topic Name</GridItem>
               <GridItem xs={6} sm={6} md={6}>
                 Topic name will be show here...... more than 50 words
               </GridItem>
             </GridContainer>
           </CardBody>
         </Card>
         
         <Card plain style={{margin:".8% 0",width:"99.5%",border:"1px solid #babbb4",background:"rgb(252, 252, 250)",fontWeight:"600",fontSize:"16px"}}>
           <CardBody style={{padding:".8% 2%"}} onClick={ToggleHandler}>
             <GridContainer>
               <GridItem xs={3} sm={3} md={3}> Chapter Name</GridItem>
               <GridItem xs={3} sm={3} md={3}> Topic Name</GridItem>
               <GridItem xs={6} sm={6} md={6}>
                 Topic name will be show here...... more than 50 words
               </GridItem>
             </GridContainer>
           </CardBody>
         </Card>

         <Card plain style={{margin:".8% 0",width:"99.5%",border:"1px solid #babbb4",background:"rgb(252, 252, 250)",fontWeight:"600",fontSize:"16px"}}>
           <CardBody style={{padding:".8% 2%"}} onClick={ToggleHandler}>
             <GridContainer>
               <GridItem xs={3} sm={3} md={3}> Chapter Name</GridItem>
               <GridItem xs={3} sm={3} md={3}> Topic Name</GridItem>
               <GridItem xs={6} sm={6} md={6}>
                 Topic name will be show here...... more than 50 words
               </GridItem>
             </GridContainer>
           </CardBody>
         </Card>

         <Card plain style={{margin:".8% 0",width:"99.5%",border:"1px solid #babbb4",background:"rgb(252, 252, 250)",fontWeight:"600",fontSize:"16px"}}>
           <CardBody style={{padding:".8% 2%"}} onClick={ToggleHandler}>
             <GridContainer>
               <GridItem xs={3} sm={3} md={3}> Chapter Name</GridItem>
               <GridItem xs={3} sm={3} md={3}> Topic Name</GridItem>
               <GridItem xs={6} sm={6} md={6}>
                 Topic name will be show here...... more than 50 words
               </GridItem>
             </GridContainer>
           </CardBody>
         </Card>
          
         <Card plain style={{margin:".8% 0",width:"99.5%",border:"1px solid #babbb4",background:"rgb(252, 252, 250)",fontWeight:"600",fontSize:"16px"}}>
           <CardBody style={{padding:".8% 2%"}} onClick={ToggleHandler}>
             <GridContainer>
               <GridItem xs={3} sm={3} md={3}> Chapter Name</GridItem>
               <GridItem xs={3} sm={3} md={3}> Topic Name</GridItem>
               <GridItem xs={6} sm={6} md={6}>
                 Topic name will be show here...... more than 50 words
               </GridItem>
             </GridContainer>
           </CardBody>
         </Card>

         <Card plain style={{margin:".8% 0",width:"99.5%",border:"1px solid #babbb4",background:"rgb(252, 252, 250)",fontWeight:"600",fontSize:"16px"}}>
           <CardBody style={{padding:".8% 2%"}} onClick={ToggleHandler}>
             <GridContainer>
               <GridItem xs={3} sm={3} md={3}> Chapter Name</GridItem>
               <GridItem xs={3} sm={3} md={3}> Topic Name</GridItem>
               <GridItem xs={6} sm={6} md={6}>
                 Topic name will be show here...... more than 50 words
               </GridItem>
             </GridContainer>
           </CardBody>
         </Card>

         <Card plain style={{margin:".8% 0",width:"99.5%",border:"1px solid #babbb4",background:"rgb(252, 252, 250)",fontWeight:"600",fontSize:"16px"}}>
           <CardBody style={{padding:".8% 2%"}} onClick={ToggleHandler}>
             <GridContainer>
               <GridItem xs={3} sm={3} md={3}> Chapter Name</GridItem>
               <GridItem xs={3} sm={3} md={3}> Topic Name</GridItem>
               <GridItem xs={6} sm={6} md={6}>
                 Topic name will be show here...... more than 50 words
               </GridItem>
             </GridContainer>
           </CardBody>
         </Card>

         <Card plain style={{margin:".8% 0",width:"99.5%",border:"1px solid #babbb4",background:"rgb(252, 252, 250)",fontWeight:"600",fontSize:"16px"}}>
           <CardBody style={{padding:".8% 2%"}} onClick={ToggleHandler}>
             <GridContainer>
               <GridItem xs={3} sm={3} md={3}> Chapter Name</GridItem>
               <GridItem xs={3} sm={3} md={3}> Topic Name</GridItem>
               <GridItem xs={6} sm={6} md={6}>
                 Topic name will be show here...... more than 50 words
               </GridItem>
             </GridContainer>
           </CardBody>
         </Card>
         

         <Card plain style={{margin:".8% 0",width:"99.5%",border:"1px solid #babbb4",background:"rgb(252, 252, 250)",fontWeight:"600",fontSize:"16px"}}>
           <CardBody style={{padding:".8% 2%"}} onClick={ToggleHandler}>
             <GridContainer>
               <GridItem xs={3} sm={3} md={3}> Chapter Name</GridItem>
               <GridItem xs={3} sm={3} md={3}> Topic Name</GridItem>
               <GridItem xs={6} sm={6} md={6}>
                 Topic name will be show here...... more than 50 words
               </GridItem>
             </GridContainer>
           </CardBody>
         </Card>

         <Card plain style={{margin:".8% 0",width:"99.5%",border:"1px solid #babbb4",background:"rgb(252, 252, 250)",fontWeight:"600",fontSize:"16px"}}>
           <CardBody style={{padding:".8% 2%"}} onClick={ToggleHandler}>
             <GridContainer>
               <GridItem xs={3} sm={3} md={3}> Chapter Name</GridItem>
               <GridItem xs={3} sm={3} md={3}> Topic Name</GridItem>
               <GridItem xs={6} sm={6} md={6}>
                 Topic name will be show here...... more than 50 words
               </GridItem>
             </GridContainer>
           </CardBody>
         </Card> 
       </div>
     </div>
    </div>
 ); 
}

export default CompletedTaskForm;