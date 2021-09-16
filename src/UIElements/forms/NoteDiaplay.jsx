import React from "react";
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import CloseIcon from '@material-ui/icons/Close';

import Card from "../Card/Card.jsx";
import CardHeader from "../Card/CardHeader.jsx";
import CardBody from "../Card/CardBody.jsx";
import GridContainer from "../Grid/GridContainer.jsx";
import GridItems from "../Grid/GridItems.jsx";
import TableRepresentationOfData from "../forms/RepresentDataInTableForm.jsx";

const NotesDisplayForm = ( props ) =>{
   const  DataForTable={
    HeaderName:[
        "Note",
        "Created Date",
        "DeadLine"
    ],
    DetailsToShow:[
        {
            note:"hdbjhb djhdjhcjd d cjhdchjd dhcjhc dhcjhdcd",
            CreatedDate: "2/7/21",Deadline:"29/7/21"},
        {
            note:"bheh ehg eguygee egdyeg edgyegduyeg egydyg ", CreatedDate:"24/8/21",Deadline:"26/8/21"},
        {
            note:"dhbhjb hbhcb chcblr hchbrbc hchbhrbh ckjrjc r",CreatedDate:"22/8/21", Deadline:"25/8/21"},
        {
            note:"hdbjhb djhdjhcjd d cjhdchjd dhcjhc dhcjhdcd", CreatedDate:"2/7/21",Deadline:"29/7/21"},
        {
            note:"bheh ehg eguygee egdyeg edgyegduyeg egydyg ", CreatedDate:"24/8/21",Deadline:"26/8/21"},
        {
            note:"dhbhjb hbhcb chcblr hchbrbc hchbhrbh ckjrjc r",CreatedDate:"22/8/21", Deadline:"25/8/21"},
        {
            note:"hdbjhb djhdjhcjd d cjhdchjd dhcjhc dhcjhdcd",CreatedDate:"2/7/21",Deadline:"29/7/21"},
        {
            note:"bheh ehg eguygee egdyeg edgyegduyeg egydyg ", CreatedDate:"24/8/21",Deadline:"26/8/21"},
        {
            note:"dhbhjb hbhcb chcblr hchbrbc hchbhrbh ckjrjc r",CreatedDate:"22/8/21", Deadline:"25/8/21"},
        {
            note:"hdbjhb djhdjhcjd d cjhdchjd dhcjhc dhcjhdcd",CreatedDate: "2/7/21",Deadline:"29/7/21"},
        {
            note:"bheh ehg eguygee egdyeg edgyegduyeg egydyg ", CreatedDate:"24/8/21",Deadline:"26/8/21"},
        {
            note:"dhbhjb hbhcb chcblr hchbrbc hchbhrbh ckjrjc r",CreatedDate:"22/8/21",Deadline: "25/8/21"}
    ]
    } 

    let ArrayToDisplay = [];

    for(let key in DataForTable.DetailsToShow){
        ArrayToDisplay.push({
            ...DataForTable.DetailsToShow[key],
            id:key
        })
    }
    return(
        <div>
          <Card 
           style={{
              boxShadow:"inset 0px 0px 140px 5px rgb(0,0,0,0.5)",
              borderRadius:"0",
              margin:"0",
              width:"92%",
              padding:"1% 4% 3% 4%"
           }}>
               <GridContainer>
                  <GridItems 
                    xs={9} sm={9} md={9}
                    style={{
                        padding:"3.2% 10% 5% 1.5%",
                        fontSize:"32px",
                        fontWeight:"750",
                        color:"rgb(83, 83, 89)",
                        fontFamily:'serif'
                    }}
                    >
                      List To Do...
                  </GridItems>
                  <GridItems
                   xs={3} sm={3} md={3}
                   style={{
                     width:"100%",
                     textAlign:"right",
                     paddingTop:"4%"
                    }}
                    onClick={(event)=>props.AccessToNoteDetails(event,true)}
                    >
                   <CloseIcon 
                    style={{
                        padding:"0% 5% 1% 5%",
                        background:"rgb(230, 230, 230)",
                        fontSize:"28px",
                        fontWeight:"850",
                        color:"rgb(83, 83, 89)"
                    }}
                   />
                  </GridItems>
                </GridContainer>
                <div 
                style={{
                  width:"75%",
                  paddingBottom:".8%",
                  color:"rgb(83, 83, 89)",
                  fontSize:"15px",
                  fontWeight:"650"
                }}>
                   <GridContainer>
                      <GridItems xs={2} sm={2} md={2}>Subject</GridItems>
                      <GridItems xs={10} sm={10} md={10}>: Mathematics</GridItems>
                      <GridItems xs={2} sm={2} md={2}>Class</GridItems>
                      <GridItems xs={10} sm={10} md={10}>: 12th Science (With Mathematics)</GridItems>
                      <GridItems xs={2} sm={2} md={2}>Department</GridItems>
                      <GridItems xs={10} sm={10} md={10}>: Science</GridItems>
                   </GridContainer>
                </div>
               <div>
                   <GridContainer 
                     style={{ 
                        width:"99.8%",
                        margin:" 0 .1%",
                        background:"#8c8c8c",
                        paddingRight:"3%"
                      }}
                   >
                      <GridItems 
                        sx={12} md={5} md={8}
                         style={{
                        width:"100%",
                        color:"#4d4d4d",
                        fontSize:"19px",
                        fontWeight:"500",
                        margin:"0",
                        paddingTop:"2.1%",
                        color:"white"
                      }} 
                      key={DataForTable.HeaderName[0]}
                      >
                      {DataForTable.HeaderName[0]}
                      </GridItems> 

                        <GridItems 
                        sx={12} md={5} md={2}
                         style={{
                        width:"100%",
                        color:"#4d4d4d",
                        fontSize:"19px",
                        fontWeight:"500",
                        margin:"0",
                        paddingTop:"2.1%",
                        color:"white"
                      }} 
                      key={DataForTable.HeaderName[1]}
                      >
                      {DataForTable.HeaderName[1]}
                      </GridItems>  

                        <GridItems 
                        sx={12} md={5} md={2}
                         style={{
                        width:"100%",
                        color:"#4d4d4d",
                        fontSize:"19px",
                        fontWeight:"500",
                        margin:"0",
                        paddingTop:"2.1%",
                        color:"white"
                      }} 
                      key={DataForTable.HeaderName[2]}
                      >
                      {DataForTable.HeaderName[2]}
                      </GridItems>    
                    </GridContainer>
                    </div>

                    <CardBody 
       style={{
         padding:"0 ",
         borderBottom:"1px solid gray",
         minHeight:"280px",
         maxHeight:"300px",
         overflow:"auto"
         }}
      >
       
          { ArrayToDisplay.map(data=>(
              <GridContainer  
                // onClick={()=>props.changeHandler(items[0],props.RefKey)}
                 style={{
                  width:"99.5%",
                  background:"white",
                  borderBottom:"1px solid #bfbfbf",
                  fontSize:'14px',
                  fontWeight:'500',
                  marginLeft:".1%"
                 }}
                 key={data.id}
              >
               
                 <GridItems 
                   xs={6} 
                   sm={6}
                   md={8}
                //   key= {sIndex}
                    style={{ 
                       width:"100%",
                       color:"black",
                       marginBottom:".3%",
                       paddingTop:"1% "
                      }}
                  >
                  {data.note}
                 </GridItems>
                 <GridItems 
                   xs={6} 
                   sm={6}
                   md={2}
                //   key= {sIndex}
                    style={{ 
                       width:"100%",
                       color:"#4d4d4d",
                       marginBottom:".3%",
                       paddingTop:"1% "
                      }}
                  >
                  {data.CreatedDate}
                 </GridItems>
                 <GridItems 
                   xs={6} 
                   sm={6}
                   md={2}
                //   key= {sIndex}
                    style={{ 
                       width:"100%",
                       color:"#4d4d4d",
                       marginBottom:".3%",
                       paddingTop:"1% "
                      }}
                  >
                  {data.Deadline}
                 </GridItems> 
             </GridContainer>
          ))}    
     </CardBody>
</Card>
        </div>

    );
}

export default NotesDisplayForm;