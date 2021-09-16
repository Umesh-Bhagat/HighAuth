import React, { useReducer } from "react";
import CloseIcon from '@material-ui/icons/Close';

import Card from "../Card/Card.jsx";
import CardBody from "../Card/CardBody.jsx";
import CardFooter from "../Card/CardFooter.jsx";
import GridContainer from "../Grid/GridContainer.jsx";
import GridItems from "../Grid/GridItems.jsx";
import Button from "../CustomButton/Button.jsx";
import CustomInputs from "../CustomInputs/CustomInputs.jsx";

const stateReducer = (state , action) => {
    switch(action.type){
        case "ERROR_TOGGLE":
            return{
                ...state,
                anyErrorToggle:action.anyErrorToggle
            }
    }
}

const GrantPermissionDetailsForm = ({...props}) =>{
    const {classes,ToggleCreatedDetailForm,...rest}=props;

    const [initialState,dispatch]=useReducer(
        stateReducer,{
            anyErrorToggle:true
        }
    )

    const ToggleForm = ( ) =>{
        dispatch({
            type:"ERROR_TOGGLE",
            anyErrorToggle:!initialState.anyErrorToggle
        })
    }

    const errorNoteHandler = (data , id ,isValid) =>{
        console.log("errorNote")
    }
    return(
        <div style={{background:"rgb(223, 228, 226)",maxHeight:"605px",overflow:"auto"}}>
            <Card plain>
               <CardBody style={{paddingBottom:"0"}}>
                   <GridContainer>
                       <GridItems xs={12} sm={12} md={12}>
                           <span 
                           style={{
                               float:"right",
                               background:"white",
                               padding:"0% 2%",
                               color:"red",
                           }}
                           onClick={ToggleCreatedDetailForm}
                           >
                             <CloseIcon 
                             style={{
                                
                             }}/>
                           </span>
                       </GridItems>
                   </GridContainer>
                  <GridContainer 
                  style={{
                   fontSize:"18px",
                   fontWeight:"700",
                   color:"rgb(82, 81, 82)",
                   fontFamily:"lora",
                   paddingTop:"6%",
                  }}>
                      <GridItems  
                          xs={2} sm={2} md={2} 
                        > 
                         Class 
                      </GridItems>
                      <GridItems  
                           xs={9} sm={9} md={9}
                        >
                          : 12th Science (Without Biology)
                      </GridItems>
                      <GridItems  
                           xs={2} sm={2} md={2}
                       >
                          Subject Name
                      </GridItems>
                      <GridItems  
                           xs={9} sm={9} md={9}
                       >
                         : Biology
                      </GridItems>
                      <GridItems  
                           xs={2} sm={2} md={2}
                       >
                          Chapter Name
                      </GridItems>
                      <GridItems  
                          xs={9} sm={9} md={9}
                       >
                         : Blood Curcilation in human body
                      </GridItems>
                      <GridItems  
                          xs={2} sm={2} md={2}
                       >
                           Topic Name
                      </GridItems>
                      <GridItems   
                           xs={9} sm={9} md={9}
                       >
                           : Nervs System
                      </GridItems>
                  </GridContainer>
                  <hr style={{marginTop:".5%"}}/>
                  <GridContainer style={{paddingTop:"2%",paddingBottom:"2%"}}>
                      <GridItems xs={5} sm={5} md={5}>
                          <div 
                           style={{
                              background:"white",
                              minHeight:"280px",
                              border:"1px solid rgb(198, 199, 199)",
                              borderRadius:".5em"
                            }}
                          >
                              image
                          </div>
                      </GridItems>
                      <GridItems xs={7} sm={7} md={7}>
                          <div 
                           style={{
                              background:"white",
                              minHeight:"280px",
                              border:"1px solid rgb(198, 199, 199)",
                              borderRadius:".5em"
                           }}
                           >
                             notes
                          </div>
                      </GridItems>
                  </GridContainer>
                  <GridContainer>
                      <GridItems style={{display:"flex"}} xs={5} sm={5} md={5}>
                          <div style={{width:"45%",padding:"3%"}}>
                              <Button>
                                  Need Correction
                              </Button>
                          </div>
                      
                          <div style={{width:"45%",padding:"3%"}}>
                              <Button>
                                 Post
                              </Button>
                          </div>
                      </GridItems>
                      <GridItems xs={7} sm={7} md={7}>
                          <div 
                          style={{
                           width:"100%",
                           height:"auto",
                           margin:"0% 0%",
                           float:'right',
                          }}> 

                           {initialState.anyErrorToggle ? ( 
                             <div 
                             style={{
                                 fontSize:"18px",
                                 color:"white",
                                 fontWeight:"650",
                                 float:"right",
                                 padding:"0% 5% 1% 5%",
                                 margin:"3% 0 2% 0",
                                 border:"1px solid gray",
                                 borderRadius:".3em",
                                 background:"rgb(165, 168, 167,.5)"
                             }}
                             onClick={ToggleForm}
                             >
                                 Any Error 
                             </div> 
                            ):(  
                                <div style={{marginBottom:"2%"}}>
                            <div 
                               style={{
                                width:"20%",
                                fontSize:'18px',
                                fontWeight:'700',
                                textAlign:"center"
                               }}
                              >
                                 Error Note :
                              </div>
                              <div
                                style={{
                                    width:"100%",
                                    background:"rgb(153, 153, 153,.4)",
                                    border:"1px solid rgb(198, 199, 199)",
                                    borderRadius:".5em",
                                    display:"flex"
                                }}
                              >  
                               <CustomInputs
                                 element="textArea"
                                 type="text"
                                 id="errorNote"
                                 ClassName={{
                                     background:"white",
                                     margin:"0",
                                     paddingLeft:"0",
                                     width:"100%",
                                     minHeight:"60px"}}
                                 onInput={errorNoteHandler}
                               />
                               <div 
                               style={{
                                width:"20%",
                                textAlign:"center",
                                fontSize:"18px",
                                paddingTop:"3.5%",
                                color:"black",
                                fontWeight:"650",
                                background:"rgb(165, 168, 167,.5)"
                               }}
                               onClick={ToggleForm}
                               >   
                                  Submit
                               </div>
                              </div>
                              </div>
                            )}
                          </div>
                      </GridItems>
                  </GridContainer>
                  <hr style={{margin:".5% 0 0 0"}}/>
                </CardBody>
            </Card>
        </div>
    );
}

export default GrantPermissionDetailsForm;