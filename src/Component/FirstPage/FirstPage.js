import React , {Component} from "react";
import Header from "../../UIElements/Header/Header.jsx";
import  AuthPage from "../AuthPage/AuthPage";

class FirstPage extends Component {
  render(){
        return(
          <div style={{ background: "linear-gradient(to top right, #ffffff -9%, #666699 92%)",height:"670px"}}>
          
             <AuthPage/>
          </div>
        );
    }
}

export default FirstPage;