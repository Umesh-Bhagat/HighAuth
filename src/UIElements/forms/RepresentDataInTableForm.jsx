import React from "react";
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import Button from "../CustomButton/Button.jsx";
import GridContainer from "../Grid/GridContainer.jsx";
import GridItem from "../Grid/GridItems.jsx";
import Card from "../Card/Card.jsx";
import CardBody from "../Card/CardBody.jsx";



const RepresentDataInTableForm = ( props ) => {
 
 let LengthOfTheHeadderData = ""; 
 let GridItemsWidth = ""; 

 LengthOfTheHeadderData = props.HeaderData.length;
 GridItemsWidth= parseInt(12/LengthOfTheHeadderData);

 let maxHeight = props.maxHeightOftheDataTable?(props.maxHeightOftheDataTable):("300px");
return( 
   <Card style={{
      background:"none",
      borderRadius:"0",
      width:"auto",
      marginTop:"0%",
      paddingTop:"0%",
      marginBottom:"0",
      boxShadow:"none"
   }}> 
      <CardBody style={{padding:"0"}}>
        <GridContainer 
        style={{ 
           width:"99.8%",
           margin:" 0 .1%",
           background:"#8c8c8c",
           paddingRight:"3%"
         }}>
          {props.HeaderData.map(data =>(
             <GridItem 
                 xs={GridItemsWidth} 
                 sm={GridItemsWidth}
                 md={GridItemsWidth}
                 style={{
                    width:"100%",
                    color:"#4d4d4d",
                    fontSize:"19px",
                    fontWeight:"500",
                    margin:"0",
                    paddingTop:"2.1%",
                    color:"white"
                  }} 
                  key={data}
               >
                  {data}
              </GridItem>    
          ))}
       </GridContainer> 
       </CardBody> 
      <CardBody 
       style={{
         padding:"0 ",
         borderBottom:"1px solid gray",
         minHeight:"300px",
         maxHeight:maxHeight,
         overflow:"auto"
         }}
      >
       {props.CompleteData.length > 0 ? (props.CompleteData.map((items, index) => {
          return (
              <GridContainer 
                 key={index} 
                 onClick={()=>props.changeHandler(items[0],props.RefKey)}
                 style={{
                  width:"99.5%",
                  background:"white",
                  borderBottom:"1px solid #bfbfbf",
                  fontSize:'15px',
                  fontWeight:'500',
                  marginLeft:".1%"
                 }}
              >
                {items.map((subItems, sIndex) => {
                   return(
                        <GridItem 
                          xs={GridItemsWidth} 
                          sm={GridItemsWidth}
                          md={GridItemsWidth}
                          key= {sIndex}
                           style={{ 
                              width:"100%",
                              color:"#4d4d4d",
                              marginBottom:".3%",
                              paddingTop:"1% "
                             }}
                         >
                          {subItems}
                        </GridItem>
                     )
                 })}    
             </GridContainer>
          )
        })
        ):(<p 
            style={{
              fontSize:"35px",
              fontWeight:"750",
              color:"gray",
              textAlign:"center"
            }} >
             Data is Not Avilable ( Empty )
            </p>)}    
     </CardBody>
     <div style={{width:"100%",height:"3px",background:"rgb(130, 132, 131,.4)"}}></div>
     {props.goBackButton ?(
     <GridContainer style={{width:"96%"}}>
        <GridItem xs={12} sm={4} md={3} >
           <Button 
            style={{
               textAlign:"left",
               border:"none",
               margin:"10% 0 6% 3%",
               color:"#1a1aff",
               background:"rgb(35, 52, 79,.3)",
               fontSize:"15px",
               display:"flex",
               fontWeight:"630"
            }}
            onClick={()=>props.GoBackToPreviousPage(props.goBack,props.prevData)}
            >
              <p style={{paddingTop:"1px",margin:"0"}}>
                 <ArrowBackIcon/>
              </p>
              <p style={{padding:"5px 0 0 .5%", margin:"0"}}>
                 Go Back
             </p>
            </Button>
        </GridItem>
      </GridContainer>):null}
   </Card>  
   );
}

export default RepresentDataInTableForm;