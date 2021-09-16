import React from "react";
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import {drawerWidth} from "../../assets/jss/materials-dashboard-react.jsx";


import Card from "../Card/Card.jsx";
import CardBody from "../Card/CardBody.jsx";
import CardHeader from "../Card/CardHeader.jsx";
import GridContainer from "../Grid/GridContainer.jsx"
import GridItems from "../Grid/GridItems.jsx";

const SummaryGrid = (props) =>{
   return(
       <div>
           <div
            style={{
              width: `calc(100% - ${drawerWidth}px)`,
              minHeight: "auto",
              position: "fixed",
              zIndex: "100",
              top:"62%",
              bottom:"3%",
              background: "rgba(0, 0 , 0, 0.50)",
              display:"flex"
             }}
            >
                <div 
                style={{
                  width:"3%",
                  padding:"10% 0",
                  background:"rgb(255, 255, 255,.4)"
                }}
                >
                  <ArrowBackIosIcon style={{paddingLeft:"20%"}}/>
                </div>
                <div 
                style={{
                  width:"94%",
                  height:"100%",
                 }}
                >
                  <div 
                   style={{
                     width:"100%", 
                     textAlign:"right",
                     paddingTop:'1%'
                   }}>
                     <span 
                       style={{
                         width:"7%",
                         padding:"0 1%",
                         fontWeight:"650",
                         color:"rgb(89, 89, 89)",
                         marginRight:"2%",
                         background:"rgb(242, 242, 242)",
                         cursor: "pointer",
                       }}
                       onClick={(event)=>props.ToggleGridForm(event,false)}
                       >
                         X
                      </span>
                   </div>
                   <div>
                      <GridContainer  style={{margin:"0 .1%"}}>
                          <GridItems xs={4} sm={4} md={4}  onClick={(event) =>props.AccessToNoteDetails(event,false)}>
                              <Card style={{background:"rgb(217, 217, 217)",margin:"3% 0 0 0"}}> 
                                  <CardHeader 
                                   style={{
                                     fontSize:'120%',
                                     padding:"3% 3% 1.5% 3%",
                                     color:"white",
                                     borderBottom:'1px solid black',
                                     background:"rgb(166, 166, 166)",
                                     borderRadius:".3em .3em 0 0"
                                   }}
                                   >
                                      Task To Do
                                  </CardHeader>
                                  <CardBody style={{paddingTop:"2%"}}>
                                      <GridContainer style={{paddingBottom:"1%",fontSize:"110%"}}>
                                         <GridItems style={{padding :"0 2%"}} xs={3} sm={3} md={3}>Subject </GridItems>
                                         <GridItems style={{padding :"0 2%"}} xs={9} sm={9} md={9}>: Mathematics</GridItems>
                                      </GridContainer>
                                      <GridContainer style={{paddingBottom:"1%",fontSize:"110%"}}>
                                         <GridItems style={{padding :"0 2%"}} xs={3} sm={3} md={3}>Class </GridItems>
                                         <GridItems style={{padding :"0 2%"}} xs={9} sm={9} md={9}>: 12th science (without maths) </GridItems>
                                      </GridContainer>
                                      <GridContainer style={{paddingBottom:"1%",fontSize:"110%"}}>
                                         <GridItems style={{padding :"0 2%"}} xs={3} sm={3} md={3}>Depart. </GridItems>
                                         <GridItems style={{padding :"0 2%"}} xs={9} sm={9} md={9}>: Computer Science</GridItems>
                                      </GridContainer>
                                      <GridContainer style={{paddingBottom:"1%",fontSize:"110%"}}>
                                         <GridItems style={{padding :"0 2%"}} xs={3} sm={3} md={3}>Deadline </GridItems>
                                         <GridItems style={{padding :"0 2%"}} xs={9} sm={9} md={9}>: 25/8/2021</GridItems>
                                      </GridContainer>
                                  </CardBody>
                              </Card>
                          </GridItems>
                          <GridItems xs={4} sm={4} md={4}  onClick={(event) =>props.AccessToNoteDetails(event,false)}>
                             <Card style={{background:"rgb(217, 217, 217)",margin:"3% 0 0 0"}}> 
                                  <CardHeader 
                                   style={{
                                     fontSize:'120%',
                                     padding:"3% 3% 1.5% 3%",
                                     color:"white",
                                     borderBottom:'1px solid black',
                                     background:"rgb(166, 166, 166)",
                                     borderRadius:".3em .3em 0 0"
                                   }}
                                  >
                                     Task To Do
                                  </CardHeader>
                                  <CardBody style={{paddingTop:"2%"}}>
                                    <GridContainer style={{paddingBottom:"1%",fontSize:"110%"}}>
                                       <GridItems style={{padding :"0 2%"}} xs={3} sm={3} md={3}>Subject </GridItems>
                                       <GridItems style={{padding :"0 2%"}} xs={9} sm={9} md={9}>: Mathematics</GridItems>
                                    </GridContainer>
                                    <GridContainer style={{paddingBottom:"1%",fontSize:"110%"}}>
                                       <GridItems style={{padding :"0 2%"}} xs={3} sm={3} md={3}>Class </GridItems>
                                       <GridItems style={{padding :"0 2%"}} xs={9} sm={9} md={9}>: 12th science (without maths) </GridItems>
                                    </GridContainer>
                                    <GridContainer style={{paddingBottom:"1%",fontSize:"110%"}}>
                                      <GridItems style={{padding :"0 2%"}} xs={3} sm={3} md={3}>Depart. </GridItems>
                                      <GridItems style={{padding :"0 2%"}} xs={9} sm={9} md={9}>: Computer Science</GridItems>
                                    </GridContainer>
                                    <GridContainer style={{paddingBottom:"1%",fontSize:"110%"}}>
                                      <GridItems style={{padding :"0 2%"}} xs={3} sm={3} md={3}>Deadline </GridItems>
                                      <GridItems style={{padding :"0 2%"}} xs={9} sm={9} md={9}>: 27/8/2021</GridItems>
                                     </GridContainer>
                                  </CardBody>
                              </Card>
                          </GridItems>
                          <GridItems xs={4} sm={4} md={4}  onClick={(event) =>props.AccessToNoteDetails(event,false)}>
                              <Card style ={{background:"rgb(217, 217, 217)",margin:"3% 0 0 0"}}> 
                                   <CardHeader 
                                   style={{
                                     fontSize:'120%',
                                     padding:"3% 3% 1.5% 3%",
                                     color:"white",
                                     borderBottom:'1px solid black',
                                     background:"rgb(166, 166, 166)",
                                     borderRadius:".3em .3em 0 0"
                                   }}
                                    >
                                      Task To Do
                                   </CardHeader>
                                   <CardBody style={{background:"rgb(217, 217, 217)",paddingTop:"2%"}}>
                                       <GridContainer style={{paddingBottom:"1%",fontSize:"110%"}}>
                                           <GridItems style={{padding :"0 2%"}} xs={3} sm={3} md={3}>Subject </GridItems>
                                           <GridItems style={{padding :"0 2%"}} xs={9} sm={9} md={9}>: Mathematics</GridItems>
                                       </GridContainer>
                                       <GridContainer style={{paddingBottom:"1%",fontSize:"110%"}}>
                                          <GridItems style={{padding :"0 2%"}} xs={3} sm={3} md={3}>Class </GridItems>
                                          <GridItems style={{padding :"0 2%"}} xs={9} sm={9} md={9}>: 12th science (without maths) </GridItems>
                                       </GridContainer>
                                       <GridContainer style={{paddingBottom:"1%",fontSize:"110%"}}>
                                          <GridItems style={{padding :"0 2%"}} xs={3} sm={3} md={3}>Depart. </GridItems>
                                          <GridItems style={{padding :"0 2%"}} xs={9} sm={9} md={9}>: Computer Science</GridItems>
                                       </GridContainer>
                                       <GridContainer style={{paddingBottom:"1%",fontSize:"110%"}}>
                                          <GridItems style={{padding :"0 2%"}} xs={3} sm={3} md={3}>Deadline </GridItems>
                                          <GridItems style={{padding :"0 2%"}} xs={9} sm={9} md={9}>: 24/8/2021</GridItems>
                                        </GridContainer>
                                   </CardBody>
                               </Card>
                           </GridItems>
                      </GridContainer>
                  </div>
              </div>
              <div 
                 style={{
                 width:"3%",
                 padding:"10% 0",
                 background:"rgb(255, 255, 255,.4)",
                 }}
                >
                 <ArrowForwardIosIcon style={{paddingLeft:"20%"}}/>
             </div>
           </div>
       </div>
    );
}

export default SummaryGrid;