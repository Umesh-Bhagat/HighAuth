import React from "react"

const TestSection = ( props ) =>{
   return(
      <div>
         <h1>Welocme to the TestSection Page..</h1>
         <p>teachers conduct test  <br/>
           1. "Progress Booster" contain black <br/>
             And White Page Containing s.no , <br/>
             And Name Of the Subject,Total Chapter <br/>
             contain, total number of Topic(for Student)
           2."Progress Booster" contain subject Page,Chapter<br/>
              page And Topic Page along with Create buttom on Each Page.
           3."Topic Page" contain Only topics Name <br/>
             And on clicking On topic page elements User Get Exist To the Topic <br/>
             related Questions.(also number of question contain And number of Question Completed)
             //Answer of the question Exist only After the clicking on the Question.
           4.teachers add all the questions.
           5.question types
             a. multiple choice Question
             b. short questions
             c. long Questions
           6.every Question Has Its own Unique id 
           </p>

      </div>
   );
}

export default TestSection;