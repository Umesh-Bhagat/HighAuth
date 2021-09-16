import React from "react";
import GridContainer from "../Grid/GridContainer.jsx";
import GridItems from "../Grid/GridItems.jsx";


const GrantPermissionForm = ( {...props} ) =>{
 const {classes,ToggleCreatedSummaryForm,...rest}=props;
    return(
        <div style={{paddingTop:"2%"}}>
        <GridContainer
        style={{ 
          border:"1px solid rgb(180, 179, 180)",
        }}
         plain> 
            <GridItems 
            xs={4} sm={4} md={4}
            style={{
              background:"rgb(155, 153, 156)",
            }}
            >
             <GridContainer 
             style={{
              padding:"8% 5%",
              fontSize:"18px",
              fontWeight:"550",
              color:"white",
              fontFamily:"playfair display",
              borderRight:"1px solid rgb(177, 182, 185)"
             }}>
              
               <GridItems style={{paddingTop:".5%",paddingLeft:"6%",paddingBottom:".5%"}} xs={3} sm={3}md={3}>Name</GridItems>
               <GridItems style={{paddingTop:".5%",paddingLeft:"6%",paddingBottom:".5%"}} xs={9} sm={9}md={9}>: Annu</GridItems>
               <GridItems style={{paddingTop:".5%",paddingLeft:"6%",paddingBottom:".5%"}} xs={3} sm={3}md={3}>Depart.</GridItems>
               <GridItems style={{paddingTop:".5%",paddingLeft:"6%",paddingBottom:".5%"}} xs={9} sm={9}md={9}> : science</GridItems>
               <GridItems style={{paddingTop:".5%",paddingLeft:"6%",paddingBottom:".5%"}} xs={3} sm={3}md={3}>Subject.</GridItems>
               <GridItems style={{paddingTop:".5%",paddingLeft:"6%",paddingBottom:".5%"}} xs={9} sm={9}md={9}>: Social Science</GridItems> 
               <GridItems style={{paddingTop:".5%",paddingLeft:"6%",paddingBottom:".5%"}} xs={3} sm={3}md={3} >Class </GridItems>
               <GridItems style={{paddingTop:".5%",paddingLeft:"6%",paddingBottom:".5%"}} xs={9} sm={9}md={9}>: 12th without maths</GridItems>
               <GridItems style={{paddingTop:".5%",paddingLeft:"6%",paddingBottom:".5%"}} xs={3} sm={3}md={3} >Date</GridItems>
               <GridItems style={{paddingTop:".5%",paddingLeft:"6%",paddingBottom:".5%"}} xs={9} sm={9}md={9}>: 25/08/220</GridItems>
             </GridContainer> 
            </GridItems>  
            <GridItems 
            xs={8} sm={8} md={8}
            style={{
                background:"rgb(248, 250, 251)",
                padding:"0 1%",
                fontSize:"17px",
                fontWeight:"500",
                fontFamily:"playfair display",
            }}
            >
              <GridContainer plain>
              <GridItems 
               style={{
                 fontSize:"20px",
                 fontWeight:"600",
                 color:"rgb(91, 94, 94)",
                 padding:"2.3% 0 0 0",
               }}
               xs={12} sm={12}md={12}
               > 
               Note Details
               <hr style={{margin:"2px 0 0px 0",}}/>
               </GridItems>
              </GridContainer>
              <GridContainer style={{margin:"0 0 1% 0%", height:"125px",overflow:'auto'}}>
                  <GridItems onClick={ToggleCreatedSummaryForm} xs={10} sm={10}md={10} style={{margin:"0",padding:"0.6% .5% 0 .5%",borderBottom:"1px solid gray"}}> herd hhgs ggag d47 dd </GridItems>
                  <GridItems  style={{margin:"0",padding:"0.6% .5% 0 .5%",borderBottom:"1px solid gray"}} sx={2} sm={2} md={2}>20/8/2020</GridItems>
                  <GridItems onClick={ToggleCreatedSummaryForm} xs={10} sm={10}md={10} style={{margin:"0",padding:"0.6% .5% 0 .5%",borderBottom:"1px solid gray",}}> dgd ud jjdu yyd uu jjh</GridItems>
                  <GridItems style={{margin:"0",padding:"0.6% .5% 0 .5%",borderBottom:"1px solid gray"}} sx={2} sm={2} md={2}>07/5/2020</GridItems>
                  <GridItems onClick={ToggleCreatedSummaryForm} xs={10} sm={10}md={10} style={{margin:"0",padding:"0.6% .5% 0 .5%",borderBottom:"1px solid gray",}}> dhhh dhhd hhhd hh dhhh </GridItems>
                  <GridItems style={{margin:"0",padding:"0.6% .5% 0 .5%",borderBottom:"1px solid gray"}} sx={2} sm={2} md={2}>25/8/2020</GridItems>
                  <GridItems onClick={ToggleCreatedSummaryForm} xs={10} sm={10}md={10} style={{margin:"0",padding:"0.6% .5% 0 .5%",borderBottom:"1px solid gray",}}> dbd dh hhhd hhd  hhh hh </GridItems>
                  <GridItems style={{margin:"0",padding:"0.6% .5% 0 .5%",borderBottom:"1px solid gray"}} sx={2} sm={2} md={2}>14/08/2021</GridItems>
                  <GridItems onClick={ToggleCreatedSummaryForm} xs={10} sm={10}md={10} style={{margin:"0",padding:"0.6% .5% 0 .5%",borderBottom:"1px solid gray",}}> hdhhhh hh hhhd hhdh hh </GridItems>
                  <GridItems style={{margin:"0",padding:"0.6% .5% 0 .5%",borderBottom:"1px solid gray"}} sx={2} sm={2} md={2}>24/9/2020</GridItems>
                  <GridItems onClick={ToggleCreatedSummaryForm} xs={10} sm={10}md={10} style={{margin:"0",padding:"0.6% .5% 0 .5%",borderBottom:"1px solid gray",}}> dgb bbd bdbbdbbb  bdbb </GridItems>
                  <GridItems style={{margin:"0",padding:"0.6% .5% 0 .5%",borderBottom:"1px solid gray"}} sx={2} sm={2} md={2}>04/7/2021</GridItems>
                  <GridItems onClick={ToggleCreatedSummaryForm} xs={10} sm={10}md={10} style={{margin:"0",padding:"0.6% .5% 0 .5%",borderBottom:"1px solid gray",}}> yry ig ifyh ifh hfh hf </GridItems>
                  <GridItems style={{margin:"0",padding:"0.6% .5% 0 .5%",borderBottom:"1px solid gray"}} sx={2} sm={2} md={2}>09/7/2021</GridItems>
                  <GridItems onClick={ToggleCreatedSummaryForm} xs={10} sm={10}md={10} style={{margin:"0",padding:"0.6% .5% 0 .5%",borderBottom:"1px solid gray",}}> yryig4ifyh4ifh4hfh4hf4 </GridItems>
                  <GridItems style={{margin:"0",padding:"0.6% .5% 0 .5%",borderBottom:"1px solid gray"}} sx={2} sm={2} md={2}>15/05/2021</GridItems>
                  <GridItems onClick={ToggleCreatedSummaryForm} xs={10} sm={10}md={10} style={{margin:"0",padding:"0.6% .5% 0 .5%",borderBottom:"1px solid gray",}}> yryig4ifyh4ifh4hfh4hf4 </GridItems>
                  <GridItems style={{margin:"0",padding:"0.6% .5% 0 .5%",borderBottom:"1px solid gray"}} sx={2} sm={2} md={2}>17/05/2021</GridItems>
                  <GridItems onClick={ToggleCreatedSummaryForm} xs={10} sm={10}md={10} style={{margin:"0",padding:"0.6% .5% 0 .5%",borderBottom:"1px solid gray",}}> yryig4ifyh4ifh4hfh4hf4 </GridItems>
                  <GridItems style={{margin:"0",padding:"0.6% .5% 0 .5%",borderBottom:"1px solid gray"}} sx={2} sm={2} md={2}>23/08/2021</GridItems>
              </GridContainer>    
            </GridItems>       
        </GridContainer>
        </div>
    );
}

export default GrantPermissionForm ;