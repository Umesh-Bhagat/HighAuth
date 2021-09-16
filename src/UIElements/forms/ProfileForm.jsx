import React from 'react';
import withStyles from "@material-ui/core/styles/withStyles";

import Barlogo from '../../assets/image/sttepalinkLogo.png';
import Card from '../Card/Card.jsx';
import CardHeadder from '../Card/CardHeader.jsx';
import CardBody from '../Card/CardBody.jsx';
import GridContainer from '../Grid/GridContainer.jsx';
import GridItem from '../Grid/GridItems.jsx';
import ProfileFormStyle from '../../assets/jss/Material-dashboard-react/ProfileStyle.jsx';

const ProfileFormat = (Props) =>{
   const { classes,...rest} = Props;
  return(
          <Card  style={{
             margin:"0%",
             width:"97%",
             background:"whitesmoke",
             padding:"0 1.5%"
             }}
            >
          <CardHeadder style={{marginTop:"1%" ,color:"black", paddingBottom:".5%"}}>
             <GridContainer justify="center">
                <GridItem  xs={6} sm={4} md={3}> 
                   <div  className={classes.Profile1}>
                      <img  className={classes.Profile} src={Barlogo} alt="Barlogo"/>
                   </div>
                </GridItem>
                <GridItem  xs={12} sm={8} md={9}> 
                   <GridContainer style={{background:"rgb(203, 200, 208)",height:"140px",margin:"0",padding:"2% 0 2% 0", width:"100%", border:"1px solid #e0dede",borderRadius:".2em"}}>   
                      <GridItem  xs={4} sm={3} md={3}>
                      <p className={classes.HeadderinfoDisplay}>Name </p> 
                      </GridItem>
                      <GridItem  xs={8} sm={9} md={9}>
                       <p className={classes.HeadderinfoDisplay}> : Ravi Ranjan Bhagat</p>
                      </GridItem>
                     
                      <GridItem  xs={4} sm={3} md={3}>
                       <p className={classes.HeadderinfoDisplay}> Plan validity Till</p>
                      </GridItem>
                      <GridItem  xs={8} sm={9} md={9}>
                       <p className={classes.HeadderinfoDisplay}>: 25/5/2020</p>
                      </GridItem>
                      
                      <GridItem  xs={4} sm={3} md={3}>
                       <p className={classes.HeadderinfoDisplay}> Email Id </p> 
                      </GridItem>
                      <GridItem xs={8} sm={9} md={9}>
                        <p className={classes.HeadderinfoDisplay} > : umeshhighauth@gmail.com </p>
                      </GridItem>
        
                      <GridItem  xs={4} sm={3} md={3}>
                       <p className={classes.HeadderinfoDisplay}> Your Plan </p>
                      </GridItem>
                      <GridItem  xs={8} sm={9} md={9}>
                       <p className={classes.HeadderinfoDisplay}>: Best Plan To Achive Success </p>
                      </GridItem>  
                   </GridContainer> 
                 </GridItem>
              </GridContainer>
           </CardHeadder>
           <hr style={{margin:"0 0 1% 2%"}}/>
           <CardBody style={{padding:"0 3%", maxHeight:"370px",overflow:"auto"}}> 
             <GridContainer style={{paddingBottom:"2%"}}>
                 <GridItem style={{padding:"3px"}} xs={12} sm={6} md={6}>
                       <p className={classes.CardInfoDisplay}>Category &nbsp;: Teacher </p> 
                 </GridItem>
                
                 <GridItem style={{padding:"3px"}} xs={12} sm={6} md={6}>
                  <p className={classes.CardInfoDisplay}>  Gender &nbsp; : Male</p> 
                 </GridItem>
             
                 <GridItem style={{padding:"3px"}} xs={12} sm={6} md={6}>
                  <p className={classes.CardInfoDisplay}>  Class &nbsp; : 12 Science</p>  
                 </GridItem>
              
                 <GridItem style={{padding:"3px"}} xs={12} sm={6} md={6}>
                  <p className={classes.CardInfoDisplay}> Mob. No. :  &nbsp;7859654125</p> 
                 </GridItem>
                
                 <GridItem style={{padding:"3px "}} xs={12} sm={12} md={12}>
                  <p className={classes.CardInfoDisplay}> Father's Name :  &nbsp;Parash Nath Bhagat</p> 
                 </GridItem>
                 
                 <GridItem style={{padding:"3px "}} xs={12} sm={12} md={12}>
                  <p className={classes.CardInfoDisplay}> School Name :  &nbsp;Sir Tashi Namgyal Senior Secondary School</p> 
                 </GridItem>
                 
                 <GridItem style={{padding:"3px "}} xs={12} sm={12} md={12}>
                  <p className={classes.CardInfoDisplay}> Added Subjects :  &nbsp; Not Available</p> 
                 </GridItem>
              </GridContainer>

              <GridContainer  style={{background:"rgb(203, 200, 208)", padding:"2% ", marginBottom:'2%'}}>
                 <GridItem style={{padding:"0 0 3% 1%"}} xs={12} sm={4} md={3}>
                   <p className={classes.HeadderinfoDisplay}> Current Address : </p> 
                 </GridItem>
                 <GridItem  xs={12} sm={8} md={8} style={{padding:"0 0" , margin:"1  % 0 1% 0"}}> 
                   <GridContainer style={{margin:"0",padding:"0% 0%", background:"rgb(242, 241, 243)",width:"100%", border:"1px solid #e0dede",borderRadius:".5em"}}>   
                      <GridItem  xs={12} sm={12} md={12}>
                      <p className={classes.AddressInfoDisplay}>Ravi Ranjan Bhagat </p> 
                      </GridItem>
                      <GridItem  xs={12} sm={12} md={12}>
                       <p className={classes.AddressInfoDisplay}><span style={{color:"black", fontSize:"100%"}}>C/O</span> Parash Nath Bhagat </p>
                      </GridItem>
                     
                      <GridItem  xs={12} sm={12} md={12}>
                       <p className={classes.AddressInfoDisplay}>Development Area, Jewan Thing Marg</p>
                      </GridItem>
                      
                      <GridItem  xs={12} sm={12} md={12}>
                       <p className={classes.AddressInfoDisplay}> Gangtok (Post Office) , 737101  </p> 
                      </GridItem>
                     
                      <GridItem  xs={12} sm={12} md={12}>
                       <p className={classes.AddressInfoDisplay}>Sikkim</p>
                      </GridItem>
                   </GridContainer> 
                 </GridItem>
              </GridContainer>
          </CardBody>
       </Card>
     
  );
}       

export default  withStyles(ProfileFormStyle)(ProfileFormat);